import React, { useState } from 'react';

function CardForm() {
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
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={cardContainer}>
      <h2 style={{ textAlign: 'center' }}>Card Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} style={cardInput} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={cardInput} />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} style={cardInput} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} style={cardInput} />
        <select name="gender" onChange={handleChange} style={cardInput}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>
          <input type="checkbox" name="agree" onChange={handleChange} /> Agree to Terms
        </label>
        <button type="submit" style={cardButton}>Submit</button>
      </form>
    </div>
  );
}

const cardContainer = {
  background: '#f5f5f5',
  borderRadius: '12px',
  padding: '30px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  maxWidth: '400px',
  margin: '20px auto',
};

const cardInput = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '6px',
};

const cardButton = {
  background: '#0078D7',

  padding: '10px',
  width: '100%',
  border: 'none',
  borderRadius: '6px',
};

export default CardForm;
