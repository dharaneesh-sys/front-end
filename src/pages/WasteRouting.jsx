import { useNavigate } from "react-router-dom";

export default function WasteRouting() {
  const navigate = useNavigate();

  return (
    <div className="service-page">
      {/* HEADER */}
      <div className="service-header">
        <div>
          <h1>Waste Monetization Routing</h1>
          <p className="service-sub">
            Turn surplus into value instead of loss.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="service-content">
        <section>
          <p>
            Waste Monetization Routing enables surplus food to be redirected into
            the most valuable reuse pathways instead of landfill disposal. The
            system evaluates quality, location, and market demand to determine
            optimal reuse options.
          </p>
        </section>

        <section>
          <h2>How It Works</h2>
          <p>
            By combining inventory attributes with reuse market data, the
            platform routes surplus into channels such as animal feed,
            bio-energy, or nutritional processing—ensuring maximum value
            recovery.
          </p>
        </section>

        <section>
          <h2>Key Benefits</h2>
          <ul>
            <li>Reduced waste disposal and landfill dependency</li>
            <li>New revenue opportunities from surplus inventory</li>
            <li>Efficient matching of surplus to reuse markets</li>
            <li>Support for circular economy initiatives</li>
          </ul>
        </section>

        <section>
          <h2>Why It Matters</h2>
          <p>
            Food surplus does not have to mean waste. Proper routing allows
            excess food to contribute to energy generation, animal nutrition,
            and sustainable supply chains—reducing environmental impact while
            creating economic value.
          </p>
        </section>
      </div>

      {/* FOOTER */}
      <div className="service-footer">
        <h3>Unlock value from surplus food</h3>
        <p>
          Learn how FarmAlert can help you monetize surplus while supporting
          sustainability goals.
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

