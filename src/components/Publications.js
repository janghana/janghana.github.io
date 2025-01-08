import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function Publications() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>

      <LeftSideProfile />

      <div style={{ flex: '2' }}>
        <h2>Publications</h2>
        <hr style={{ borderColor: '#e0e0e0', marginBottom: '5em', opacity: '0.15' }} />
        
        {/* 2025 */}
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>2025</h3>
        <div style={{ marginBottom: '1.5em' }}>
          <h4 style={{ 
            margin: '0 0 0.5em', 
            fontSize: '1.1em',
            lineHeight: '1.4'
          }}>
            Bi-directional Diffusion Model-Driven Medical Image Translation
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>H. Jang et al.</strong>,
            <em> Expert Systems With Applications</em> 2025
          </p>
        </div>

        <hr
          style={{
            width: '10%',
            marginLeft: '0',
            marginRight: 'auto',
            marginTop: '1em',
            marginBottom: '1em',
            borderColor: '#e0e0e0',
            opacity: '0.15',
            display: 'block'
          }}
        />

        {/* 2024 */}
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>2024</h3>
        <div style={{ marginBottom: '1.5em' }}>
          <h4 style={{ 
            margin: '0 0 0.5em', 
            fontSize: '1.1em',
            lineHeight: '1.4'
          }}>
            Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>H. Jang</strong>, J.H. Kwon, K.H. Choi*, 
            <em> Korea Computer Congress</em> 2025 (pp. 2048-2050), Jeju ICC |{" "}
            <a 
              href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862432" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: '#1f6f8b' }}
            >
              Paper
            </a>
          </p>
        </div>
      </div>


    <div style={{ flex: '1' }}> {/* Right side empty space */}</div>
  </div>
  );
}

export default Publications;
