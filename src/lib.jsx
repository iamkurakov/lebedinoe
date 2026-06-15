/* Белый стан — icons, primitives, torn edges */

/* ---------- inline icon set (lucide-style, single stroke) ---------- */
const ICONS = {
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mapPin: '<path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  navigation: '<path d="M3 11l19-9-9 19-2-8-8-2z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  snow: '<path d="M12 2v20M2 12h20M4.5 7l15 10M19.5 7l-15 10M9 4l3 3 3-3M15 20l-3-3-3 3M4 9l1 3-3 1M20 15l-1-3 3-1"/>',
  waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/>',
  fish: '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6-3.56 0-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><circle cx="12.5" cy="10.5" r=".6" fill="currentColor"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  sunset: '<path d="M12 10V2M4.9 10.9l1.4 1.4M2 18h2M20 18h2M17.7 12.3l1.4-1.4M22 22H2M16 18a4 4 0 0 0-8 0M8 6l4-4 4 4"/>',
  droplets: '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 4.7 7 2.3c-.29 2.4-1.16 3.83-2.29 4.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a5 5 0 0 1-10 0c0-.84.2-1.66.56-2.39"/>',
  tentTree: '<circle cx="4" cy="4" r="2"/><path d="M14 6 9 18M14 6l5 12M9.5 14.5 14 6M19 18H2M16 13l-2.5-7"/><path d="M20 9 17 4l-3 5h6z"/>',
  tent: '<path d="M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15l-3.5 6M2 21h20"/>',
  armchair: '<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3M3 11.5a2.5 2.5 0 0 1 5 0V14h8v-2.5a2.5 2.5 0 0 1 5 0V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.5zM5 20v2M19 20v2"/>',
  parking: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>',
  bird: '<path d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20M20 7l2 .5-2 .5M10 18v3M14 17.75V21M7 18a6 6 0 0 0 3.84-10.61"/>',
  sleigh: '<path d="M6 16V9h6l2.5 3.5H19a1.5 1.5 0 0 1 1.5 1.5v2M4 16h16M4 16c0-1.5 1-2.3 2.5-2.3M20 18.5c-2 1-4 1-6 0s-4-1-6 0-4 1-5.5.3"/>',
  mountainSnow: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M4.5 14a2.5 2.5 0 0 0 1 4.95M19 13a3 3 0 0 1-1.5 5.55"/>',
  binoculars: '<path d="M5.5 21a3.5 3.5 0 0 0 3.5-3.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9.5A3.5 3.5 0 0 0 5.5 21ZM18.5 21a3.5 3.5 0 0 1-3.5-3.5V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v9.5a3.5 3.5 0 0 1-3.5 3.5ZM9 11h6M9 8h6"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10ZM2 21c0-3 1.85-5.36 5.08-6"/>',
  volumeX: '<path d="M11 5 6 9H2v6h4l5 4V5zM22 9l-6 6M16 9l6 6"/>',
  smokeOff: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/><path d="M9 12v3M14 12v3"/>',
  paw: '<circle cx="6.5" cy="13.5" r="1.6"/><circle cx="9.5" cy="8.5" r="1.6"/><circle cx="14.5" cy="8.5" r="1.6"/><circle cx="17.5" cy="13.5" r="1.6"/><path d="M9 17.5c.6-2 2-3 3-3s2.4 1 3 3c.5 1.7-.7 3.2-3 3.2s-3.5-1.5-3-3.2z"/>',
  dog: '<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2a2 2 0 0 0 2-2V2M5 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
  coffee: '<path d="M10 2v2M14 2v2M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>',
  soup: '<path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9zM7 21h10M11.4 5.7c-.4-.5-.5-1.2-.1-1.8l.5-.8M15.4 5.7c-.4-.5-.5-1.2-.1-1.8l.5-.8M7.4 5.7c-.4-.5-.5-1.2-.1-1.8l.5-.8"/>',
  wheat: '<path d="M2 22 16 8M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94zM7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94zM11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/>',
  sparkle: '<path d="M12 3l1.9 5.8L19.7 10l-5.8 1.9L12 17.7l-1.9-5.8L4.3 10l5.8-1.9L12 3z"/>',
  bath: '<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M4 12h16M7 19l-1 2M18 19l1 2M14 6h.01"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
};

function Icon({ name, className, style }) {
  const inner = ICONS[name] || ICONS.sparkle;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className} style={style}
      dangerouslySetInnerHTML={{ __html: inner }} />
  );
}

/* ---------- image path helper (resource-aware for standalone bundling) ---------- */
const IMG = (f) => (window.__resources && window.__resources[f]) || ("assets/photos/" + f);
function bg(f) { return { backgroundImage: `url("${IMG(f)}")` }; }

/* Photos actually present in assets/photos/. As the owner sends new photos,
   their filenames are added here (and to <meta ext-resource-dependency> in the HTML). */
const AVAILABLE = new Set([
  "cover-summer.webp", "cover-winter.webp",
  "pier-summer.webp", "river-summer.webp", "river-golden.webp",
  "swans-winter.webp", "window-swans.webp",
  "kitchen-house.webp", "dish-fish.webp", "dish-seafood.webp",
  "breakfast.webp", "interior-living.webp",
  "feat-winter-1.webp", "feat-winter-2.webp", "feat-winter-3.webp",
  "feat-summer-1.webp", "feat-summer-2.webp", "feat-summer-3.webp",
  "kitchen-1.webp", "kitchen-2.webp", "kitchen-3.webp",
  "blini.webp", "fisher-house.webp", "fisher-interior.webp",
  "std-1.webp","std-2.webp","std-3.webp","std-4.webp","std-5.webp","std-6.webp","std-7.webp",
  "lux-1.webp","lux-2.webp","lux-3.webp","lux-4.webp","lux-5.webp","lux-6.webp","lux-7.webp",
  "gallery-1.webp","gallery-2.webp","gallery-3.webp","gallery-4.webp",
  "gallery-5.webp","gallery-6.webp","gallery-7.webp","gallery-8.webp",
  "gallery-9.webp","gallery-10.webp","gallery-11.webp",
  "gallery-12.webp","gallery-13.webp","gallery-14.webp","gallery-15.webp",
  "gallery-16.webp","gallery-17.webp","gallery-18.webp","gallery-19.webp",
]);
/* Resolve a desired filename; fall back to an existing photo until the real one arrives. */
function photo(desired, fallback) { return AVAILABLE.has(desired) ? desired : fallback; }
function pbg(desired, fallback) { return bg(photo(desired, fallback)); }
function isPending(desired) { return !AVAILABLE.has(desired); }

/* Season-variant cover registry. */
const SEASON_PHOTOS = {
  hero: { summer: "cover-summer.webp", winter: "cover-winter.webp" },
};
function simg(role, season) {
  const e = SEASON_PHOTOS[role];
  if (!e) return "";
  return IMG(e[season] || e.summer);
}
function sbg(role, season) { return { backgroundImage: `url("${simg(role, season)}")` }; }

/* ---------- torn paper edge ---------- */
const TORN = {
  a: "M0,90 L0,46 C60,30 90,54 150,42 C220,26 262,52 330,43 C402,33 432,60 510,47 C582,36 622,62 700,49 C772,38 824,64 900,50 C982,40 1012,60 1090,47 C1162,36 1214,60 1290,47 C1360,38 1402,54 1440,45 L1440,90 Z",
  b: "M0,90 L0,50 C70,62 104,34 168,46 C236,59 270,33 338,44 C410,56 444,32 516,46 C586,59 626,35 700,46 C778,58 820,34 896,46 C972,58 1016,34 1092,46 C1164,57 1212,35 1288,46 C1356,56 1400,40 1440,48 L1440,90 Z",
};
function TornEdge({ position = "top", fill = "var(--bs-cream)", variant = "a" }) {
  return (
    <div className={"tear " + position} aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path d={TORN[variant]} fill={fill} />
      </svg>
    </div>
  );
}

/* ---------- scroll reveal ---------- */
function Reveal({ children, as = "div", className = "", delay = 0, ...rest }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setSeen(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={"reveal " + (seen ? "in " : "") + className}
      style={{ transitionDelay: seen ? delay + "ms" : "0ms" }} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- button ---------- */
function Button({ variant = "primary", icon, iconRight, href, onClick, children, className = "", size }) {
  const cls = "btn btn-" + variant + (size === "sm" ? " btn-sm" : "") + (className ? " " + className : "");
  const content = (
    <>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} />}
    </>
  );
  if (href) {
    const onAnchor = (e) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      onClick && onClick(e);
    };
    return <a href={href} className={cls} onClick={onAnchor}>{content}</a>;
  }
  return <button type="button" className={cls} onClick={onClick}>{content}</button>;
}

/* ---------- section header ---------- */
function SectionHead({ eyebrow, title, sub, onDark }) {
  return (
    <Reveal className="sec-head">
      {eyebrow && <span className={"eyebrow" + (onDark ? " on-dark" : "")}>{eyebrow}</span>}
      <h2 className="title">{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  );
}

Object.assign(window, { Icon, ICONS, IMG, bg, AVAILABLE, photo, pbg, isPending, SEASON_PHOTOS, simg, sbg, TornEdge, Reveal, Button, SectionHead });
