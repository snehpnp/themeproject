import React, { useContext, useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";

const Settings = () => {
  const theme = JSON.parse(localStorage.getItem("theme")) || {};


  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings Page</h2>

      <Formik
        initialValues={{
          sidebarColor: theme.sidebarColor || "#ffffff",
          navbarColor: theme.navbarColor || "#ffffff",
          fontColor: theme.fontColor || "#ffffff",
          sidebarPosition: theme.sidebarPosition || "Header",
          fontFamily: theme.fontFamily || "Arial",
          navbarPosition: theme.navbarPosition || "Header",
        }}
        onSubmit={(values) => {
          console.log("values", values);
          localStorage.setItem("theme", JSON.stringify(values));
          window.location.reload();
        }}
      >
        {({ values }) => (
          <Form>
            <div style={{ marginBottom: "10px" }}>
              <label>Sidebar Color: </label>
              <Field name="sidebarColor" type="color" />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Navbar Color: </label>
              <Field name="navbarColor" type="color" />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Font Color: </label>
              <Field name="fontColor" type="color" />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Sidebar Position: </label>
              <Field as="select" name="sidebarPosition">
                <option value="Header">Header</option>
                <option value="Sidebar">Sidebar</option>
              </Field>
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label>Navbar Position: </label>
                <Field as="select" name="navbarPosition">
                    <option value="Navbar">Navbar</option>
                    <option value="Sidebar">Sidebar</option>
                </Field>
            </div>

            {/* ADD ALL TYPE FONT */}
            <div style={{ marginBottom: "10px", fontFamily: theme.fontFamily }}>
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
