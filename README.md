# BeautySen

Website pro estetickou medicínu kliniky [beautysen.cz](https://www.beautysen.cz/) ve Frýdku-Místku. Prezentuje procedury
botulotoxinu a kyseliny hyaluronové od MUDr. Elišky Kotek, MBA.

## Tech Stack

- **React** 18 + **Vite** 5
- **Tailwind CSS** 3
- **React Router DOM** 7
- **React Helmet Async** – správa SEO meta tagů

## Struktura projektu

```
src/
├── components/
│   ├── Hero.jsx        # Hero sekce s CTA
│   ├── Home.jsx        # Hlavní stránka
│   ├── Layout.jsx      # Navigace a patička
│   ├── Services.jsx    # Přehled služeb s modálními okny
│   ├── About.jsx       # O nás / bio doktorky
│   ├── Procedure.jsx   # Kroky procedury
│   └── Pricelist.jsx   # Ceník
├── App.jsx             # Router
├── main.jsx            # Vstupní bod
└── index.css           # Tailwind + vlastní animace
public/
└── img/                # Obrázky
```

## Vývoj

```bash
pnpm install    # Instalace závislostí
pnpm dev        # Dev server → http://localhost:5173
pnpm build      # Produkční build → build/
pnpm preview    # Náhled produkčního buildu
```

## Nasazení

Nasazení probíhá přes SFTP pomocí skriptu `deploy.sh`. Před spuštěním je potřeba soubor `.env.deploy` s přihlašovacími
údaji (viz `.env.deploy.example` pokud existuje).

```bash
pnpm upload
# or directly:
./deploy.sh
```
