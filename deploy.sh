#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# BeautySen – deploy to SFTP
#
# Usage:
#   ./deploy.sh
#
# Requires:
#   lftp  →  brew install lftp
#
# Setup:
#   cp .env.deploy.example .env.deploy
#   fill in your credentials, then run the script
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env.deploy"

# ── Load credentials ──────────────────────────────────────────────────────────
if [ -f "$ENV_FILE" ]; then
  # shellcheck source=/dev/null
  source "$ENV_FILE"
else
  echo "✖  .env.deploy not found."
  echo "   Copy .env.deploy.example → .env.deploy and fill in your credentials."
  exit 1
fi

: "${SFTP_HOST:?Missing SFTP_HOST in .env.deploy}"
: "${SFTP_USER:?Missing SFTP_USER in .env.deploy}"

REMOTE_DIR="${SFTP_REMOTE_DIR:-/beautysen.cz/web}"
BUILD_DIR="$SCRIPT_DIR/build"
BACKUP_DIR="$SCRIPT_DIR/backups"

# ── Check dependencies ────────────────────────────────────────────────────────
if ! command -v lftp &>/dev/null; then
  echo "✖  lftp is not installed."
  echo "   Install it with:  brew install lftp"
  exit 1
fi

# ── Resolve auth method ───────────────────────────────────────────────────────
if [ -n "${SFTP_KEY_FILE:-}" ]; then
  OPEN_CMD="set sftp:connect-program \"ssh -a -x -i ${SFTP_KEY_FILE}\"; open sftp://${SFTP_USER}@${SFTP_HOST}"
elif [ -n "${SFTP_PASS:-}" ]; then
  OPEN_CMD="open sftp://${SFTP_USER}:${SFTP_PASS}@${SFTP_HOST}"
else
  echo "✖  Set SFTP_PASS or SFTP_KEY_FILE in .env.deploy"
  exit 1
fi

# ── 1. Backup current server state ───────────────────────────────────────────
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_SNAPSHOT="$BACKUP_DIR/$TIMESTAMP"
BACKUP_ARCHIVE="$BACKUP_DIR/backup_$TIMESTAMP.tar.gz"
LFTP_BACKUP=""
LFTP_SCRIPT=""

echo ""
echo "▸ Backing up current server state..."
mkdir -p "$BACKUP_SNAPSHOT"

LFTP_BACKUP=$(mktemp /tmp/beautysen-backup.XXXXXX)
trap 'rm -f "$LFTP_BACKUP" "$LFTP_SCRIPT"' EXIT

cat > "$LFTP_BACKUP" << LFTP
set sftp:auto-confirm yes
set net:max-retries 3
set net:reconnect-interval-base 5
set net:timeout 30

${OPEN_CMD}

cd ${REMOTE_DIR}
mirror --parallel=4 --verbose=1 --exclude-glob rezervace/ ./ ${BACKUP_SNAPSHOT}/

bye
LFTP

lftp -f "$LFTP_BACKUP"
tar -czf "$BACKUP_ARCHIVE" -C "$BACKUP_DIR" "$TIMESTAMP"
rm -rf "$BACKUP_SNAPSHOT"
echo "  ✓ Backup saved → $BACKUP_ARCHIVE"

# ── 2. Build ──────────────────────────────────────────────────────────────────
echo ""
echo "▸ Building + pre-rendering..."
pnpm prerender
echo "  ✓ Build complete → $BUILD_DIR"

# ── 3. Write lftp script to a temp file ──────────────────────────────────────
LFTP_SCRIPT=$(mktemp /tmp/beautysen-deploy.XXXXXX)

cat > "$LFTP_SCRIPT" << LFTP
set sftp:auto-confirm yes
set net:max-retries 3
set net:reconnect-interval-base 5
set net:timeout 30

${OPEN_CMD}

cd ${REMOTE_DIR}

# ── Remove old Vite-hashed asset bundles ──────────────────────────────────────
echo "  Cleaning old hashed assets..."
glob -a rm -f assets/index-*.js
glob -a rm -f assets/index-*.css
glob -a rm -f assets/bg-*.js
glob -a rm -f assets/bg-*.css
glob -a rm -f assets/bg-*.png
glob -a rm -f assets/bg-*.webp

# ── Upload new build ──────────────────────────────────────────────────────────
echo "  Uploading new build..."
mirror --reverse --parallel=4 --verbose=1 --exclude-glob img/ ${BUILD_DIR}/ ./

echo "  Uploading images..."
mirror --reverse --parallel=2 --verbose=1 ${BUILD_DIR}/img/ ./img/

bye
LFTP

# ── 4. Execute ────────────────────────────────────────────────────────────────
echo ""
echo "▸ Deploying to ${SFTP_HOST}:${REMOTE_DIR}..."
echo ""

lftp -f "$LFTP_SCRIPT"

echo ""
echo "✓ Deployed successfully to ${SFTP_HOST}:${REMOTE_DIR}"
