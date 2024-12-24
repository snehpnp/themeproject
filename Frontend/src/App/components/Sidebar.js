import React, { useState, useEffect } from "react";
import Content from "./Content";
import { Admin } from "./Sidebar_config";
import { House, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isTopbar, setIsTopbar] = useState(false);
  const [openTab, setOpenTab] = useState(null); // Track which tab is open
  const theme = JSON.parse(localStorage.getItem("theme")) || {};

  useEffect(() => {
    if (theme && theme.sidebarPosition === "Header") {
      setIsTopbar(true);
    }
  }, [theme]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubmenu = (tabName) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isTopbar ? "column" : "row",
        height: "100vh",
      }}
    >
      {/* Sidebar */}
      <div
        className={`sidebar ${isTopbar ? "topbar" : ""}`}
        style={{
          width: isTopbar ? "100%" : isCollapsed ? "60px" : "250px",
          height: isTopbar ? "60px" : "100vh",
          background: "#2C3E50",
          color: "#ECF0F1",
          transition: "width 0.3s ease",
          overflowY: "auto",
        }}
      >
        {/* Sidebar Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isTopbar ? "space-between" : "center",
            padding: "10px 20px",
            borderBottom: "1px solid #34495E",
          }}
        >
          {!isTopbar && (
            <button
              onClick={toggleSidebar}
              style={{
                backgroundColor: "#16A085",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              {isCollapsed ? ">>" : "<<"}
            </button>
          )}
          <h3 style={{ marginLeft: isCollapsed ? "0" : "10px" }}>
            {isCollapsed ? "" : "Dashboard"}
          </h3>
        </div>

        {/* Navigation Links */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {Admin.map((tab) => (
            <li key={tab.name} style={{ width: "100%" }}>
              <div
                onClick={() => tab.children && toggleSubmenu(tab.name)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  padding: "12px 20px",
                  background: openTab === tab.name ? "#1ABC9C" : "transparent",
                  transition: "background 0.2s",
                }}
              >
                <Link
                  to={tab.link}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <House size={20} />
                  {!isCollapsed && tab.name}
                </Link>
                {tab &&
                  tab.children.length > 0 &&
                  (openTab === tab.name ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  ))}
              </div>

              {/* Child Tabs */}
              {tab.children && openTab === tab.name && (
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: isCollapsed ? "10px" : "30px",
                    margin: "5px 0",
                    background: "#34495E",
                  }}
                >
                  {tab.children.map((child) => (
                    <li key={child.name} style={{ margin: "5px 0" }}>
                      <Link
                        to={child.link}
                        style={{
                          color: "#ECF0F1",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "8px 0",
                        }}
                      >
                        <House size={16} />
                        {!isCollapsed && child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, background: "#F8F9FA", padding: "20px" }}>
        <Content />
      </div>
    </div>
  );
};

export default Sidebar;
