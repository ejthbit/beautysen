import { Link } from 'react-router-dom';
import { serviceMenu, servicePath } from './serviceContent';

// Named Tailwind group (row) scopes each row's hover animation to that row only.
const ServiceRow = ({ service, nested = false }) => {
  const Heading = nested ? 'h4' : 'h3';
  return (
    <Link
      to={servicePath(service)}
      onClick={() => window.scrollTo(0, 0)}
      className={`group/row relative flex items-center justify-between gap-6 focus-visible:outline-none ${nested ? 'py-5 border-t border-[#e8e0d8]' : 'py-6 md:py-8 border-b border-[#d4c5bb]'}`}
    >
      {/* Accent line draws in along the bottom on hover/focus */}
      <span
        aria-hidden="true"
        className="absolute left-0 -bottom-px h-px w-full bg-[#8d6e63] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/row:scale-x-100 group-focus-visible/row:scale-x-100"
      />
      <div className="transition-transform duration-300 ease-out motion-safe:group-hover/row:translate-x-2 motion-safe:group-focus-visible/row:translate-x-2">
        <Heading
          className={`${nested ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-light text-[#2a2320] group-hover/row:text-[#7a5e53] group-focus-visible/row:text-[#7a5e53] transition-colors duration-300`}
        >
          {service.title}
        </Heading>
        <p className="text-[#6b6260] text-base leading-relaxed mt-2 max-w-2xl">{service.description}</p>
      </div>
      <span
        aria-hidden="true"
        className="flex-shrink-0 text-2xl leading-none text-[#7a5e53] transition-transform duration-300 ease-out motion-safe:group-hover/row:translate-x-1 motion-safe:group-focus-visible/row:translate-x-1"
      >
        →
      </span>
    </Link>
  );
};

const ServiceGroup = ({ item }) => (
  <div className="border-b border-[#d4c5bb] pt-6 md:pt-8 pb-2">
    <h3 className="text-2xl md:text-3xl font-light text-[#2a2320]">{item.group}</h3>
    <div className="mt-4">
      <div className="space-y-4 max-w-2xl pb-6">{item.description}</div>
      <ul>
        {item.services.map((service) => (
          <li key={service.slug}>
            <ServiceRow
              service={service}
              nested
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Services = () => (
  <section
    id="sluzby"
    className="bg-[#f7f5f2]"
  >
    {/* Section header */}
    <div className="max-w-6xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-14 md:pb-20">
      <h2 className="text-5xl md:text-6xl font-light text-[#2a2320]">Služby</h2>
    </div>

    <div className="max-w-6xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
      {/* Right margin keeps the arrows clear of the fixed desktop nav until xl */}
      <ul className="max-w-4xl md:mr-24 xl:mr-0 border-t border-[#d4c5bb]">
        {serviceMenu.map((item) => (
          <li key={item.slug ?? item.group}>
            {item.services ? <ServiceGroup item={item} /> : <ServiceRow service={item} />}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
