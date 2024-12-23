import React, { useState, useEffect, use } from "react";
import Navbar from "./App/components/Navbar";
import Sidebar from "./App/components/Sidebar";
import ThemeProvider from "./App/Themes/ThemeProvider";
import { Routes, Route } from "react-router-dom";
import Settings from "./App/pages/Settings";
import Home from "./App/pages/Home";

export default function App() {
  const savedTheme = localStorage.getItem("theme");
  useEffect(() => {
    console.log("savedTheme", savedTheme);

    if (savedTheme) {
      const theme = JSON.parse(savedTheme); // Parse the theme object

      // Apply theme attributes to the root HTML element
      document.documentElement.setAttribute("data-theme", savedTheme);

      // Apply background color to .container-fluid
      const container = document.querySelector(".TopNavbar");
      const SidebarColored = document.querySelector(".SidebarColored");

      if (container) {
        container.style.backgroundColor = theme.navbarColor;
      }
      if (SidebarColored) {
        SidebarColored.style.backgroundColor = theme.sidebarColor;
      }
      // CHANGE ALL SOFTWARE FONT COLOR
      const fontColor = theme.fontColor;
      const all = document.querySelectorAll("*");
      all.forEach((element) => {
        element.style.color = fontColor;
      });

      // CHANGE ALL SOFTWARE FONT FAMILY
      const fontFamily = theme.fontFamily;
      const allFont = document.querySelectorAll("*");
      allFont.forEach((element) => {
        element.style.fontFamily = fontFamily;
      });
    } else {
      localStorage.setItem(
        "theme",
        JSON.stringify({
          navbarColor: "#ffffff",
          sidebarColor: "#ffffff",
          fontColor: "#080808",
          sidebarPosition: "Sidebar",
          fontFamily: "Arial",
        })
      );

      const container = document.querySelector(".container-fluid");
      const SidebarColored = document.querySelector(".SidebarColored");

      if (container) {
        container.style.backgroundColor = "#ffffff";
      }
      if (SidebarColored) {
        SidebarColored.style.backgroundColor = "#ffffff";
      }
      // CHANGE ALL SOFTWARE FONT COLOR
      const fontColor = "#000";
      const all = document.querySelectorAll("*");
      all.forEach((element) => {
        element.style.color = fontColor;
      });

      // CHANGE ALL SOFTWARE FONT FAMILY
      const fontFamily = "Arial";
      const allFont = document.querySelectorAll("*");
      allFont.forEach((element) => {
        element.style.fontFamily = fontFamily;
      });
    }
  }, []);

  return (
    <div className="App">
      {savedTheme && (
        <>
          <Navbar />
          <Sidebar />
        </>
      )}
    </div>
  );
}
