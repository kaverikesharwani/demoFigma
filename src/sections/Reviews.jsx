import "./Reviews.css";

export default function Reviews() {
  return (
    <section className="reviews-section">
      <span className="reviews-badge">Reviews</span>

      <h2 className="reviews-title">What our users say</h2>
      <p className="reviews-subtitle">
        Over 1,000 exam candidates have already trusted OPOMAP
      </p>

      <div className="reviews-grid">
        <ReviewCard
          name="Joan García"
          role="Barcelona Firefighter Candidate"
          text="OPOMAP helped me memorize all of Catalonia's geography in less than a month. The practice mode is incredible!"
        />

        <ReviewCard
          name="Laura Martínez"
          role="Passed 2024"
          text="Thanks to the official questions and simulations I passed the exam on my first attempt. Totally recommended."
        />

        <ReviewCard
          name="Quim Pujol"
          role="Bombers Pro Academy"
          text="As a teacher, I recommend OPOMAP to all my students. The platform is complete and very effective."
        />
      </div>
    </section>
  );
}

function ReviewCard({ name, role, text }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="avatar">👨‍🚒</div>
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>

      <div className="stars">★★★★★</div>

      <p className="review-text">“{text}”</p>
    </div>
  );
}
