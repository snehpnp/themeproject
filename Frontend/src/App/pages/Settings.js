import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";

const Settings = () => {
  const [isGradient, setIsGradient] = useState({
    sidebar: false,
    navbar: false,
    font: false,
  });

  const [initialValues, setInitialValues] = useState({
    sidebarColor: "#ffffff",
    navbarColor: "#ffffff",
    fontColor: "#ffffff",
    sidebarGradientStart: "#ffffff",
    sidebarGradientEnd: "#000000",
    navbarGradientStart: "#ffffff",
    navbarGradientEnd: "#000000",
    fontGradientStart: "#ffffff",
    fontGradientEnd: "#000000",
    sidebarPosition: "Header",
    fontFamily: "Arial",
    navbarPosition: "Header",
    themeId: "1",
  });

  // On Component Mount: Load theme from localStorage
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme")) || {};
    setIsGradient({
      sidebar: theme.sidebarColor?.includes("gradient") || false,
      navbar: theme.navbarColor?.includes("gradient") || false,
      font: theme.fontColor?.includes("gradient") || false,
    });

    setInitialValues({
      sidebarColor: theme.sidebarColor || "#ffffff",
      navbarColor: theme.navbarColor || "#ffffff",
      fontColor: theme.fontColor || "#ffffff",
      sidebarGradientStart: theme.sidebarGradientStart || "#ffffff",
      sidebarGradientEnd: theme.sidebarGradientEnd || "#000000",
      navbarGradientStart: theme.navbarGradientStart || "#ffffff",
      navbarGradientEnd: theme.navbarGradientEnd || "#000000",
      fontGradientStart: theme.fontGradientStart || "#ffffff",
      fontGradientEnd: theme.fontGradientEnd || "#000000",
      sidebarPosition: theme.sidebarPosition || "Header",
      fontFamily: theme.fontFamily || "Arial",
      navbarPosition: theme.navbarPosition || "Header",
      themeId: theme.themeId || "1",
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings Page</h2>

      <Formik
        initialValues={initialValues}
        enableReinitialize={true} // Ensure Formik updates with state changes
        onSubmit={(values) => {
          const updatedValues = {
            ...values,
            sidebarColor: isGradient.sidebar
              ? `linear-gradient(to right, ${values.sidebarGradientStart}, ${values.sidebarGradientEnd})`
              : values.sidebarColor,
            navbarColor: isGradient.navbar
              ? `linear-gradient(to right, ${values.navbarGradientStart}, ${values.navbarGradientEnd})`
              : values.navbarColor,
            fontColor: values.fontColor,
          };

          console.log("Updated Theme:", updatedValues);
          localStorage.setItem("theme", JSON.stringify(updatedValues));
          window.location.reload();
        }}
      >
        {({ values }) => (
          <Form>
            {/* Sidebar Color */}
            <div style={{ marginBottom: "10px" }}>
              <label>Sidebar Color Mode: </label>
              <label>
                <input
                  type="radio"
                  name="sidebarMode"
                  checked={!isGradient.sidebar}
                  onChange={() =>
                    setIsGradient((prev) => ({ ...prev, sidebar: false }))
                  }
                />
                Solid
              </label>
              <label>
                <input
                  type="radio"
                  name="sidebarMode"
                  checked={isGradient.sidebar}
                  onChange={() =>
                    setIsGradient((prev) => ({ ...prev, sidebar: true }))
                  }
                />
                Gradient
              </label>
            </div>

            {!isGradient.sidebar ? (
              <div style={{ marginBottom: "10px" }}>
                <label>Sidebar Solid Color: </label>
                <Field name="sidebarColor" type="color" />
              </div>
            ) : (
              <div style={{ marginBottom: "10px" }}>
                <label>Sidebar Gradient Start: </label>
                <Field name="sidebarGradientStart" type="color" />
                <label>Sidebar Gradient End: </label>
                <Field name="sidebarGradientEnd" type="color" />
                <div
                  style={{
                    marginTop: "10px",
                    height: "50px",
                    background: `linear-gradient(to right, ${values.sidebarGradientStart}, ${values.sidebarGradientEnd})`,
                    border: "1px solid #ccc",
                  }}
                ></div>
              </div>
            )}

            {/* Navbar Color */}
            <div style={{ marginBottom: "10px" }}>
              <label>Navbar Color Mode: </label>
              <label>
                <input
                  type="radio"
                  name="navbarMode"
                  checked={!isGradient.navbar}
                  onChange={() =>
                    setIsGradient((prev) => ({ ...prev, navbar: false }))
                  }
                />
                Solid
              </label>
              <label>
                <input
                  type="radio"
                  name="navbarMode"
                  checked={isGradient.navbar}
                  onChange={() =>
                    setIsGradient((prev) => ({ ...prev, navbar: true }))
                  }
                />
                Gradient
              </label>
            </div>

            {!isGradient.navbar ? (
              <div style={{ marginBottom: "10px" }}>
                <label>Navbar Solid Color: </label>
                <Field name="navbarColor" type="color" />
              </div>
            ) : (
              <div style={{ marginBottom: "10px" }}>
                <label>Navbar Gradient Start: </label>
                <Field name="navbarGradientStart" type="color" />
                <label>Navbar Gradient End: </label>
                <Field name="navbarGradientEnd" type="color" />
                <div
                  style={{
                    marginTop: "10px",
                    height: "50px",
                    background: `linear-gradient(to right, ${values.navbarGradientStart}, ${values.navbarGradientEnd})`,
                    border: "1px solid #ccc",
                  }}
                ></div>
              </div>
            )}

            {/* Font Color */}
            <div style={{ marginBottom: "10px" }}>
              <label>Font Solid Color: </label>
              <Field name="fontColor" type="color" />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Sidebar Position: </label>
              <Field as="select" name="sidebarPosition">
                <option value="Header">Header</option>
                <option value="Sidebar">Sidebar</option>
              </Field>
            </div>

            {/* ADD ALL TYPE FONT */}
            <div
              style={{
                marginBottom: "10px",
                fontFamily: initialValues.fontFamily,
              }}
            >
              <label>Font: </label>
              <Field as="select" name="fontFamily">
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Impact">Impact</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Lucida Console">Lucida Console</option>
                <option value="Palatino Linotype">Palatino Linotype</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Garamond">Garamond</option>
                <option value="Arial Black">Arial Black</option>
                <option value="Consolas">Consolas</option>
              </Field>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Dashboard Name</label>
              <Field as="select" name="themeId" type="text">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Field>
            </div>

            <button type="submit" style={{ marginTop: "20px" }}>
              Apply Changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Settings;
