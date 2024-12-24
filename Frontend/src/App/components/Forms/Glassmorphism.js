import React, { useState } from 'react';

function GlassForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div style={glassContainer}>
      <h2 style={{ textAlign: 'center' }}>Glassmorphism Form</h2>
      <form>
        <input type="text" placeholder="Name" name="name" onChange={handleChange} style={glassInput} />
        <input type="email" placeholder="Email" name="email" onChange={handleChange} style={glassInput} />
        <button style={glassButton}>Submit</button>
      </form>
    </div>
  );
}

const glassContainer = {
  background: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '16px',
  padding: '30px',
  backdropFilter: 'blur(10px)',
  maxWidth: '400px',
  margin: '50px auto',
};

const glassInput = {
  background: 'rgba(255, 255, 255, 0.5)',
  border: 'none',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '8px',
  width: '100%',
};

const glassButton = {
  background: '#6a11cb',
  color: '#fff',
  padding: '10px',
  width: '100%',
  border: 'none',
  borderRadius: '8px',
};

export default GlassForm;
