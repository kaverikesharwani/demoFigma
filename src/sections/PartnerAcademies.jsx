import "./PartnerAcademies.css";

export default function PartnerAcademies() {
  return (
    <section className="partners-section">
      <span className="partners-badge">Partner Academies</span>

      <h2 className="partners-title">We work with the best academies</h2>
      <p className="partners-subtitle">
        Exclusive discounts for partner academy students
      </p>

      <div className="partners-grid">
        <AcademyCard
          name="Acadèmia Bombers BCN"
          city="Barcelona"
          students="250+ students"
          code="BOMBERSBCN"
        />

        <AcademyCard
          name="Oposicions Catalunya"
          city="Girona"
          students="180+ students"
          code="OPOCAT25"
        />

        <AcademyCard
          name="Format Emergències"
          city="Tarragona"
          students="320+ students"
          code="FORMATEMER"
        />

        <AcademyCard
          name="Acadèmia SPEIS"
          city="Lleida"
          students="150+ students"
          code="SPEISLLEI"
        />
      </div>

      {/* Discount Banner */}
      <div className="discount-box">
        <div className="discount-left">
          <div className="shield">🛡️</div>
          <div>
            <h4>Special academy discount</h4>
            <p>
              Your students will only pay{" "}
              <strong>€6.66/month</strong> instead of €9.99
            </p>
          </div>
        </div>

        <button className="partner-btn"
        onClick={() => {
              document.getElementById("partnerform").scrollIntoView({
                behavior: "smooth"
              });
            }}>
          Become a Partner →
        </button>
      </div>
    </section>
  );
}

function AcademyCard({ name, city, students, code }) {
  return (
    <div className="academy-card">
      <div className="academy-top">
        <div className="academy-icon">🏢</div>
        <span className="verified">Verified</span>
      </div>

      <h3>{name}</h3>
      <p className="city">{city}</p>

      <div className="academy-footer">
        <span className="students">👥 {students}</span>
        <span className="code">{code}</span>
      </div>
    </div>
  );
}
