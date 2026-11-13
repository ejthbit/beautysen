import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';
import { NotFound } from './Layout';
import { PriceRow, pricingData } from './Pricelist';
import { Explainer, explainers, servicePath, services } from './serviceContent';

export function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound />;

  const url = `https://www.beautysen.cz${servicePath(service)}`;
  const pageTitle = `${service.title} Frýdek-Místek | BeautySen`;
  const prices = pricingData
    .find((category) => category.category === service.priceCategory)
    .items.filter((item) => !service.priceLabel || [].concat(service.priceLabel).includes(item.label));

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={service.description}
        />
        <link
          rel="canonical"
          href={url}
        />
        <meta
          property="og:title"
          content={pageTitle}
        />
        <meta
          property="og:description"
          content={service.description}
        />
        <meta
          property="og:url"
          content={url}
        />
        <meta
          name="twitter:title"
          content={pageTitle}
        />
        <meta
          name="twitter:description"
          content={service.description}
        />
      </Helmet>

      <article className="bg-[#f7f5f2] font-serif text-[#2a2320]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-32 md:pt-52 pb-20 md:pb-28">
          <HashLink
            smooth
            to="/#sluzby"
            elementId="sluzby"
            className="inline-flex items-center gap-3 hover:gap-5 transition-all duration-300 section-label text-[#7a5e53]"
          >
            <span className="text-base leading-none">←</span>
            <span>Všechny služby</span>
          </HashLink>

          <h1 className="text-4xl md:text-6xl font-light mt-8 mb-6">{service.title}</h1>
          <p className="text-xl text-[#5a5350] leading-relaxed">{service.description}</p>
          <div className="mt-4 border-t border-[#d4c5bb] pt-4">{service.details}</div>

          {service.explainer && (
            <div className="mt-10 border-t border-[#d4c5bb]">
              <Explainer explainer={explainers[service.explainer]} />
            </div>
          )}

          <section className="mt-14">
            <h2 className="no-bar block section-label text-[#7a5e53] mb-2">Ceník</h2>
            <div className="border-t border-[#d4c5bb]">
              {prices.map((item) => (
                <PriceRow
                  key={item.label}
                  item={item}
                />
              ))}
            </div>
            <p className="text-sm text-[#6b6260] italic mt-4">Přesná cena je vždy stanovena při osobní konzultaci.</p>
          </section>

          <div className="mt-12">
            <a
              href="https://beautysen.cz/rezervace"
              className="inline-block bg-[#8d6e63] text-white tracking-wider px-8 py-4 hover:bg-[#7a5e56] transition-colors duration-200 text-center"
            >
              Objednat se
            </a>
          </div>

          <nav
            aria-label="Další služby"
            className="mt-20"
          >
            <h2 className="no-bar block section-label text-[#7a5e53] mb-2">Další služby</h2>
            <ul className="border-t border-[#d4c5bb]">
              {services
                .filter((other) => other !== service)
                .map((other) => (
                  <li key={other.slug}>
                    <Link
                      to={servicePath(other)}
                      onClick={() => window.scrollTo(0, 0)}
                      className="group flex items-baseline justify-between gap-4 py-4 border-b border-[#e8e0d8] text-lg text-[#2a2320] hover:text-[#7a5e53] transition-colors"
                    >
                      {other.title}
                      <span
                        aria-hidden="true"
                        className="text-[#7a5e53] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </article>
    </>
  );
}
