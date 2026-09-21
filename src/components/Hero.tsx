import './Hero.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tagline">Kansas City's Trusted Handyman</p>
        <h1 className="hero-title">Jack of All Trades KC</h1>
        <p className="hero-subtitle">
          Professional handyman services for home sellers and homeowners.
          Trusted by Kansas City's top realtors to get homes market-ready.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('schedule')}>
            Book a Free Estimate
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('services')}>
            See Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
