import React, { useState } from "react";
import Logo from './LOGO.png';
import ProfileImage from './LOGO.png'; // Replace with your profile image

const Navbar = ({ headerStatus, toggleHeaderStatus }) => {
  const theme = JSON.parse(localStorage.getItem("theme")) || {}; 

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg TopNavbar" style={{ background: theme.navbarColor || "linear-gradient(to right, #1d37fc, #e81717)" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" style={{ width: "200px", height: "50px" }} />
          </a>

          {/* Profile Image */}
          <div className="d-flex align-items-center position-relative">
            <div className="profile-container" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
              <img
                src={ProfileImage}
                alt="Profile"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #fff"
                }}
              />
            </div>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div style={dropdownMenuStyle}>
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
  position: 'absolute',
  top: '50px',
  right: '0',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  width: '200px',
  overflow: 'hidden',
};

const dropdownListStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const dropdownItemStyle = {
  padding: '10px 15px',
  borderBottom: '1px solid #f1f1f1',
  cursor: 'pointer',
  fontSize: '14px',
};

dropdownItemStyle[':hover'] = {
  background: '#f9f9f9',
};

export default Navbar;
