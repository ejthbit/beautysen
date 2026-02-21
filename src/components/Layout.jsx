import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';

export function NotFound() {
  return (
    <div className="min-h-screen mx-auto max-w-7xl px-2 py-4 flex flex-col items-center justify-center text-2xl">
      <Helmet>
        <title>404 – Stránka nenalezena | BeautySen</title>
        <meta
          name="description"
          content="Stránka, kterou hledáte, neexistuje. Můžete se vrátit na úvodní stránku BeautySen a pokračovat v objevování našich služeb estetické medicíny."
        />
        <meta
          name="robots"
          content="noindex, follow"
        />
        <link
          rel="canonical"
          href="https://www.beautysen.cz/404"
        />
      </Helmet>
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <h2 className="text-3xl mb-4">Stránka nenalezena</h2>
      <p className="text-xl text-gray-600 mb-6 text-center">
        Omlouváme se, ale stránka, kterou hledáte, neexistuje. Zkontrolujte prosím URL nebo se vraťte na úvodní stránku.
      </p>
      <NavLink
        to="/"
        className="bg-[#8d6e63] uppercase text-xl mt-4 text-white px-8 py-3 shadow hover:bg-amber-800 transition"
      >
        Zpět na úvod
      </NavLink>
    </div>
  );
}

export const Logo = () => (
  <span className="mr-de-haviland-regular select-none hover:[text-shadow:0_0_1px_black]">BeautySen</span>
);

function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-[#f7f5f2] md:bg-transparent">
      <div className="mx-auto max-w-7xl px-10 pt-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        {/* Desktop nav */}
        <nav
          aria-label="Hlavní navigace"
          className="hidden md:flex mt-2 text-xl flex-col"
        >
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              `transition ${isActive ? 'text-[#8d6e63] text-xl' : 'text-gray-700 hover:text-[#8d6e63] text-xl'}`
            }
          >
            Domů
          </NavLink>
          <NavLink
            onClick={() => window.scrollTo(0, 0)}
            to="/o-nas"
            className={({ isActive }) =>
              `transition ${isActive ? 'text-[#8d6e63] text-xl' : 'text-gray-700 hover:text-[#8d6e63] text-xl'}`
            }
          >
            O nás
          </NavLink>
          <NavHashLink
            smooth
            to="/#cenik"
            elementId="cenik"
            className="text-gray-700 hover:text-[#8d6e63] text-xl"
          >
            Ceník
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#kontakt"
            elementId="kontakt"
            className="text-gray-700 hover:text-[#8d6e63] text-xl"
          >
            Kontakt
          </NavHashLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobilní navigace"
          className="md:hidden bg-[#f7f5f2] px-6 py-4 space-y-4 text-xl"
        >
          <NavLink
            onClick={() => setOpen(false)}
            to="/"
            className="block"
          >
            Domů
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/o-nas"
            className="block"
          >
            O nás
          </NavLink>
          <NavHashLink
            onClick={() => setOpen(false)}
            smooth
            to="/#cenik"
            elementId="cenik"
            className="block"
          >
            Ceník
          </NavHashLink>
          <NavHashLink
            onClick={() => setOpen(false)}
            smooth
            to="/#kontakt"
            elementId="kontakt"
            className="block"
          >
            Kontakt
          </NavHashLink>
        </nav>
      )}
    </header>
  );
}

export function Layout({ children }) {
  return (
    <div className="relative">
      <TopBar />
      <main>{children}</main>
    </div>
  );
}

export function Contact() {
  return (
    <section
      id="kontakt"
      className="bg-[#1e1a18] text-[#c8bdb8]"
    >
      {/* Accent bar */}
      <div className="h-px bg-[#8d6e63]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Left: info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#8d6e63]/70" />
              <span className="section-label text-[#8d6e63]/80">Najdete nás</span>
            </div>
            <h2 className="text-5xl font-light text-white mb-12">Kontakt</h2>

            <address className="not-italic space-y-8 text-[#9a8f8a]">
              {/* Address block */}
              <div className="space-y-1">
                <p className="text-white text-lg font-light">BeautySen</p>
                <p>T. G. Masaryka 602, Frýdek</p>
                <p>738 01 Frýdek-Místek</p>
                <p className="section-label text-[#8d6e63]/70 mt-2">Přízemí — Gynekologie MUDr. Vaňka</p>
              </div>

              {/* Phone & Email */}
              <div className="space-y-3">
                <a
                  href="tel:+420733241881"
                  className="flex items-center gap-4 hover:text-white transition-colors duration-200 group"
                >
                  <span className="w-px h-4 bg-[#8d6e63]/60 group-hover:bg-[#8d6e63] transition-colors" />
                  +420 733 241 881
                </a>
                <a
                  href="mailto:info@beautysen.cz"
                  className="flex items-center gap-4 hover:text-white transition-colors duration-200 group"
                >
                  <span className="w-px h-4 bg-[#8d6e63]/60 group-hover:bg-[#8d6e63] transition-colors" />
                  info@beautysen.cz
                </a>
              </div>

              {/* CTA */}
              <a
                href="https://beautysen.cz/rezervace"
                className="inline-flex items-center gap-3 section-label text-[#8d6e63] hover:gap-5 transition-all duration-300 hover:text-[#c9a882]"
              >
                <span>Objednejte se</span>
                <span className="text-base leading-none">→</span>
              </a>
            </address>

            <div className="mt-16 border-t border-[#2e2a27] pt-8">
              <Logo />
            </div>
          </div>

          {/* Right: map */}
          <div className="rounded-sm overflow-hidden min-h-[300px] md:min-h-0 opacity-85">
            <iframe
              title="BeautySen – mapa, T. G. Masaryka 602, Frýdek-Místek"
              src="https://web-2022.webnode.it/widgets/googlemaps/?z=15&amp;a=t%C5%99.+T.+G.+Masaryka+602%2C+Fr%C3%BDdek%2C+738+01+Fr%C3%BDdek-M%C3%ADstek"
              style={{ top: '0%', left: '0%', width: '100%', height: '100%' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
