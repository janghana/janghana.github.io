import React from 'react';
import ReactTypingEffect from 'react-typing-effect'; 
import picture1 from './me/han.jpeg';
import tistoryLogo from './Affiliation/tistory-logo.png';

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
        <img 
          src={picture1} 
          width='250px' 
          alt="Profile of Han Jang" 
          style={{
            borderRadius: '10%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            objectFit: 'cover',
            height: '300px'
          }} 
        />
        <h2 style={{ marginBottom: '0.5em' }}>Han Jang</h2>
        <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          MS-PhD Student in Bioengineering
        </p>

        <p style={{ textAlign: 'center', margin: '0 0 10px 0', fontWeight: 'normal' }}>
          <i>Seoul National University</i>
        </p>

        <p 
          style={{ 
            textAlign: 'center', 
            margin: '0 0 20px 0', 
            fontWeight: 'normal' 
          }}
        >
          Passionate about leveraging <br></br> &nbsp;
          <ReactTypingEffect
            text={[
              "Deep Learning", 
              "Machine Learning", 
              "Medical Imaging", 
              "Generative Models",
              "Neuroimaging", 
              "Neuroscience"
            ]}
            speed={50}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
            cursor="|"
          />
          <br />
          to enhance people's quality of life.
        </p>
        
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            fontSize: '15px' 
          }}
        >
          <p style={{ margin: '5px 0' }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '3px' }}></i> &nbsp; Seoul, South Korea
          </p>
          
          <p style={{ margin: '5px 0' }}>
            <i className="fab fa-github" style={{ marginRight: '4px' }}></i> &nbsp;
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
            <i className="fab fa-linkedin" style={{ marginRight: '13px' }}></i> 
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
              style={{ width: '10px', height: '10px', marginRight: '17px' }}
            />
            <a 
              href="https://janghan-kor.tistory.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="advisor-link"
            >
              Tech Blog
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

        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
