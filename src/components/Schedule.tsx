import { useState } from 'react';
import './Schedule.css';

// Replace YOUR_FORM_ID with the Formspree form ID created at https://formspree.io
// e.g. "xpwzgkjr" — set via FORMSPREE_ID environment variable in Vercel
const FORMSPREE_ENDPOINT = import.meta.env.FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.FORMSPREE_ID}`
  : null;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Schedule() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      console.warn(
        'Formspree endpoint not configured. Set FORMSPREE_ID in your Vercel environment variables.',
      );
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const data = new FormData(e.target as HTMLFormElement);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="schedule" id="schedule">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Book Online</span>
          <h2 className="section-title">Schedule a Free Estimate</h2>
          <p className="section-subtitle">
            Fill out the form below and we&apos;ll get back to you within one
            business day to confirm your appointment.
          </p>
        </div>
        <div className="schedule-form-wrapper">
          {status === 'success' ? (
            <div className="form-success">
              <span className="success-icon">✅</span>
              <h3>Request Received!</h3>
              <p>
                Thank you! We&apos;ll reach out within one business day to
                confirm your free estimate.
              </p>
              <button className="btn-submit" onClick={() => setStatus('idle')}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form className="schedule-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(816) 555-0100"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Property Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="1234 Main St, Kansas City, MO"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="serviceType">Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    <option>Pre-Sale Repairs</option>
                    <option>Door &amp; Window Fixes</option>
                    <option>Painting &amp; Drywall</option>
                    <option>Carpentry &amp; Trim</option>
                    <option>Plumbing Repairs</option>
                    <option>Electrical Fixes</option>
                    <option>Cleaning &amp; Prep</option>
                    <option>General Maintenance</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Date</label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Describe the work you need, any photos you can share, timeline, etc."
                />
              </div>

              <div className="form-group referral-group">
                <label>
                  <input
                    type="checkbox"
                    id="realtorReferral"
                    name="realtorReferral"
                  />
                  I was referred by a realtor
                </label>
              </div>

              {status === 'error' && (
                <p className="form-error">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <button
                type="submit"
                className="btn-submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting'
                  ? 'Sending…'
                  : 'Request My Free Estimate'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
