import "./Features.css";

export default function Features() {
  return (
    <section className="features-section">
      <span className="Fbadge">Features</span>

      <h1 className="title">Everything you need to succeed</h1>
      <p className="subtitle">
        A complete platform designed specifically for firefighter exam candidates
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <div className="icon blue">
            <span>🗺️</span>
          </div>
          <h3>Interactive Maps</h3>
          <p>
            Learn geography with real and interactive maps. Rivers, mountains,
            cities and much more.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon purple">
            <span>🧠</span>
          </div>
          <h3>Smart Practice Mode</h3>
          <p>
            Immediate feedback and repetition until mastering each question.
            Build muscle memory.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon red">
            <span>🎯</span>
          </div>
          <h3>Exam Simulations</h3>
          <p>
            Practice with official firefighter exam questions. Simulate the
            real exam.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon green">
            <span>📈</span>
          </div>
          <h3>Progress Tracking</h3>
          <p>
            Detailed performance statistics. Identify weak points and improve.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon orange">
            <span>📖</span>
          </div>
          <h3>Updated Official Curriculum</h3>
          <p>
            Questions based on official curriculum. Constant updates with new
            questions.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon yellow">
            <span>👥</span>
          </div>
          <h3>Academy Collaboration</h3>
          <p>
            Special discounts for partner academy students. Only €6.66/month.
          </p>
        </div>
      </div>
    </section>
  );
}
