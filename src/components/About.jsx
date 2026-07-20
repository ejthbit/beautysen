import { Helmet } from 'react-helmet-async';
import { Contact } from './Layout';

export function About() {
  return (
    <>
      <Helmet>
        <title>O nás | BeautySen</title>
        <meta
          name="description"
          content="Estetická medicína BeautySen ve Frýdku-Místku – bezpečí, důvěra a diskrétnost pro klienty z Frýdku-Místku i Ostravy. Ošetření provádí MUDr. Eliška Kotek, MBA."
        />
        <link
          rel="canonical"
          href="https://www.beautysen.cz/o-nas"
        />
        <meta
          property="og:title"
          content="O nás | BeautySen"
        />
        <meta
          property="og:description"
          content="Bezpečí, důvěra a diskrétnost v estetické medicíně."
        />
        <meta
          property="og:url"
          content="https://www.beautysen.cz/o-nas"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:image"
          content="https://www.beautysen.cz/rezervace/wp-content/uploads/2026/01/logo-150x150.webp"
        />
        <meta
          name="twitter:card"
          content="summary"
        />
        <meta
          name="twitter:title"
          content="O nás | BeautySen"
        />
        <meta
          name="twitter:description"
          content="Bezpečí, důvěra a diskrétnost v estetické medicíně. Ošetření provádí MUDr. Eliška Kotek, MBA."
        />
        <meta
          name="twitter:image"
          content="https://www.beautysen.cz/rezervace/wp-content/uploads/2026/01/logo-150x150.webp"
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.beautysen.cz/" },
              { "@type": "ListItem", "position": 2, "name": "O nás", "item": "https://www.beautysen.cz/o-nas" }
            ]
          }
        `}</script>
      </Helmet>

      <div className="font-serif text-[#2a2320]">
        {/* ── Page intro ────────────────────────────────────────── */}
        <section className="min-h-[60vh] bg-[url(/img/bg.webp)] bg-cover bg-center flex items-end pt-32 pb-16 relative">
          {/* Soft overlay so text is readable */}
          <div className="absolute inset-0 bg-[#f7f5f2]/60" />
          <div className="relative max-w-6xl mx-auto px-6 md:px-12 w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#8d6e63]" />
              <span className="section-label text-[#7a5e53]">Bezpečí, důvěra a diskrétnost</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-light text-[#2a2320]">O nás</h1>
            <p className="text-xl text-[#5a5350] mt-4 max-w-lg leading-relaxed">
              Vaše krása není trend. Je osobní. Bezpečí, důvěra a diskrétnost. Víme, že rozhodnutí podstoupit estetické
              ošetření je osobní. Proto vytváříme prostředí, kde se budete cítit bezpečně, pochopeně a bez nátlaku.
            </p>
          </div>
        </section>

        {/* ── Doctor section ───────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              {/* Photo */}
              <div className="relative">
                <img
                  src="/img/foto.webp"
                  alt="MUDr. Eliška Kotek, MBA – lékařka estetické medicíny BeautySen"
                  className="w-full aspect-[3/4] object-cover rounded-sm"
                  width="400"
                  height="533"
                  loading="lazy"
                />
                {/* Decorative offset border */}
                <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#8d6e63]/20 rounded-sm -z-10 hidden md:block" />
              </div>

              {/* Bio text */}
              <div className="md:pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[#8d6e63]" />
                  <span className="section-label text-[#7a5e53]">Ošetřovat vás bude</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-[#2a2320] mb-2">MUDr. Eliška Kotek, MBA</h2>
                <div className="space-y-5">
                  <p className="text-lg text-[#5a5350] leading-relaxed">
                    Medicínu vystudovala s cílem spojit odborné znalosti s citem pro detail, přirozenost a harmonii
                    obličeje.
                  </p>
                  <p className="text-lg text-[#5a5350] leading-relaxed">
                    Absolvovala certifikovaná školení v oblasti estetické medicíny a klade důraz na individuální přístup
                    ke každému klientovi.
                  </p>
                </div>

                {/* Trust marks */}
                <div className="mt-10 space-y-3">
                  {['Certifikovaný lékař', 'Ověřené preparáty', 'Individuální přístup', 'Bezpečí a diskrétnost'].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4"
                      >
                        <div className="w-px h-4 bg-[#8d6e63]" />
                        <span className="text-xl text-[#6b6260]">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Philosophy ───────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#f7f5f2]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              {/* Column 1 */}
              <div>
                <div className="w-8 h-px bg-[#8d6e63] mb-4" />
                <h2 className="text-3xl font-light text-[#2a2320] mb-8">Medicína, ne kosmetický salon</h2>
                <p className="text-base text-[#5a5350] leading-relaxed mb-6">
                  Veškerá ošetření provádí kvalifikovaný lékař. Estetickou medicínu vnímáme jako kombinaci vědy,
                  zkušeností a citu pro detail. Pracujeme výhradně s ověřenými přípravky, moderními technikami a důrazem
                  na maximální bezpečnost. Každé ošetření začíná…
                </p>
                <ul className="space-y-3">
                  {[
                    'osobní konzultací',
                    'pochopením vašich přání',
                    'realistickým nastavením očekávání',
                    'individuálním plánem',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 text-xl text-[#6b6260]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#8d6e63] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <div className="w-8 h-px bg-[#8d6e63] mb-4" />
                <h2 className="text-3xl font-light text-[#2a2320] mb-8">Krása bez tlaku, bez extrémů</h2>
                <p className="text-base text-[#5a5350] leading-relaxed mb-6">
                  Nikdy neslibujeme nemožné. Vysvětlujeme, doporučujeme a společně hledáme nejlepší cestu. Krása bez
                  tlaku, bez extrémů V dnešní době jsme neustále vystaveni nerealistickým ideálům. My jdeme jinou
                  cestou. Nechceme, abyste vypadali "udělaně".Chceme, abyste vypadali odpočatě, zdravě a přirozeně.
                  Proto:
                </p>
                <ul className="space-y-3">
                  {[
                    'nepřeháníme objemy',
                    'netvoříme nepřirozené kontury',
                    'neničíme mimiku',
                    'respektujeme individualitu',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 text-xl text-[#6b6260]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#8d6e63] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}
