import "./Profile.css";
import {
  FaUserCircle,
  FaBullseye,
  FaTrophy,
  FaFire,
  FaMapMarkedAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Profile() {
  return (
    <div className="dashboard">
      {/* Profile Card */}
      <div className="card profile-card">
        <div className="profile-left">
          <div className="avatar">
            <FaUserCircle size={48} />
          </div>
          <div>
            <h2>User Google</h2>
            <p className="email">user@gmail.com</p>
            <p className="member">
              <FaCalendarAlt /> Member since January 2025
            </p>
            <span className="badge">Free</span>
          </div>
        </div>
        <button className="edit-btn">Edit Profile</button>
      </div>

      {/* Statistics */}
      <div className="card">
        <h3 className="section-title">Statistics</h3>
        <div className="stats-grid">
          <div className="stat-box red">
            <FaBullseye />
            <p className="label">Completed Tests</p>
            <p className="value">42</p>
          </div>

          <div className="stat-box orange">
            <FaTrophy />
            <p className="label">Average Score</p>
            <p className="value">87%</p>
          </div>

          <div className="stat-box yellow">
            <FaFire />
            <p className="label">Best Category</p>
            <p className="sub">Geography</p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="card">
        <h3 className="section-title">Achievements</h3>
        <div className="achievements-grid">
          <Achievement icon="🎯" text="First Test" />
          <Achievement icon="🔟" text="10 Tests Completed" />
          <Achievement icon="💯" text="Perfect Score" />
          <Achievement icon="📅" text="Active Week" muted />
          <Achievement icon="🗺️" text="Geography Master" />
          <Achievement icon="🔥" text="Focus Expert" muted />
        </div>
      </div>
    </div>
  );
}

function Achievement({ icon, text, muted }) {
  return (
    <div className={`achievement ${muted ? "muted" : ""}`}>
      <span className="icon">{icon}</span>
      <p>{text}</p>
    </div>
  );
}
