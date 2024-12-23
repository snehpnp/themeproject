import Navbar from "./App/components/Navbar";
import Sidebar from "./App/components/Sidebar";
import ThemeProvider from "./App/Themes/ThemeProvider";
import { Routes, Route } from "react-router-dom";
import Settings from "./App/pages/Settings";
import Home from "./App/pages/Home";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}
