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
        <div className="user-info">
            <span className="user-name">User Google</span>
            <span className="user-email">user@gmail.com</span>
        </div>
        
        <button 
          className="logout-btn"  
          onClick={() => navigate("/login")}
        >
          ⬅️
        </button>
      </div>
    </nav>
  );
}
