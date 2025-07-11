import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function Publications() {
  return (
    <div className="pub-container">

      <div className="pub-left">
        <LeftSideProfile />
      </div>

      <div className="pub-main">
        <h2>Publications</h2>
        <hr style={{ borderColor: '#e0e0e0', marginBottom: '5em', opacity: '0.15' }} />
        
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>2025</h3>

        <hr
          style={{
            width: '100%',
            marginLeft: '0',
            marginRight: 'auto',
            marginTop: '1em',
            marginBottom: '1em',
            borderColor: '#e0e0e0',
            opacity: '0.15',
            display: 'block'
          }}
        />

        <div style={{ marginBottom: '1.5em' }}>
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            ... Cycle-Consistent Conditional Diffusion ...
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>Han Jang<sup>1</sup></strong>, ...,
            {" "} [Under Review]
          </p>
        </div>

        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>2024</h3>

        <hr
          style={{
            width: '100%',
            marginLeft: '0',
            marginRight: 'auto',
            marginTop: '1em',
            marginBottom: '1em',
            borderColor: '#e0e0e0',
            opacity: '0.15',
            display: 'block'
          }}
        />

        
        <div style={{ marginBottom: '1.5em' }}>
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>Han Jang<sup>1</sup></strong>, J.H. Kwon, K.H. Choi<sup>*</sup>, 
            {" "}
            <i><a
              href="http://m.kiise.or.kr/academyEng/main/getContent.faEng?content_no=1&MENU_ID=010100"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              Korea Computer Congress
            </a>
            {" "} 2024 </i> (pp. 2048-2050),{" "}
            <a
              href="https://www.kiise.or.kr/conference/kcc/2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              Jeju ICC
            </a>
            {" "}
            [<a
              href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862432"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              Paper
            </a>]
          </p>
        </div>
      </div>

      <div className="pub-right" />
    </div>
  );
}

export default Publications;
