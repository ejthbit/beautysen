const steps = [
  'Konzultace a plán ošetření',
  'Dezinfekce a značení bodů',
  'Aplikace (10–20 minut)',
  'Okamžitý návrat k běžnému režimu',
  'Kontrola efektu za 10–14 dní',
];

export default function ProcedureStepper() {
  return (
    <div className="w-full">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-px bg-[#8d6e63]/70" />
        <span className="section-label text-[#c9a882]">Průběh zákroku</span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-light text-white mb-16 md:mb-20">Jak probíhá ošetření</h2>

      {/* Timeline */}
      <div className="relative max-w-xl">
        {/* Vertical connecting line */}
        <div
          className="absolute left-[15px] w-px bg-[#8d6e63]/25"
          style={{ top: '16px', bottom: '16px' }}
        />

        <ol className="space-y-10">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-8"
            >
              {/* Numbered circle */}
              <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border border-[#8d6e63]/50 bg-[#2a2320] flex items-center justify-center">
                <span
                  className="text-xs"
                  style={{ color: '#c9a882' }}
                >
                  {index + 1}
                </span>
              </div>

              {/* Step text */}
              <div className="pt-1">
                <p className="text-lg text-white/70 font-light leading-relaxed">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 flex items-center gap-4">
        <div className="w-8 h-px bg-[#8d6e63]/50" />
        <a
          href="https://beautysen.cz/rezervace"
          className="section-label text-[#c9a882] hover:text-white transition-colors duration-300 inline-flex items-center gap-3 hover:gap-5"
        >
          <span>Objednat konzultaci</span>
          <span className="text-base leading-none">→</span>
        </a>
      </div>
    </div>
  );
}
