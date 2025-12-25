export default function Navbar({ onGetStarted }) {
  return (
    <header className="navbar-wrapper">
      <div className="top-bar">
        <span>Rethinking Food Waste for a Circular Economy</span>
      </div>

      <div className="nav-main">
        <h2 className="logo">
          farm<span>Alert</span>
          <svg
            className="leaf-icon"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 20c9-1 14-6 14-14C11 6 6 11 5 20Z"
              fill="#4caf50"
           />
          </svg>
        </h2>



        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
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

