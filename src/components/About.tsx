import aboutStatsImg from '../assets/about-stats.jpg';
import './About.css';

// const stats = [
//   { value: '10+', label: 'Years Experience' },
//   { value: '500+', label: 'Happy Clients' },
//   { value: '50+', label: 'Realtor Partners' },
//   { value: '100%', label: 'Satisfaction Guarantee' },
// ];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about-layout">
          <div className="about-text">
            <span className="section-badge">About Us</span>
            <h2 className="section-title">
              Kansas City's Go-To Handyman for Realtors
            </h2>
            <p className="about-body">
              We understand the pressure of a real estate transaction. Time is
              money, and a failed inspection or lingering punch list can kill a
              deal. That's why Jack of All Trades KC built a service
              specifically for home sellers and their agents.
            </p>
            <p className="about-body">
              We show up on time, communicate clearly, and complete work to a
              high standard — every time. Our deep familiarity with what
              inspectors look for means we prioritize the repairs that move the
              needle.
            </p>
            <p className="about-body">
              Whether you're a homeowner preparing to list or a realtor managing
              multiple transactions, we're the partner you can count on.
            </p>
          </div>
          <div className="about-stats">
            <img src={aboutStatsImg} alt="About Stats" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
