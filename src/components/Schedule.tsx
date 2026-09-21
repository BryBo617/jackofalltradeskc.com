import './Schedule.css';

export default function Schedule() {
  return (
    <section className="schedule" id="schedule">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Book Online</span>
          <h2 className="section-title">Schedule a Free Estimate</h2>
          <p className="section-subtitle">
            Fill out the form below and we'll get back to you within one business day
            to confirm your appointment.
          </p>
        </div>
        <div className="schedule-form-wrapper">
          <form
            className="schedule-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you! We'll reach out within one business day to confirm your appointment."
              );
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="Jane" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Smith" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="(816) 555-0100" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Property Address</label>
              <input id="address" type="text" placeholder="1234 Main St, Kansas City, MO" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="serviceType">Service Type</label>
                <select id="serviceType" required defaultValue="">
                  <option value="" disabled>Select a service…</option>
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
                <input id="preferredDate" type="date" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                rows={4}
                placeholder="Describe the work you need, any photos you can share, timeline, etc."
              />
            </div>

            <div className="form-group referral-group">
              <label>
                <input type="checkbox" id="realtorReferral" />
                &nbsp;I was referred by a realtor
              </label>
            </div>

            <button type="submit" className="btn-submit">
              Request My Free Estimate
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
