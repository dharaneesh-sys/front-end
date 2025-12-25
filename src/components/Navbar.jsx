export default function Navbar({ onGetStarted }) {
  return (
    <header className="navbar-wrapper">
      <div className="top-bar">
        <span>Rethinking Food Waste for a Circular Economy</span>
      </div>

      <div className="nav-main">
        <h2 className="logo">
          Circular<span>Food</span>
        </h2>

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Platform</a>
          <a href="#">Impact</a>
          <a href="#">Contact</a>
        </nav>

        <button className="btn-primary" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </header>
  );
}

