import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const ShowSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div id="main-wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <div className={`main-content ${toggleSidebar ? "sidebar-show" : "sidebar-hide"}`}>
        <Sidebar />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
