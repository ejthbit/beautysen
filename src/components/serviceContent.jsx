import content from '../content/services.json';

// Renders **bold** spans inside a content string.
const Rich = ({ text, strongClass, Tag = 'strong' }) =>
  text.split(/\*\*(.+?)\*\*/).map((part, i) =>
    i % 2 ? (
      <Tag
        key={i}
        className={strongClass}
      >
        {part}
      </Tag>
    ) : (
      part
    ),
  );

const Text = ({ children }) => (
  <p className="text-lg text-[#5a5350] leading-relaxed">
    <Rich
      text={children}
      strongClass="font-medium text-[#2a2320]"
    />
  </p>
);

const Bullets = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-baseline gap-3 text-lg leading-relaxed text-[#5a5350]"
      >
        <span className="w-1 h-1 rounded-full bg-[#8d6e63] flex-shrink-0 relative -top-1" />
        {item}
      </li>
    ))}
  </ul>
);

const Steps = ({ items }) => (
  <ol className="space-y-2">
    {items.map((item, index) => (
      <li
        key={item}
        className="flex items-baseline gap-3 text-lg leading-relaxed text-[#5a5350]"
      >
        <span className="text-sm text-[#7a5e53] flex-shrink-0 w-4">{index + 1}.</span>
        {item}
      </li>
    ))}
  </ol>
);

const Block = ({ label, children }) => (
  <div className="border-t border-[#e8e0d8] pt-5 space-y-4">
    <h2 className="no-bar block section-label text-[#7a5e53]">{label}</h2>
    {children}
  </div>
);

const Variant = ({ title, children }) => (
  <div className="border-l-2 border-[#8d6e63]/30 pl-4">
    <p className="text-lg font-medium text-[#2a2320] mb-1">{title}</p>
    <p className="text-lg text-[#6b6260] leading-relaxed">{children}</p>
  </div>
);

const Areas = ({ items }) => (
  <ul className="space-y-1">
    {items.map((area) => (
      <li
        key={area}
        className="text-lg text-[#6b6260] flex items-center gap-2"
      >
        <span className="w-1 h-px bg-[#8d6e63]/50" />
        {area}
      </li>
    ))}
  </ul>
);

// One content item from services.json; the key names the item type.
const Item = ({ item }) => {
  if (item.text !== undefined) return <Text>{item.text}</Text>;
  if (item.bullets) return <Bullets items={item.bullets} />;
  if (item.steps) return <Steps items={item.steps} />;
  if (item.areas) return <Areas items={item.areas} />;
  if (item.note)
    return <p className="text-base text-[#6b6260] italic border-l-2 border-[#8d6e63]/30 pl-4">{item.note}</p>;
  if (item.variants)
    return (
      <div className="space-y-3">
        {item.variants.map((variant) => (
          <Variant
            key={variant.title}
            title={variant.title}
          >
            {variant.text}
          </Variant>
        ))}
      </div>
    );
  if (item.areaGroups)
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {item.areaGroups.map((group) => (
          <div key={group.title}>
            <p className="text-lg font-medium text-[#2a2320] mb-2">{group.title}</p>
            <Areas items={group.areas} />
          </div>
        ))}
      </div>
    );
  throw new Error(`services.json: unknown content item ${JSON.stringify(item)}`);
};

const items = (list) =>
  list.map((item, i) => (
    <Item
      key={i}
      item={item}
    />
  ));

const Section = ({ section }) => {
  const resolved = section.use ? content.shared[section.use] : section;
  if (!resolved) throw new Error(`services.json: unknown shared section "${section.use}"`);
  return resolved.label ? <Block label={resolved.label}>{items(resolved.content)}</Block> : items(resolved.content);
};

const Chevron = ({ className = '' }) => (
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
    className={`flex-shrink-0 text-[#7a5e53] transition-transform duration-300 group-open:rotate-180 ${className}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Hide the native disclosure triangle; the Chevron replaces it.
const summaryReset = 'cursor-pointer list-none [&::-webkit-details-marker]:hidden';

// Order in services.json = price list order, used for routes and "Další služby".
export const services = content.services.map((service) => ({
  ...service,
  details: (
    <div className="space-y-5">
      {service.sections.map((section, i) => (
        <Section
          key={i}
          section={section}
        />
      ))}
    </div>
  ),
}));

export const servicePath = (service) => `/sluzby/${service.slug}/`;

const explainerItem = (item, i) => {
  if (item.text !== undefined)
    return (
      <p
        key={i}
        className="text-[#6b6260] text-base leading-relaxed"
      >
        <Rich
          text={item.text}
          Tag="span"
          strongClass="text-[#2a2320]"
        />
      </p>
    );
  if (item.lines)
    return (
      <ul
        key={i}
        className="space-y-2 text-[#6b6260] text-base leading-relaxed"
      >
        {item.lines.map((line) => (
          <li key={line}>
            <Rich
              text={line}
              Tag="span"
              strongClass="text-[#2a2320]"
            />
          </li>
        ))}
      </ul>
    );
  throw new Error(`services.json: unknown explainer item ${JSON.stringify(item)}`);
};

export const explainers = Object.fromEntries(
  Object.entries(content.explainers).map(([key, explainer]) => [
    key,
    { label: explainer.label, content: explainer.content.map(explainerItem) },
  ]),
);

export const Explainer = ({ explainer }) => (
  <details className="group border-b border-[#d4c5bb]">
    <summary
      className={`${summaryReset} flex items-center justify-between gap-4 py-4 text-lg text-[#2a2320] hover:text-[#7a5e53] transition-colors`}
    >
      {explainer.label}
      <Chevron />
    </summary>
    <div className="space-y-4 pb-6">{explainer.content}</div>
  </details>
);

const bySlug = (slug) => {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`services.json: menu references unknown service "${slug}"`);
  return service;
};

// Homepage menu: single services plus groups whose treatments sit one level deeper.
export const serviceMenu = content.menu.map((entry) =>
  typeof entry === 'string'
    ? bySlug(entry)
    : {
        group: entry.group,
        description: explainers[entry.explainer].content,
        services: entry.services.map(bySlug),
      },
);
