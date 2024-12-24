import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
import Dashboard from "../components/Dashboard/DashbaordMain";
import Form from "../pages/Form";

import Classicform from "./Forms/ClassicForm";
import Glassform from "./Forms/Glassmorphism";

import Darktheme from "./Forms/Darktheme";
import Floating from "./Forms/Floating";
import Modern from "./Forms/Modern";

import BasicTable from "./Tabels/BasicTable";
import CardTable from "./Tabels/CardTable";
import StripedTable from "./Tabels/StripedTable";
import BorderTable from "./Tabels/BorderedTable";
import HoverTable from "./Tabels/HoverableTable";
import Reacttabel from "./Tabels/Reacttable";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/forms/classic" element={<Classicform />} />
      <Route path="/forms/Glassmorphism" element={<Glassform />} />
      <Route path="/forms/Darktheme" element={<Darktheme />} />
      <Route path="/forms/Modern" element={<Modern />} />
      <Route path="/forms/Floating" element={<Floating />} />

      <Route path="/tables/basic" element={<BasicTable />} />
      <Route path="/tables/card" element={<CardTable />} />
      <Route path="/tables/striped" element={<StripedTable />} />
      <Route path="/tables/bordered" element={<BorderTable />} />
      <Route path="/tables/hover" element={<HoverTable />} />
      <Route path="/tables/reacttable" element={<Reacttabel />} />

    </Routes>
  );
}
