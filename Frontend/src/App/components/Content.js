import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
import Dashboard from "../components/Dashboard/DashbaordMain";

export default function App() {
  return (
    <div className="content" style={{ backgroundColor: "yellow" }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
