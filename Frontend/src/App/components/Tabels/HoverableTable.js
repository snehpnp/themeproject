import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Edit and Delete icons
import Switch from 'react-switch'; // Corrected import for default export
import Contnet from '../Content';

const HoverableTable = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleChange = () => setIsActive(!isActive);

  const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 35 },
  ];

  return (
    <Contnet Page_title="Hoverable Table">
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#333', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Age</th>
            <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #ddd' }}>Actions</th>
            <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              style={{
                padding: '10px',
                border: '1px solid #ddd',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.age}</td>
              <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #ddd' }}>
                <FaEdit style={{ marginRight: '10px', cursor: 'pointer' }} />
                <FaTrash style={{ cursor: 'pointer' }} />
              </td>
              <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #ddd' }}>
                <Switch checked={isActive} onChange={handleToggleChange} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Example */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button style={{ padding: '5px 10px', marginRight: '10px' }}>Previous</button>
        <button style={{ padding: '5px 10px' }}>Next</button>
      </div>
    </div>
    </Contnet>
  );
};

export default HoverableTable;
