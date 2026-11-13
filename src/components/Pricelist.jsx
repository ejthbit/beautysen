export const pricingData = [
  {
    category: 'Botulotoxin',
    items: [
      { label: 'Osobní konzultace s lékařem', price: '300 Kč', note: 'tvorba léčebného plánu' },
      { label: 'Malé oblasti', price: 'od 500 Kč', note: 'gummy smile, brada' },
      { label: '1 oblast', price: 'od 1 300 Kč', note: 'čelo / mračivka / oči' },
      { label: '2 oblasti', price: 'od 2 500 Kč', note: '' },
      { label: '3 oblasti', price: 'od 3 800 Kč', note: '' },
      { label: 'Podpaží / plosky nohou', price: 'od 5 800 Kč', note: '' },
    ],
  },
  {
    category: 'Péče o pleť',
    items: [
      {
        label: 'Skincare poradenství (60 min)',
        price: '1 000 Kč',
        note: 'analýza pleti a plán domácí péče',
      },
    ],
  },
  {
    category: 'Polynukleotidy',
    items: [
      { label: '1 oblast', price: 'od 4 500 Kč', note: 'obličej, krk, dekolt, ruce' },
      { label: 'Oční okolí', price: 'od 4 000 Kč', note: '' },
      { label: 'Balíček 3 ošetření', price: '12 000 Kč', note: '1 oblast' },
    ],
  },
  {
    category: 'Rejuran',
    items: [
      { label: 'Rejuran Healer', price: 'od 8 000 Kč', note: 'obličej a krk (2 ml)' },
      { label: 'Rejuran I', price: 'od 5 500 Kč', note: 'oční okolí' },
      { label: 'Rejuran S', price: 'od 6 000 Kč', note: 'jizvy a textura pleti' },
      { label: 'Rejuran Healer, balíček 3 ošetření', price: '22 000 Kč', note: '' },
      { label: 'Rejuran I, balíček 3 ošetření', price: '15 000 Kč', note: '' },
    ],
  },
  {
    category: 'Kyselina hyaluronová – bioremodelace',
    items: [
      { label: 'Profhilo®', price: 'od 5 000 Kč', note: 'bioremodelace' },
      { label: 'Profhilo® Structura', price: 'od 8 000 Kč', note: 'obnova tkání' },
    ],
  },
  {
    category: 'Kyselina hyaluronová – skin booster',
    items: [{ label: 'Croma Revitalis', price: 'od 3 000 Kč', note: '1 ml' }],
  },
  {
    category: 'Výplně kyselinou hyaluronovou',
    items: [
      { label: 'Výplň rtů', price: 'od 5 000 Kč', note: 'do 1 ml' },
      { label: 'Nosoretní rýhy a jiné hluboké vrásky', price: 'od 5 000 Kč', note: 'obě strany (cca 1 ml)' },
      { label: 'Bloková anestezie', price: '500 Kč', note: '' },
    ],
  },
  {
    category: 'Balíčky a zážitky',
    items: [
      {
        label: 'VIP Friend Beauty Session',
        price: '500 Kč/os',
        note: '3–5 osob, cca 3 hodiny + ošetření dle ceníku',
      },
    ],
  },
];

export const PriceRow = ({ item }) => (
  <div className="flex items-baseline justify-between py-4 border-b last:border-b-0 border-[#e8e0d8] hover:border-[#d4c5bb] transition-colors">
    <div className="pr-4">
      <span className="text-base text-[#2a2320]">{item.label}</span>
      {item.note && <span className="block text-xs tracking-wider text-[#6b6260] uppercase mt-0.5">{item.note}</span>}
    </div>
    <span className="text-base font-medium text-[#7a5e53] flex-shrink-0">{item.price}</span>
  </div>
);

export const Pricelist = () => {
  return (
    <section
      id="cenik"
      className="bg-[#f7f5f2] py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-light text-[#2a2320] mb-6">Ceník</h2>
        <p className="text-xl text-[#6b6260] italic mb-16 leading-relaxed max-w-sm">
          Ceny se mohou lišit dle rozsahu ošetření a množství aplikovaného materiálu. Přesná cena je vždy stanovena při
          osobní konzultaci.
        </p>

        {/* Categories: collapsed by default, native details/summary keeps prices in the HTML for SEO */}
        {/* Same width and nav clearance as the services list */}
        <div className="max-w-4xl md:mr-24 xl:mr-0 border-t border-[#d4c5bb]">
          {pricingData.map((section, idx) => (
            <details
              key={idx}
              className="group border-b border-[#d4c5bb]"
            >
              <summary className="flex items-center justify-between gap-5 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="section-label text-[#7a5e53]">{section.category}</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 text-[#7a5e53] transition-transform duration-300 group-open:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>

              {/* Price rows */}
              <div className="pb-2">
                {section.items.map((item) => (
                  <PriceRow
                    key={item.label}
                    item={item}
                  />
                ))}
              </div>
            </details>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10">
          <p className="text-xl text-[#6b6260] italic">
            Máte dotaz k ceně nebo postupu?{' '}
            <a
              href="#kontakt"
              className="text-[#7a5e53] underline underline-offset-2 hover:text-[#6b5048] transition-colors"
            >
              Neváhejte nás kontaktovat.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
