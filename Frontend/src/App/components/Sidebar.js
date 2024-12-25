import React, { useState, useEffect } from "react";
import Content from "./Content";
import { Admin } from "./Sidebar_config";

import {
  UserRoundPlus,
  Users,
  Wrench,
  UserPen,
  Frame,
  CandlestickChart,
  Activity,
  WalletCards,
  HelpingHand,
  FolderClock,
  LayoutDashboard,
  Building2,
  Copyright,
  CalendarPlus,
  Repeat2,
  ArrowRightLeft,
  ScatterChart,
  Boxes,
  Rocket,
  Paintbrush,
  Vote,
  Info,
  LayoutList,
  ChevronRight,
  ChevronDown,
  EthernetPort,
  File,
  ClipboardType,
  ShoppingCart,
  Cog,
} from "lucide-react";
import { Link } from "react-router-dom";
import BgImg from "./Images/background.mp4";

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

  let SidebarId = theme.sidebarName



 const sidebarClasses = `SidebarColored Sidebar-${
    isTopbar ? "vertical" : "horizontal"
  }`;

  const sidebarContainerClass =
    SidebarId === 2 ? "SidebarColored unique-sidebar-container" : "SidebarColored default-sidebar-container";
  const sidebarStyles = {
    width: isTopbar ? "100%" : isCollapsed ? "60px" : "250px",
    height: isTopbar ? "60px" : "100vh",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: isTopbar ? "row" : "column",
    alignItems: isTopbar ? "center" : "flex-start",
    justifyContent: isTopbar ? "space-between" : "flex-start",
    padding: isTopbar ? "0 20px" : "10px",
  };

  const subMenuStyles = {
    listStyle: "none",
    paddingLeft: "20px",
    marginTop: "5px",
    display: isCollapsed ? "none" : "block",
    position: isTopbar ? "absolute" : "relative",
    borderRadius: "5px", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
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
        {SidebarId == 1 && (
          <div
            className={
              isTopbar
                ? "SidebarColored Sidebar-vertical"
                : "SidebarColored Sidebar-horizontal"
            }
            style={{
              width: isTopbar ? "100%" : isCollapsed ? "60px" : "250px",
              height: isTopbar ? "60px" : "100vh",

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
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <IconComponent icon={tab.icon} className="mx-2" />
                        {!isCollapsed ? tab.name : ""}
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
                          position: isTopbar ? "absolute" : "relative",
                        }}
                      >
                        {tab.children.map((child) => (
                          <li
                            key={child.name}
                            style={{ margin: "5px 0", zIndex: -999 }}
                          >
                            <Link
                              to={child.link}
                              style={{
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                color: "inherit",
                              }}
                            >
                              <IconComponent
                                icon={child.icon}
                                className="mx-2"
                              />
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
        )}

        {SidebarId == 2 && (
          <div className={sidebarContainerClass} style={sidebarStyles}>
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
                    <div
                      onClick={() => tab.children && toggleSubmenu(tab.name)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: tab.children ? "pointer" : "default",
                        padding: "10px",
                        borderRadius: "5px",
                        backgroundColor:
                          openTab === tab.name ? "#f0f0f0" : "#fff", // Change background color for active tab (avoid inline styles)
                      }}
                    >
                      <Link
                        to={tab.link}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <IconComponent icon={tab.icon} className="mx-2" />

                        {!isCollapsed ? tab.name : ""}
                      </Link>
                      {tab.children.length > 0 &&
                        (openTab === tab.name ? (
                          <ChevronDown
                            size={20}
                            color={openTab === tab.name ? "#000" : "#ccc"}
                          /> // Change icon color for active tab
                        ) : (
                          <ChevronRight
                            size={20}
                            color={openTab === tab.name ? "#000" : "#ccc"}
                          /> // Change icon color for active tab
                        ))}
                    </div>

                    {tab.children && openTab === tab.name && (
                      <ul style={subMenuStyles}>
                        {tab.children.map((child) => (
                          <li key={child.name} style={{ margin: "5px 0" }}>
                            <Link
                              to={child.link}
                              style={{
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                color: "#000",
                              }}
                            >
                              <IconComponent icon={tab.icon} className="mx-2" />

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
        )}

        {SidebarId == 3 && (
          <div className={sidebarContainerClass} style={sidebarStyles}>
            <div
              className="sidebar-header"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: isTopbar ? "0" : "20px",
              }}
            >
              {!isTopbar && (
                <button
                  className="collapse-button"
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
              className="sidebar-menu"
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
                  <li
                    key={tab.name}
                    className="sidebar-menu-item"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="sidebar-tab"
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
                        className="sidebar-link"
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {SidebarId === 2 && (
                          <IconComponent
                            icon={tab.icon}
                            className="tab-icon mx-2"
                          />
                        )}
                        {!isCollapsed ? tab.name : ""}
                      </Link>
                      {tab.children.length > 0 &&
                        (openTab === tab.name ? (
                          <ChevronDown
                            size={20}
                            className="submenu-toggle-icon"
                          />
                        ) : (
                          <ChevronRight
                            size={20}
                            className="submenu-toggle-icon"
                          />
                        ))}
                    </div>

                    {tab.children && openTab === tab.name && (
                      <ul className="sidebar-submenu" style={subMenuStyles}>
                        {tab.children.map((child) => (
                          <li
                            key={child.name}
                            className="sidebar-submenu-item"
                            style={{ margin: "5px 0" }}
                          >
                            <Link
                              to={child.link}
                              className="sidebar-submenu-link"
                              style={{
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {SidebarId === 2 && (
                                <IconComponent
                                  icon={child.icon}
                                  className="submenu-icon mx-2"
                                />
                              )}
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
        )}

<div
  className="content"
  style={{
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  }}
>
  {/* Dynamic Background */}
  {BgImg.endsWith(".mp4") ? (
    <video
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
      }}
    >
      <source src={BgImg} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        zIndex: -1,
      }}
    ></div>
  )}

  {/* Content Overlay */}
  <div
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <Content />
  </div>
</div>

      </div>
    </>
  );
};

export default Sidebar;

const IconComponent = ({ icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case "UserRoundPlus":
        return <UserRoundPlus className="me-3" />;
      case "Users":
        return <Users className="me-3" />;
      case "Wrench":
        return <Wrench className="me-3" />;
      case "Frame":
        return <Frame className="me-3" />;
      case "CandlestickChart":
        return <CandlestickChart className="me-3" />;
      case "Activity":
        return <Activity className="me-3" />;
      case "WalletCards":
        return <WalletCards className="me-3" />;
      case "HelpingHand":
        return <HelpingHand className="me-3" />;
      case "FolderClock":
        return <FolderClock className="me-3" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="me-3" />;
      case "Building2":
        return <Building2 className="me-3" />;
      case "Copyright":
        return <Copyright className="me-3" />;
      case "Repeat2":
        return <Repeat2 className="me-3" />;
      case "Rocket":
        return <Rocket className="me-3" />;
      case "ArrowRightLeft":
        return <ArrowRightLeft className="me-3" />;
      case "ScatterChart":
        return <ScatterChart className="me-3" />;
      case "Paintbrush":
        return <Paintbrush className="me-3" />;
      case "Vote":
        return <Vote className="me-3" />;
      case "Boxes":
        return <Boxes className="me-3" />;
      case "UserPen":
        return <UserPen className="me-3" />;
      case "EthernetPort":
        return <EthernetPort className="me-3" />;
      case "ClipboardType":
        return <ClipboardType className="me-3" />;

      case "ShoppingCart":
        return <ShoppingCart className="me-3" />;

      case "Cog":
        return <Cog className="me-3" />;
      default:
        return null;
    }
  };

  return <>{renderIcon()}</>;
};
