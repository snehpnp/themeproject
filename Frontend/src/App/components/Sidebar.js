import React, { useState, useEffect } from "react";
import Content from "./Content";
import { Admin } from "./Sidebar_config";
import { House, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isTopbar, setIsTopbar] = useState(false);
  const [openTab, setOpenTab] = useState(null);
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
    <>
      <div
        style={{
          display: "flex",
          flexDirection: isTopbar ? "column" : "row",
          minHeight: "100vh",
        }}
      >
        <div
          className={
            isTopbar
              ? "SidebarColored Sidebar-vertical"
              : "SidebarColored Sidebar-horizontal"
          }
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
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom: isTopbar ? "0" : "20px",
            }}
          >
            {!isTopbar && (
              <button
                onClick={toggleSidebar}
                style={{
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                {isCollapsed ? ">>" : "<<"}
              </button>
            )}
          </div>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: isTopbar ? "row" : "column",
              gap: isTopbar ? "20px" : "10px",
              margin: "0",
              padding: "0",
              width: "100%",
            }}
          >
            {Admin &&
              Admin.map((tab) => (
                <li key={tab.name} style={{ width: "100%" }}>
                  {/* Parent Tab */}
                  <div
                    onClick={() => tab.children && toggleSubmenu(tab.name)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: tab.children ? "pointer" : "default",
                      padding: "10px",
                      borderRadius: "5px",
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
                      <House size={24} />
                      {tab.name}
                    </Link>
                    {tab.children.length > 0 &&
                      (openTab === tab.name ? (
                        <ChevronDown size={20} />
                      ) : (
                        <ChevronRight size={20} />
                      ))}
                  </div>

                  {tab.children && openTab === tab.name && (
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: "20px",
                        marginTop: "5px",
                        display: isCollapsed ? "none" : "block",
                      }}
                    >
                      {tab.children.map((child) => (
                        <li key={child.name} style={{ margin: "5px 0" }}>
                          <Link
                            to={child.link}
                            style={{
                              color: "white",
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <House size={20} />
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </div>

        <div className="content" style={{ width: "100%" }}>
          <Content />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
