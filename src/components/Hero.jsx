import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>
          Let Us Rethink & <span>Redirect Food Waste</span>
        </h1>

        <p>
          A digital platform connecting food producers with sustainable reuse
          pathways such as animal feed, energy, and nutrition.
        </p>

        <button className="btn-secondary" onClick={() => navigate("/connect")}>
          Connect with us
        </button>
      </div>
    </section>
  );
}

