import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <span className="logo">🚒 OPOMAP</span>
      </div>

      {/* Center links */}
      <div className="nav-center">
        <NavLink to="/app/testhome" end>
          🏠 Home
        </NavLink>

        <NavLink to="/app/profile">
          👤 Profile
        </NavLink>

        <NavLink to="/app/subscription">
          💳 Subscription
        </NavLink>
      </div>

      {/* Right */}
      <div className="nav-right">
        <span className="user">🌐 Google User</span>
      </div>
    </nav>
  );
}
