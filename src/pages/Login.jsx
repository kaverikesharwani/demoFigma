
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">🚒</div>

        <h2 className="title">OPOMAP</h2>
        <p className="subtitle">
          Sign in to continue your preparation
        </p>

        <label>Email address</label>
        <div className="input-box">
          <span className="icon">✉️</span>
          <input type="email" placeholder="name@example.com" />
        </div>

        <label>Password</label>
        <div className="input-box">
          <span className="icon">🔒</span>
          <input type="password" placeholder="••••••••" />
          <span className="eye">👁️</span>
        </div>

        <a className="forgot">Forgot password?</a>

        <button className="signin-btn">Sign In</button>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <div className="social-buttons">
          <button 
            className="social-google" 
            onClick={() => navigate("/app/TestHome")}
            >
                Google
            </button>
          <button className="social apple"> Apple</button>
        </div>

        <p className="register">
          Don’t have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}
