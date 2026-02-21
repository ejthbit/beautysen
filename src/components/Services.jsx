import { useState } from 'react';

export const Services = () => {
  const [modalContent, setModalContent] = useState(null);

  const services = [
    {
      title: 'Botulotoxin',
      subtitle: 'Vyhlazení vrásek',
      description: 'Osvědčená a bezpečná metoda k vyhlazení mimických vrásek a uvolnění nadměrné svalové aktivity.',
      details: (
        <div className="space-y-5">
          <p className="text-[#5a5350] leading-relaxed">
            Působí tak, že dočasně uvolní sval, který vrásku vytváří. Výsledkem je odpočatý a svěží vzhled.
          </p>
          <ul className="space-y-2">
            {[
              'Rychlé ošetření',
              'Minimální diskomfort',
              'Bez rekonvalescence',
              'Přirozený efekt',
              'Účinek 3–6 měsíců',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-xl text-[#5a5350]"
              >
                <span className="w-1 h-1 rounded-full bg-[#8d6e63] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#9a8f8a] italic border-l-2 border-[#8d6e63]/30 pl-4">
            Ošetření není vhodné během těhotenství a kojení. Vše je vždy individuálně posouzeno při konzultaci.
          </p>
          <div className="border-t border-[#e8e0d8] pt-5">
            <p className="section-label text-[#8d6e63] mb-4">Oblasti aplikace</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xl font-medium text-[#2a2320] mb-2">Horní část obličeje</p>
                <ul className="space-y-1">
                  {['Čelo a mračivka', 'Vrásky kolem očí (vějířky)', 'Brow lift', 'Nadměrné pocení'].map((i) => (
                    <li
                      key={i}
                      className="text-xl text-[#6b6260] flex items-center gap-2"
                    >
                      <span className="w-1 h-px bg-[#8d6e63]/50" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xl font-medium text-[#2a2320] mb-2">Spodní část obličeje</p>
                <ul className="space-y-1">
                  {[
                    'Gummy smile & Marionette lines',
                    'Nefertiti neck lift',
                    'Masseter (skřípání zubů)',
                    'Platysma (krk)',
                  ].map((i) => (
                    <li
                      key={i}
                      className="text-xl text-[#6b6260] flex items-center gap-2"
                    >
                      <span className="w-1 h-px bg-[#8d6e63]/50" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Profhilo®',
      subtitle: 'Hyaluronové výplně',
      description:
        'Jsou přirozené látky tělu vlastní, které se používají k modelaci kontur obličeje, doplnění objemu a vyhlazení hlubších vrásek. Stimulují tvorbu kolagenu a elastinu a pomáhají s hojením jizev.',
      details: (
        <div className="space-y-5">
          <p className="text-[#5a5350] leading-relaxed">
            Používáme prémiové materiály Profhilo® pro hloubkovou hydrataci a harmonizaci rysů.
          </p>
          <div className="border-t border-[#e8e0d8] pt-5 space-y-4">
            <p className="section-label text-[#8d6e63]">Rozdíl mezi Profhilo® a Profhilo Structura®</p>
            <div className="space-y-3">
              <div className="border-l-2 border-[#8d6e63]/30 pl-4">
                <p className="text-xl font-medium text-[#2a2320] mb-1">Profhilo®</p>
                <p className="text-xl text-[#6b6260] leading-relaxed">
                  Bioremodelační ošetření zaměřené na hydrataci a zlepšení kvality kůže. Stimuluje tvorbu kolagenu a
                  elastinu, zvyšuje pružnost bez objemového efektu.
                </p>
              </div>
              <div className="border-l-2 border-[#8d6e63]/30 pl-4">
                <p className="text-xl font-medium text-[#2a2320] mb-1">Profhilo® Structura</p>
                <p className="text-xl text-[#6b6260] leading-relaxed">
                  Určeno k obnově hlubších tukových struktur. Zpevňuje kontury, zpomaluje projevy poklesu tkání bez
                  nepřirozeného zvětšení objemu.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#e8e0d8] pt-5">
            <p className="section-label text-[#8d6e63] mb-4">Oblasti aplikace</p>
            <ul className="space-y-1">
              {[
                'Obličej a krk – brada, tváře, krk a dekolt',
                'Jizvy a strie – akné, chirurgické zákroky, Císařský řez',
                'Labia – omlazení a vyhlazení struktury',
              ].map((i) => (
                <li
                  key={i}
                  className="text-xl text-[#6b6260] flex items-center gap-2"
                >
                  <span className="w-1 h-px bg-[#8d6e63]/50" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="sluzby"
      className="bg-[#f7f5f2]"
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-14 md:pb-20">
        <h2 className="text-5xl md:text-6xl font-light text-[#2a2320]">Služby</h2>
      </div>

      {/* Service rows */}
      <div className="border-t border-[#d4c5bb]">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-b border-[#d4c5bb] transition-colors duration-300"
            style={{ backgroundColor: index % 2 === 0 ? '#f7f5f2' : '#f0ece7' }}
          >
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* Content + CTA */}
                <div className="md:col-span-8 space-y-5">
                  <span className="section-label text-[#8d6e63]">{service.subtitle}</span>
                  <h3 className="text-3xl md:text-4xl font-light text-[#2a2320] tracking-wide">{service.title}</h3>
                  <p className="text-[#6b6260] text-base leading-relaxed max-w-2xl pt-1">{service.description}</p>
                  <button
                    onClick={() => setModalContent(service)}
                    className="inline-flex items-center gap-3 section-label text-[#8d6e63] hover:gap-5 transition-all duration-300"
                  >
                    <span>Zjistit více</span>
                    <span className="text-base leading-none">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalContent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a2320]/70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setModalContent(null)}
        >
          <div className="bg-[#f7f5f2] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal accent bar */}
            <div className="h-0.5 bg-[#8d6e63]" />
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="section-label text-[#8d6e63] mb-2">{modalContent.subtitle}</p>
                  <h3
                    id="modal-title"
                    className="text-3xl font-light text-[#2a2320]"
                  >
                    {modalContent.title}
                  </h3>
                </div>
                <button
                  onClick={() => setModalContent(null)}
                  aria-label="Zavřít"
                  className="text-[#9a8f8a] hover:text-[#2a2320] transition-colors text-2xl leading-none mt-1 ml-4"
                >
                  ×
                </button>
              </div>

              <div className="text-[#2a2320]">{modalContent.details}</div>

              <button
                onClick={() => setModalContent(null)}
                className="mt-10 w-full py-3 border border-[#d4c5bb] text-[#6b6260] text-xl tracking-wider hover:border-[#8d6e63] hover:text-[#8d6e63] transition-colors duration-200"
              >
                Zavřít
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
