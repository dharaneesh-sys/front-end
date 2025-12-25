import { useNavigate } from "react-router-dom";

export default function WarehouseRouting() {
  const navigate = useNavigate();

  return (
    <div className="service-page">
      {/* HEADER */}
      <div className="service-header">
        <div>
          <h1>Warehouse Routing</h1>
          <p className="service-sub">
            Move surplus faster. Store smarter.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="service-content">
        <section>
          <p>
            Warehouse Routing optimizes how surplus inventory is distributed
            across storage facilities, ensuring faster handling and minimal
            spoilage. The system intelligently assigns surplus to the most
            suitable warehouses.
          </p>
        </section>

        <section>
          <h2>How It Works</h2>
          <p>
            Using capacity, proximity, and handling requirements, the platform
            dynamically routes surplus inventory to warehouses best equipped to
            manage it—reducing congestion and storage inefficiencies.
          </p>
        </section>

        <section>
          <h2>Key Benefits</h2>
          <ul>
            <li>Reduced spoilage through faster handling</li>
            <li>Optimized warehouse capacity utilization</li>
            <li>Lower logistics and storage costs</li>
            <li>Improved supply chain coordination</li>
          </ul>
        </section>

        <section>
          <h2>Why It Matters</h2>
          <p>
            Time-sensitive food requires precision logistics. Intelligent
            warehouse routing ensures surplus inventory remains usable, safe,
            and valuable throughout the supply chain.
          </p>
        </section>
      </div>

      {/* FOOTER */}
      <div className="service-footer">
        <h3>Optimize your surplus logistics</h3>
        <p>
          Discover how FarmAlert can streamline warehouse operations and reduce
          food loss.
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

