import './Contact.css';

// TODO: Replace placeholder phone number and email with real business contact details before going live.
const contactItems = [
  {
    icon: '📞',
    label: 'Call or Text',
    value: '(816) 555-0100', // TODO: replace with real number
    href: 'tel:+18165550100',
  },
  {
    icon: '✉️',
    label: 'Email Us',
    value: 'info@jackofalltradeskc.com', // TODO: confirm mailbox is active
    href: 'mailto:info@jackofalltradeskc.com',
  },
  {
    icon: '📍',
    label: 'Service Area',
    value: 'Greater Kansas City Metro',
    href: null,
  },
  {
    icon: '🕐',
    label: 'Hours',
    value: 'Mon–Sat: 7am – 7pm',
    href: null,
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
                <a className="contact-value" href={item.href}>
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
