import React from 'react';

const StripedTable = () => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>ID</th>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Name</th>
          <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: '#f9f9f9' }}>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>1</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>John Doe</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>28</td>
        </tr>
        <tr>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>2</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>Jane Smith</td>
          <td style={{ padding: '12px', border: '1px solid #ddd' }}>35</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StripedTable;
