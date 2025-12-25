import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AgriAuth from "./components/AgriAuth";
import ConnectWithUs from "./pages/ConnectWithUs";
import SurplusTracking from "./pages/SurplusTracking";
import WasteRouting from "./pages/WasteRouting";
import WarehouseRouting from "./pages/WarehouseRouting";


export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated && showLogin) {
    return (
      <AgriAuth
        onSuccess={() => setIsAuthenticated(true)}
        onBack={() => setShowLogin(false)}
      />
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Landing onGetStarted={() => setShowLogin(true)} />}
      />
      <Route path="/connect" element={<ConnectWithUs />} />
      <Route path="/surplus-tracking" element={<SurplusTracking />} />
      <Route path="/waste-routing" element={<WasteRouting />} />
      <Route path="/warehouse-routing" element={<WarehouseRouting />} />

    </Routes>
  );
}

