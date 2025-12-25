import { useNavigate } from "react-router-dom";
export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="services">
      <div className="card">
        <h3>Demand Oversupply Alert System and Market Stress Detection</h3>
        <p>
          Real-time detection of demand–supply imbalances using intelligent alerts and market signal analysis, enabling faster redistribution decisions and reduced waste.
        </p>
        <button onClick={() => navigate("/surplus-tracking")}>
          Read More
        </button>

      </div>

      <div className="card">
        <h3>Waste Monetization Routing</h3>
        <p>
          Automatically redirect surplus food into the most valuable reuse pathways—such as animal feed, bio-energy, or nutrition—based on quality, location, and market demand.
        </p>
        <button onClick={() => navigate("/waste-routing")}>
          Read More
        </button>

      </div>

      <div className="card">
        <h3>Warehouse Routing</h3>
        <p>
          Optimize surplus movement through intelligent warehouse allocation and routing, ensuring faster handling, reduced storage costs, and minimal spoilage.
        </p>
        <button onClick={() => navigate("/warehouse-routing")}>
          Read More
        </button>

      </div>
    </section>
  );
}

