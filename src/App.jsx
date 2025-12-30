import "./App.css";
import Features from "./Features";
import Reviews from "./Reviews";
import PartnerAcademies from "./PartnerAcademies";
import PartnerForm from "./PartnerForm";



export default function App() {
  return (
    <div className="page">
      <section className="hero-page">
        <div className="hero">
          {/* LOGO */}
          <div className="logo">
            🔥 <span>OPOMAP</span>
          </div>

          <br />

          {/* Badge */}
          <div className="badge">⚡Leading platform for firefighter exams</div>

          {/* Heading */}
          <h1 className="title">
            Prepare for your exams <br />
            <span>intelligently</span>
          </h1>

          {/* Subtext */}
          <p className="subtitle">
            Interactive maps, official questions and exam simulations.
            Everything you need to pass firefighter exams in one platform.
          </p>

          {/* Buttons */}
          <div className="buttons">
            <button className="btn primary">⚡Access Platform ➡️</button>
            <button className="btn secondary">Discover More ➡️</button>
          </div>

          {/* Stats */}
          <div className="stats">
            <Stat value="5,000+" label="Available Questions" />
            <Stat value="95%" label="Pass Rate" />
            <Stat value="15+" label="Partner Academies" />
            <Stat value="24/7" label="Availability" />
          </div>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <Features />
      {/* other sections */}
      <Reviews />
      {/* other sections */}
      <PartnerAcademies />
      {/* other sections */}
      <PartnerForm />
    </div>
  );
}


function Stat({ value, label }) {
  return (
    <div className="stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}