export const Pricelist = () => {
  const pricingData = [
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
      category: 'Profhilo®',
      items: [
        { label: 'Profhilo®', price: 'od 5 000 Kč', note: 'bioremodelace' },
        { label: 'Profhilo® Structura', price: 'od 8 000 Kč', note: 'obnova tkání' },
      ],
    },
  ];

  return (
    <section
      id="cenik"
      className="bg-[#f7f5f2] py-20 md:py-32"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Header */}
        <h2 className="text-5xl font-light text-[#2a2320] mb-6">Ceník</h2>
        <p className="text-xl text-[#6b6260] italic mb-16 leading-relaxed max-w-sm">
          Ceny se mohou lišit dle rozsahu ošetření a množství aplikovaného materiálu. Přesná cena je vždy stanovena při
          osobní konzultaci.
        </p>

        {/* Categories */}
        <div className="space-y-16">
          {pricingData.map((section, idx) => (
            <div key={idx}>
              {/* Category label + rule */}
              <div className="flex items-center gap-5 mb-6">
                <span className="section-label text-[#7a5e53]">{section.category}</span>
                <div className="h-px bg-[#d4c5bb] flex-1" />
              </div>

              {/* Price rows */}
              <div>
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-baseline justify-between py-4 border-b border-[#e8e0d8] group hover:border-[#d4c5bb] transition-colors"
                  >
                    <div className="pr-4">
                      <span className="text-base text-[#2a2320]">{item.label}</span>
                      {item.note && (
                        <span className="block text-xs tracking-wider text-[#6b6260] uppercase mt-0.5">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <span className="text-base font-medium text-[#7a5e53] flex-shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-[#d4c5bb] text-center">
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
