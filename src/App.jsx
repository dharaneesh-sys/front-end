import { useState } from "react";
import Landing from "./pages/Landing";
import AgriAuth from "./components/AgriAuth";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // LOGIN SCREEN
  if (!isAuthenticated && showLogin) {
    return (
      <AgriAuth
        onSuccess={() => setIsAuthenticated(true)}
        onBack={() => setShowLogin(false)} // ✅ BACK BUTTON HANDLER
      />
    );
  }

  // LANDING PAGE
  if (!isAuthenticated) {
    return <Landing onGetStarted={() => setShowLogin(true)} />;
  }

  // DASHBOARD (AFTER LOGIN)
  return (
    <div style={{ padding: "40px" }}>
      <h1>🌍 CircularFood Dashboard</h1>
      <p>You are now logged in.</p>
      <button onClick={() => setIsAuthenticated(false)}>Log out</button>
    </div>
  );
}

