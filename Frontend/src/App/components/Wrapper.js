import React, { useState, useEffect, use } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export default function App() {
  const savedTheme = localStorage.getItem("theme");
  useEffect(() => {
    if (savedTheme) {
      const theme = JSON.parse(savedTheme); // Parse the theme object

      // Apply theme attributes to the root HTML element
      document.documentElement.setAttribute("data-theme", savedTheme);

      // Apply background color to .container-fluid
      const container = document.querySelector(".navbar");
      const SidebarColored = document.querySelector(".SidebarColored");

      let sidebar = theme.sidebarColor?.includes("gradient") || false;
      let navbar = theme.navbarColor?.includes("gradient") || false;
      let font = theme.fontColor?.includes("gradient") || false;

      const buttons = document.querySelectorAll("button");
      const fontFamily = theme.fontFamily;
      const allFont = document.querySelectorAll("*");
      const fontColor = theme.fontColor;
      // const all = document.querySelectorAll("*");

      const all = document.querySelectorAll(
        "*:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not(button)"
      );

      all.forEach((element) => {
        element.style.color = fontColor;
      });

      buttons.forEach((button) => {
        if (button) {
          if (font) {
            button.style.background = theme.BtnBgColor;
            button.style.color = theme.btnTxtColor;
          } else {
            button.style.backgroundColor = theme.BtnBgColor;
            button.style.color = theme.btnTxtColor;
          }
        }
      });

      if (container) {
        if (navbar) {
          container.style.background = theme.navbarColor;
        } else {
          container.style.backgroundColor = theme.navbarColor;
        }
      }

      if (SidebarColored) {
        if (sidebar) {
          SidebarColored.style.background = theme.sidebarColor;
        } else {
          SidebarColored.style.backgroundColor = theme.sidebarColor;
        }
      }

      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      if (headings) {
        headings.forEach((heading) => {
          if (theme.HeadingColor) {
            heading.style.color = theme.HeadingColor;
          } else {
            heading.style.color = theme.fontColor;
          }
        });
      }

      // CHANGE ALL SOFTWARE FONT FAMILY

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
  }, [savedTheme]);

  return (
    <div className="Wrapper">
      {savedTheme && (
        <>
          <Navbar />
          <Sidebar />
        </>
      )}
    </div>
  );
}