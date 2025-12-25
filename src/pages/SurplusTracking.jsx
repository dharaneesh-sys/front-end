import { useNavigate } from "react-router-dom";

export default function SurplusTracking() {
  const navigate = useNavigate();

  return (
    <div className="service-page">
      {/* HEADER */}
      <div className="service-header">
        <div>
          <h1>Surplus Tracking</h1>
          <p className="service-sub">
            Detect oversupply early. Act before food is wasted.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="service-content">
        <section>
          <p>
            Surplus Tracking helps producers, distributors, and aggregators
            identify demand–supply imbalances in real time. By continuously
            monitoring inventory levels, market signals, and demand trends, the
            system highlights surplus risks before excess stock turns into waste.
          </p>
        </section>

        <section>
          <h2>How It Works</h2>
          <p>
            The platform aggregates inventory data and market indicators to
            generate actionable alerts. When surplus thresholds are crossed,
            stakeholders are notified early—enabling faster decisions and
            coordinated responses across the supply chain.
          </p>
        </section>

        <section>
          <h2>Key Benefits</h2>
          <ul>
            <li>Early detection of oversupply risks</li>
            <li>Reduced food loss and disposal costs</li>
            <li>Improved pricing and redistribution decisions</li>
            <li>Better coordination between producers and buyers</li>
          </ul>
        </section>

        <section>
          <h2>Why It Matters</h2>
          <p>
            A large portion of food waste occurs not because food is unusable,
            but because surplus is identified too late. Surplus Tracking enables
            proactive action, helping ensure that usable food reaches the right
            channels at the right time.
          </p>
        </section>
      </div>

      {/* FOOTER / CONTACT */}
      <div className="service-footer">
        <h3>Let’s reduce food waste together</h3>
        <p>
          Interested in implementing surplus tracking in your supply chain?
          Reach out to our team to explore how FarmAlert can help.
        </p>

        <button
          className="service-cta secondary"
          onClick={() => navigate("/connect")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

