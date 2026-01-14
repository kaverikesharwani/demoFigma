import { useNavigate } from "react-router-dom";
import "./CTA.css";

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-box">
        <h2>Start preparing today</h2>
        <p>
          Join thousands of exam candidates already training with OPOMAP
        </p>

        <button className="cta-btn"
          onClick={() => navigate("/login")}
          >
          ⚡ Access Platform →
        </button>
      </div>
    </section>
  );
}
