import { NavHashLink } from 'react-router-hash-link';

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen bg-white">
        <section className="bg-[url(/img/bg.webp)] min-h-[75vh] pt-5 content-center">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 md:whitespace-nowrap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* LEFT – TEXT */}
              <div>
                <h1 className="text-4xl md:text-6xl font-semibold mb-6">Podpořte svou přirozenou krásu.</h1>
                <br />
                <p className="text-xl text-gray-700 mb-6">
                  Přirozené omlazení, jemné vyhlazení vrásek a svěží vzhled bez chirurgického zákroku.
                </p>
                <p className="text-lg text-gray-600 mb-10 max-w-xl">
                  Profesionální aplikace botulotoxinu a kyseliny hyaluronové s respektem k vaší mimice a osobnosti.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a
                    href="https://beautysen.cz/rezervace"
                    className="bg-[#8d6e63] text-white tracking-wider px-8 py-4 hover:bg-[#7a5e56] transition-colors duration-200 text-center"
                  >
                    Objednat konzultaci
                  </a>
                  <NavHashLink
                    smooth
                    to="/#sluzby"
                    elementId="sluzby"
                    className="bg-white border border-[#8d6e63] text-[#8d6e63] px-8 py-4 md hover:bg-[#8d6e63] hover:text-white transition text-center"
                  >
                    Naše služby
                  </NavHashLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TRUST ICONS */}
        <section
          aria-label="Proč BeautySen"
          className="bg-[#2a2320] py-14  min-h-[25vh] content-center"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center text-[#f7f5f2]">
            {/* Lékařský přístup */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line
                  x1="12"
                  y1="8"
                  x2="12"
                  y2="16"
                />
                <line
                  x1="8"
                  y1="12"
                  x2="16"
                  y2="12"
                />
              </svg>
              <p className="text-xl font-light">Lékařský přístup</p>
            </div>
            {/* Přirozené výsledky */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              <p className="text-xl font-light">Přirozené výsledky</p>
            </div>
            {/* Individuální péče */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <circle
                  cx="12"
                  cy="11"
                  r="3"
                />
              </svg>
              <p className="text-xl font-light">Individuální péče</p>
            </div>
            {/* Certifikované materiály */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                />
                <polyline points="8 12 11 15 16 9" />
              </svg>
              <p className="text-xl font-light">Certifikované materiály</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
