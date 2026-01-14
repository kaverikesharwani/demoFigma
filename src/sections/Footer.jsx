import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          🔥 <span>OPOMAP</span>
        </div>

        {/* Tagline */}
        <p className="footer-tagline">
          The leading platform for firefighter exam preparation
        </p>

        {/* Links */}
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © 2025 OPOMAP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
