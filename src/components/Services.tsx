import './Services.css';

const services = [
  {
    icon: '🏠',
    title: 'Pre-Sale Repairs',
    description:
      'Get your home inspection-ready. We handle all the punch-list items that buyers and inspectors look for, so your listing shines.',
  },
  {
    icon: '🪟',
    title: 'Door & Window Fixes',
    description:
      'Sticking doors, broken latches, drafty windows — we repair and replace to improve both function and curb appeal.',
  },
  {
    icon: '🎨',
    title: 'Painting & Drywall',
    description:
      'Touch-ups, full room painting, patching holes, and texture matching. We restore walls to like-new condition.',
  },
  {
    icon: '🔩',
    title: 'Carpentry & Trim',
    description:
      'Crown molding, baseboards, door casings, and cabinet repairs. Quality finish work that adds value to any home.',
  },
  {
    icon: '🚿',
    title: 'Plumbing Repairs',
    description:
      'Leaky faucets, running toilets, under-sink repairs, and more. Minor plumbing fixes handled quickly and cleanly.',
  },
  {
    icon: '💡',
    title: 'Electrical Fixes',
    description:
      'Outlet replacements, fixture swaps, switch repairs, and light installations. Safe, code-compliant work you can trust.',
  },
  {
    icon: '🧹',
    title: 'Cleaning & Prep',
    description:
      'Deep cleaning, pressure washing, and staging prep to make your listing photography-ready and buyer-ready.',
  },
  {
    icon: '🏗️',
    title: 'General Maintenance',
    description:
      'Decks, fences, gutters, caulking, weatherstripping — comprehensive upkeep for homes of every age.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">What We Do</span>
          <h2 className="section-title">Services Built for Home Sellers</h2>
          <p className="section-subtitle">
            Realtors and homeowners across Kansas City trust us to handle every
            repair before listing — so deals close faster and for more money.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
