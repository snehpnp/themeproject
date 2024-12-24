import React, { useState } from "react";
import Logo from "./LOGO.png";
import ProfileImage from "./logo1.png"; // Replace with your profile image
import { FaBell } from "react-icons/fa"; // Importing a notification bell icon

const Navbar = ({ headerStatus, toggleHeaderStatus }) => {
  const theme = JSON.parse(localStorage.getItem("theme")) || {};

  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleNotification = () => setShowNotification(!showNotification);

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg TopNavbar"
        style={{
          background:
            theme.navbarColor || "linear-gradient(to right, #1d37fc, #e81717)",
          position: "sticky",
          top: 0,
          zIndex: 1020,
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "200px", height: "50px" }}
            />
          </a>

          {/* Right Side */}
          <div className="d-flex align-items-center position-relative ml-auto">
            {/* Notification Icon */}
            <div
              className="notification-container"
              onClick={toggleNotification}
              style={{
                cursor: "pointer",
                marginLeft: "20px",
                position: "relative",
              }}
            >
              <FaBell size={24} style={{ color: "#fff" }} />
            </div>

            {/* Notification Dropdown */}
            {showNotification && (
              <div style={{ ...notificationMenuStyle, right: "50px" }}>
                <div style={notificationHeaderStyle}>Notifications</div>
                <ul style={notificationListStyle}>
                  <li style={notificationItemStyle}>
                    🔔 New message from admin
                  </li>
                  <li style={notificationItemStyle}>
                    🔔 Your profile was updated
                  </li>
                  <li style={notificationItemStyle}>
                    🔔 System maintenance scheduled
                  </li>
                </ul>
              </div>
            )}

            {/* Profile Image */}
            <div
              className="profile-container"
              onClick={toggleDropdown}
              style={{ cursor: "pointer", marginLeft: "20px" }}
            >
              <img
                src={ProfileImage}
                alt="Profile"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #fff",
                }}
              />
            </div>

            {/* Profile Dropdown */}
            {showDropdown && (
              <div style={{ ...dropdownMenuStyle, right: "50px" }}>
                <ul style={dropdownListStyle}>
                  <li style={dropdownItemStyle}>🛠️ Profile Settings</li>
                  <li style={dropdownItemStyle}>📦 Service</li>
                  <li style={dropdownItemStyle}>ℹ️ About</li>
                  <li style={dropdownItemStyle}>🚪 Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

// 🎨 **Styles**

const dropdownMenuStyle = {
  position: "absolute",
  top: "50px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
  width: "200px",
  overflow: "hidden",
};

const dropdownListStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const dropdownItemStyle = {
  padding: "10px 15px",
  borderBottom: "1px solid #f1f1f1",
  cursor: "pointer",
  fontSize: "14px",
};

const notificationMenuStyle = {
  position: "absolute",
  top: "60px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
  width: "250px",
  maxHeight: "300px",
  overflowY: "auto",
};

const notificationHeaderStyle = {
  padding: "10px 15px",
  fontSize: "16px",
  fontWeight: "bold",
  borderBottom: "1px solid #f1f1f1",
};

const notificationListStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const notificationItemStyle = {
  padding: "10px 15px",
  borderBottom: "1px solid #f1f1f1",
  cursor: "pointer",
  fontSize: "14px",
};

export default Navbar;
