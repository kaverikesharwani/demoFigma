import "./PartnerForm.css";

export default function PartnerForm() {
  return (
    <section className="partner-form-section">
      <span className="form-badge">For Academies</span>

      <h1 className="form-title">
        Are you an academy? Partner with us
      </h1>

      <p className="form-subtitle">
        Offer the best tool to your students and manage their promotional codes
      </p>

      <div className="form-card">
        <form>
          <div className="form-grid">
            <div className="form-group">
              <label>Contact name *</label>
              <input placeholder="Joan Garcia" />
            </div>

            <div className="form-group">
              <label>Contact email *</label>
              <input placeholder="joan@academia.com" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input placeholder="600 123 456" />
            </div>

            <div className="form-group">
              <label>Academy name *</label>
              <input placeholder="Acadèmia Bombers Pro" />
            </div>
          </div>

          <div className="form-group full">
            <label>Message</label>
            <textarea placeholder="Tell us a bit about your academy and number of students..." />
          </div>

          <div className="info-box">
            <div className="info-icon">💼</div>
            <div>
              <h4>What the partnership includes:</h4>
              <ul>
                <li>Personalized promotional codes for your academy</li>
                <li>Management panel to see code usage</li>
                <li>33% discount for all your students</li>
                <li>Promotional materials and technical support</li>
              </ul>
            </div>
          </div>

          <button className="submit-btn">
            ✉️ Send Request
          </button>
        </form>
      </div>

      <div className="contact-footer">
        <p>Or contact us directly:</p>
        <div className="contact-links">
          <span>✉️ academias@opomap.com</span>
          <span>📞 +34 600 123 456</span>
        </div>
      </div>
    </section>
  );
}
