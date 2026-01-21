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
          Choose a category to start the training
        </p>
      </div>

      {/* Cards */}
      <div className="card-container">
        <div className="home-card">
          <div className="card-icon red">🗺️</div>
          <h3 className="card-title">Geography and Navigation</h3>
          <p className="card-desc">
            Master locations, routes, and geographic knowledge
          </p>
          <button className="start-btn"
            onClick={() => navigate("/test")}
            >
            Start Test
          </button>
        </div>

        <div className="home-card">
          <div className="card-icon orange">🧪</div>
          <h3 className="card-title">Official Questions</h3>
          <p className="card-desc">
            Official questions from the firefighter competitive exams
          </p>
          <button className="start-btn"
            onClick={() => navigate("/test")}
            >
            Start Test
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <div className="banner-icon">🧑‍🚒</div>
        <h3 className="banner-title">Stay Prepared!</h3>
        <p className="banner-text">
          Complete the training modules to improve your skills
        </p>
      </div>
    </section>
  );
}
