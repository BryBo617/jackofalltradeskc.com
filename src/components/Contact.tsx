import './Contact.css';

// TODO: Replace placeholder phone number and email with real business contact details before going live.
const contactItems = [
  {
    icon: '📞',
    label: 'Call or Text',
    value: '(913) 961-1179',
    href: 'tel:+19139611179',
    target: null,
  },
  {
    icon: '✉️',
    label: 'Email Us',
    value: 'info@jackofalltradeskc.com', // TODO: confirm mailbox is active
    href: 'mailto:info@jackofalltradeskc.com',
    target: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
      </svg>
    ),
    label: 'YouTube',
    value: '@JackOfAllTradesKC',
    href: 'https://www.youtube.com/@JackOfAllTradesKC',
    target: '_blank',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm5 2.3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2.2a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm5.7-3.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" />
      </svg>
    ),
    label: 'Instagram',
    value: '@jackofalltradeskc',
    href: 'https://www.instagram.com/jackofalltradeskc/',
    target: '_blank',
  },
  {
    icon: '📍',
    label: 'Service Area',
    value: 'Greater Kansas City Metro',
    href: null,
    target: null,
  },
  {
    icon: '🕐',
    label: 'Hours',
    value: 'Call',
    href: null,
    target: null,
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Get in Touch</span>
          <h2 className="section-title">Let's Talk</h2>
          <p className="section-subtitle">
            Prefer to reach out directly? We're available by phone, text, or
            email. Realtor partners receive priority scheduling.
          </p>
        </div>
        <div className="contact-grid">
          {contactItems.map((item) => (
            <div className="contact-card" key={item.label}>
              <span className="contact-icon">{item.icon}</span>
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a
                  className="contact-value"
                  href={item.href}
                  target={item.target ?? undefined}
                  rel={item.target ? 'noreferrer' : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <span className="contact-value">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
