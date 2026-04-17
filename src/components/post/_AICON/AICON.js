import React from 'react';
import '../../../App.css';
import LeftSideProfile from '../../LeftSideProfile';

function Nanocellect() {
  return (
    <div className="home-container">
      <div className="home-left">
        <LeftSideProfile />
      </div>

      <div className="home-main" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <h2 style={{ fontWeight: 800 }}>Research Assistant @ SNUH</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: 0.15 }} />

        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', fontSize: '17px' }}>
          <li><strong>Date:</strong> Mar. 2025 - Present</li>
          <li><strong>Role:</strong> Research Assistant</li>
          <li><strong>Company:</strong> Seoul National University Hospital</li>
          <li><strong>Place:</strong> Seoul, South Korea</li>
        </ul>

        Coming Soon...

      <p style={{ marginTop: '2.5rem', fontSize: '17px' }}>
        <a href="/" className="advisor-link">← Back to Home</a>
      </p>

      </div>

      <div className="home-right" />
    </div>
  );
}

export default Nanocellect;
