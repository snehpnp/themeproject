import React, { useState } from 'react';

function GlassForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={glassContainer}>
      <h2 style={glassTitle}>Glassmorphism Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={glassInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={glassInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={glassInput}
        />
        <select name="role" onChange={handleChange} style={glassInput}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <label style={glassCheckboxLabel}>
          <input
            type="checkbox"
            name="terms"
            onChange={handleChange}
            style={glassCheckbox}
          />
          I agree to the terms and conditions
        </label>
        <button type="submit" style={glassButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

// 🎨 **Styles**

const glassContainer = {
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '16px',
  padding: '30px',
  backdropFilter: 'blur(15px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  margin: '50px auto',
  textAlign: 'center',
};

const glassTitle = {
  marginBottom: '20px',
  color: '#fff',
  fontSize: '24px',
};

const glassInput = {
  background: 'rgba(255, 255, 255, 0.5)',
  border: 'none',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '8px',
  width: '100%',
  color: '#333',
  fontSize: '14px',
};

const glassCheckboxLabel = {
  display: 'block',
  textAlign: 'left',
  marginBottom: '15px',
  color: '#fff',
};

const glassCheckbox = {
  marginRight: '10px',
};

const glassButton = {
  background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
  color: '#fff',
  padding: '10px',
  width: '100%',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
};

glassButton[':hover'] = {
  background: 'linear-gradient(135deg, #4a0faa 0%, #1b5eb8 100%)',
};

export default GlassForm;
