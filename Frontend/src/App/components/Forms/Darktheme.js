const darkStyle = {
    background: '#333',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
  };
  
  function DarkForm() {
    return (
      <div style={darkStyle}>
        <input placeholder="Email" />
        <button>Submit</button>
      </div>
    );
  }
  
  export default DarkForm;
  