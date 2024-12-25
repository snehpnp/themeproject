import React, { useState } from 'react';

function ClassicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Classic Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} style={inputStyle} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={inputStyle} />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} style={inputStyle} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} style={inputStyle} />
        <select name="gender" onChange={handleChange} style={inputStyle}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input type="checkbox" name="agree" onChange={handleChange} /> Agree to Terms
        </label>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  marginBottom: '10px',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  background: '#4caf50',

  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default ClassicForm;
