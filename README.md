# BeautySen

Website pro estetickou medicínu kliniky [beautysen.cz](https://www.beautysen.cz/) ve Frýdku-Místku. Prezentuje botulotoxin,
biostimulaci pleti, výplně kyselinou hyaluronovou a skincare poradenství od MUDr. Elišky Kotek, MBA a MUDr. Terézie
Sobotkové.

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
│   ├── Services.jsx    # Přehled služeb na hlavní stránce
│   ├── ServicePage.jsx # Stránka služby /sluzby/<slug>/
│   ├── serviceContent.jsx # Vykreslení služeb z content/services.json
│   ├── About.jsx       # O nás / bio lékařek
│   └── Pricelist.jsx   # Ceník
├── content/
│   └── services.json   # Texty služeb, pořadí v menu (návod v klíči "_help")
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
