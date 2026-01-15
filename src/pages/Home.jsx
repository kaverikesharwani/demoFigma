import { useNavigate } from "react-router-dom";
import "../App.css";
import Features from "../sections/Features";
import Reviews from "../sections/Reviews";
import PartnerAcademies from "../sections/PartnerAcademies";
import PartnerForm from "../sections/PartnerForm";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="hero-page">
        <div className="hero">
          <div className="logo">🔥 <span>OPOMAP</span></div>
            <br/>
          <div className="homebadge">
            ⚡ Leading platform for firefighter exams
          </div>

          <h1 className="title">
            Prepare for your exams <br />
            <span>intelligently</span>
          </h1>

          <p className="subtitle">
            Interactive maps, official questions and exam simulations.
          </p>

          <div className="buttons">
            <button
              className="btn primary"
              onClick={() => navigate("/login")}
            >
              ⚡ Access Platform ➡️
            </button>

            <button className="btn secondary" onClick={() => {
              document.getElementById("features").scrollIntoView({
                behavior: "smooth"
              });
            }}>
              Discover More ➡️
            </button>
          </div>

          <div className="stats">
            <Stat value="5,000+" label="Available Questions" />
            <Stat value="95%" label="Pass Rate" />
            <Stat value="15+" label="Partner Academies" />
            <Stat value="24/7" label="Availability" />
          </div>
        </div>
      </section>

      <Features />
      <Reviews />
      <PartnerAcademies />
      <PartnerForm />
      <CTA />
      <Footer />
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
