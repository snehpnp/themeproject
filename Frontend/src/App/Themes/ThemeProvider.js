import React, { createContext, useState, useEffect } from "react";
import Content from "../components/Content";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    sidebarColor: "#ffffff",
    navbarColor: "#ffffff",
    headerColor: "#ffffff",
  });

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* Main Content Area */}
        <div style={{ display: "flex", flexGrow: 1, width: "100%" }}>
          {/* Sidebar */}

          {/* Children (Main Content) */}
          <div
            style={{
              // backgroundColor: theme.headerColor,
              backgroundColor:"yellow",
              flexGrow: 1,
              padding: "20px",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
