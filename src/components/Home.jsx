import { NavLink } from 'react-router-dom';
import { Contact } from './Layout';
import { Pricelist } from './Pricelist';
import { Services } from './Services';
import ProcedureStepper from './Procedure';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';

export function Home() {
  return (
    <>
      <Helmet>
        <title>BeautySen – estetická medicína | botulotoxin Praha</title>

        <meta
          name="description"
          content="BeautySen – profesionální aplikace botulotoxinu a kyseliny hyaluronové. Přirozené omlazení bez chirurgického zákroku. Lékařské ošetření MUDr. Eliška Kotek, MBA."
        />

        <link
          rel="canonical"
          href="https://www.beautysen.cz/"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="BeautySen – estetická medicína"
        />
        <meta
          property="og:description"
          content="Profesionální aplikace botulotoxinu a kyseliny hyaluronové.. Bezpečí, důvěra a diskrétnost."
        />
        <meta
          property="og:url"
          content="https://www.beautysen.cz/"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:image"
          content="https://www.beautysen.cz/rezervace/wp-content/uploads/2026/01/logo-150x150.webp"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:card"
          content="summary"
        />
        <meta
          name="twitter:title"
          content="BeautySen – estetická medicína | botulotoxin Praha"
        />
        <meta
          name="twitter:description"
          content="Profesionální aplikace botulotoxinu a kyseliny hyaluronové. Přirozené omlazení bez chirurgického zákroku."
        />
        <meta
          name="twitter:image"
          content="https://www.beautysen.cz/rezervace/wp-content/uploads/2026/01/logo-150x150.webp"
        />
      </Helmet>
      <div className="font-serif text-gray-800">
        {/* Hero */}
        <Hero />

        {/* ── Mission ─────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-12"></div>

            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              {/* Large display heading */}
              <div className="md:col-span-5">
                <h2 className="text-5xl">Naše poslání</h2>
              </div>

              {/* Body text */}
              <div className="md:col-span-7 space-y-5 md:pt-2">
                <p className="text-lg text-[#5a5350] leading-relaxed">
                  Naším posláním je pomáhat ženám i mužům cítit se sebevědomě, svěže a spokojeně ve své vlastní kůži –
                  bez ztráty přirozenosti, mimiky a osobnosti.
                </p>
                <p className="text-lg text-[#5a5350] leading-relaxed">
                  Neusilujeme o dokonalost podle šablon. Každý obličej je jedinečný a zaslouží si individuální přístup.
                  Proto ke každému klientovi přistupujeme s respektem, empatií a odborností.
                </p>
                <NavLink
                  to="/o-nas"
                  className="inline-flex items-center gap-3 section-label text-[#8d6e63] hover:gap-5 transition-all duration-300 mt-2"
                >
                  <span>O nás</span>
                  <span className="text-base leading-none">→</span>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <Services />

        {/* ── Procedure ─────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-[#2a2320]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <ProcedureStepper />
          </div>
        </section>

        {/* ── Pricelist ────────────────────────────────────────── */}
        <Pricelist />

        {/* ── Contact ──────────────────────────────────────────── */}
        <Contact />
      </div>
    </>
  );
}
