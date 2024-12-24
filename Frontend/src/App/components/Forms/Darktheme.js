import React from 'react';

const darkStyle = {
  background: '#2C2C2C',
  color: '#FFF',
  padding: '30px',
  borderRadius: '8px',
  maxWidth: '400px',
  margin: '50px auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid #555',
  background: '#444',
  color: '#FFF',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: '#FFF',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#388E3C',
};

function DarkForm() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={darkStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Dark Theme Form</h2>
      <input style={inputStyle} type="text" placeholder="Name" />
      <input style={inputStyle} type="email" placeholder="Email" />
      <input style={inputStyle} type="password" placeholder="Password" />
      <select style={inputStyle}>
        <option value="">Select an Option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <label style={{ display: 'block', marginBottom: '15px' }}>
        <input type="checkbox" /> I agree to the terms and conditions
      </label>
      <button
        style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Submit
      </button>
    </div>
  );
}

export default DarkForm;
