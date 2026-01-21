import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() 
{
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left" onClick={() => navigate("/")}>
        <h2>
          🚒 OPOMAP
        </h2>
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
        <span className="user">🌐 Google User </span>
          <p className="userg">user@gmail.com <button className="arrow">⬅️</button></p>
      </div>
    </nav>
  );
}
