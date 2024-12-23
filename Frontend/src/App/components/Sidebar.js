import React, { useState, useEffect } from "react";
import Content from "./Content";

import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Toggle between small and large sidebar
  const [isTopbar, setIsTopbar] = useState(false); // Toggle between side and top sidebar
  const theme = JSON.parse(localStorage.getItem("theme")) || {};


  useEffect(() => {
    if (theme && theme.sidebarPosition === "Header") {
      setIsTopbar(true);
    }
  }, [theme]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Wrapper */}
      <div
        style={{
          display: "flex",
          flexDirection: isTopbar ? "column" : "row",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar / Navbar */}
        <div
          className="SidebarColored"
          style={{
            width: isTopbar ? "100%" : isCollapsed ? "60px" : "250px",
            height: isTopbar ? "60px" : "100vh",

            color: "white",
            transition: "all 0.3s ease",
            display: "flex",
            flexDirection: isTopbar ? "row" : "column",
            alignItems: "center",
            justifyContent: isTopbar ? "space-between" : "flex-start",
            padding: isTopbar ? "0 20px" : "10px",
          }}
        >
          {/* Logo or Title */}
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom: isTopbar ? "0" : "20px",
            }}
          >
            {isTopbar ? "Navbar" : "Sidebar"}
            {!isTopbar && (
              <button
                onClick={toggleSidebar}
                style={{
                  backgroundColor: "#495057",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                {isCollapsed ? ">>" : "<<"}
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: isTopbar ? "row" : "column",
              gap: isTopbar ? "20px" : "10px",
              margin: "0",
              padding: "0",
            }}
          >
            <li style={{ cursor: "pointer" }}>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </Link>
            </li>
            <li style={{ cursor: "pointer" }}>
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Dashboard
              </Link>
            </li>
            <li style={{ cursor: "pointer" }}>
              <Link
                to="/orders"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Orders
              </Link>
            </li>
            <li style={{ cursor: "pointer" }}>
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Products
              </Link>
            </li>
            <li style={{ cursor: "pointer" }}>
              <Link
                to="/settings"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Settings
              </Link>
            </li>
          </ul>

        </div>

        <Content />
      </div>
    </>
  );
};

export default Sidebar;
