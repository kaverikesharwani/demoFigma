import "./Subscription.css";

export default function SubscriptionPlans() {
  return (
    <div className="plans-page">
      <h1 className="title">Subscription Plans</h1>
      <p className="subtitle">
        Choose the plan that best fits your needs
      </p>

      {/* Promo */}
      <div className="promo">
        <div className="promo-left">
          <div className="promo-icon">👥</div>
          <div>
            <h4>
              Coming with an academy?{" "}
              <span className="promo-badge">-33% OFF</span>
            </h4>
            <p>
              If you belong to a partner academy, you can access the Monthly
              plan for only <strong>€6.66/month</strong>
            </p>
          </div>
        </div>

        <div className="promo-actions">
          <button className="promo-btn primary">Yes, I have a code</button>
          <button className="promo-btn">No</button>
        </div>
      </div>

      {/* Plans */}
      <div className="plans-grid">
        {/* Free */}
        <PlanCard
          icon="🛡️"
          title="Free"
          price="€0"
          period="/ forever"
          desc="Perfect to get started"
          features={[
            "Limited access to questions",
            "Basic practice mode",
            "Basic geography",
            "No premium updates",
          ]}
          footer="Current Plan"
          muted
        />

        {/* Monthly */}
        <PlanCard
          icon="⚡"
          popular
          title="Monthly"
          price="€9.99"
          period="/ month"
          desc="Maximum flexibility"
          features={[
            "Unlimited access to all questions",
            "Advanced practice & exam mode",
            "All geography modules",
            "Official exam questions",
            "Constant updates",
            "Detailed statistics",
            "No ads",
          ]}
          footer="Subscribe"
        />

        {/* Annual */}
        <PlanCard
          icon="👑"
          title="Annual"
          price="€95.88"
          period="/ year"
          desc="Best value"
          features={[
            "Everything in Monthly plan",
            "Save ~€24 per year",
            "Real exam simulations",
            "Exclusive materials",
            "Priority support",
            "Downloadable certificates",
            "Early access to new features",
            "Personalized content",
          ]}
          footer="Subscribe"
          highlight="SAVE 20%"
        />
      </div>

      {/* Info */}
      <div className="info-grid">
        <InfoBox
          icon="⚡"
          title="Flexible cancellation"
          text="Cancel your subscription anytime, no commitments."
        />
        <InfoBox
          icon="🔁"
          title="Constant updates"
          text="New questions and features added regularly."
        />
        <InfoBox
          icon="🎧"
          title="Dedicated support"
          text="Our expert team is always available to help you."
        />
      </div>

      {/* FAQ */}
      <div className="faq">
        <h3>Frequently Asked Questions</h3>

        <div className="faq-grid">
          <div>
            <strong>How does the promo code work?</strong>
            <p>
              If you belong to a partner academy, enter your code to unlock the
              discounted Monthly plan.
            </p>
          </div>

          <div>
            <strong>Can I change my plan later?</strong>
            <p>
              Yes, you can switch plans anytime from your profile page.
            </p>
          </div>

          <div>
            <strong>What happens if I cancel?</strong>
            <p>
              You keep access until the end of your current billing period.
            </p>
          </div>

          <div>
            <strong>Is the annual plan discounted?</strong>
            <p>
              Yes, the annual plan saves you approximately 20% compared to
              monthly billing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Components */

function PlanCard({
  icon,
  title,
  price,
  period,
  desc,
  features,
  footer,
  popular,
  muted,
  highlight,
}) {
  return (
    <div
      className={`plan-card ${popular ? "popular" : ""} ${
        muted ? "muted" : ""
      }`}
    >
      {popular && <div className="badge popular-badge">Popular</div>}
      {highlight && <div className="badge corner-badge">{highlight}</div>}

      <div className="plan-icon">{icon}</div>

      <h3>{title}</h3>
      <p className="price">
        {price} <span>{period}</span>
      </p>
      <p className="desc">{desc}</p>

      <ul>
        {features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>

      <button className="plan-btn">{footer}</button>
    </div>
  );
}

function InfoBox({ icon, title, text }) {
  return (
    <div className="info-box">
      <div className="info-icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
