import { useNavigate } from "react-router-dom";
import "./TestHome.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="home-wrapper">
      {/* Header */}
      <div className="home-header">
        <div className="home-icon">🚒</div>
        <h1 className="home-title">OPOMAP</h1>
        <p className="home-subtitle">
          Tria una categoria per començar l&apos;entrenament
        </p>
      </div>

      {/* Cards */}
      <div className="card-container">
        <div className="home-card">
          <div className="card-icon red">🗺️</div>
          <h3 className="card-title">Geografia i Navegació</h3>
          <p className="card-desc">
            Domina localitzacions, rutes i coneixement geogràfic
          </p>
          <button className="start-btn"
            onClick={() => navigate("/src/pages/test")}
            >
            Començar Test
          </button>
        </div>

        <div className="home-card">
          <div className="card-icon orange">🧪</div>
          <h3 className="card-title">Preguntes Oficials</h3>
          <p className="card-desc">
            Preguntes oficials de les oposicions a bombers
          </p>
          <button className="start-btn"
            onClick={() => navigate("/src/pages/test")}
            >
            Començar Test
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <div className="banner-icon">🧑‍🚒</div>
        <h3 className="banner-title">Mantén-te Preparat!</h3>
        <p className="banner-text">
          Completa els mòduls d&apos;entrenament per millorar les teves habilitats
        </p>
      </div>
    </section>
  );
}
