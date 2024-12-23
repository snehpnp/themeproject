import React, { useState } from "react";
import Content from "./Content";

import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Toggle between small and large sidebar
  const [isTopbar, setIsTopbar] = useState(false); // Toggle between side and top sidebar

const theme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : { fontColor: '#ffffff' };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const togglePosition = () => {
    setIsTopbar(!isTopbar);
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
          style={{
            width: isTopbar ? "100%" : isCollapsed ? "60px" : "250px",
            height: isTopbar ? "60px" : "100vh",
            backgroundColor: theme.sidebarColor,
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

          {/* Control Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={togglePosition}
              style={{
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              {isTopbar ? "Side" : "Top"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <Content />
      </div>
    </>
  );
};

export default Sidebar;
