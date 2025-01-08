import React from 'react';
import picture1 from './han.jpeg';
import tistoryLogo from './tistory-logo.png';

function ProfileSidebar() {
  return (
    <div style={{ flex: '1' }}> {/* Left side content */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column', 
        marginTop: '50px' 
      }}>
        <img src={picture1} width='200px' alt="Profile of Han Jang" />
        <h2 style={{ marginBottom: '0.5em' }}>Han Jang</h2>
        <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          Undergraduate Research Student
        </p>
        <p style={{ textAlign: 'center', margin: '0 0 10px 0', fontWeight: 'normal' }}>
          Chungnam National University
        </p>

        <p style={{ textAlign: 'center', margin: '0 0 20px 0', fontWeight: 'normal' }}>
          Deep Learning, Medical Imaging, Neuroimaging
        </p>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            fontSize: '12px' 
          }}
        >
          <p style={{ margin: '5px 0' }}>
            <i className="fas fa-map-marker-alt"></i> &nbsp; San Diego, California, United States
          </p>
          <p style={{ margin: '5px 0' }}>
            <i className="fab fa-github"></i> &nbsp;
            <a 
              href="https://github.com/janghana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="advisor-link"
            >
              GitHub
            </a>
          </p>
          <p style={{ margin: '5px 0' }}>
            <i className="fas fa-graduation-cap"></i> &nbsp;
            <a 
              href="https://scholar.google.com/citations?hl=en&user=b6IRRlsAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="advisor-link"
            >
              Google Scholar
            </a>
          </p>
          <p style={{ margin: '5px 0' }}>
            <i className="fab fa-linkedin" style={{ marginRight: '5px' }}></i> 
            <a 
              href="https://www.linkedin.com/in/han-jang-255aa0253/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="advisor-link"
            >
              Linkedin
            </a>
          </p>
          <p style={{ margin: '5px 0' }}> 
            <img 
              src={tistoryLogo} 
              alt="Tistory Logo" 
              style={{ width: '10px', height: '10px', marginRight: '8px' }}
            />
            <a 
              href="https://janghan-kor.tistory.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="advisor-link"
            >
              Tistory
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
