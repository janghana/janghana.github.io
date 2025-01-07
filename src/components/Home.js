import React from 'react';
import '../App.css'; // Adjust the path as necessary
import picture1 from './han.jpeg'
import tistoryLogo from './tistory-logo.png'

function Home() {
  return (
    
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: '1' }}> {/* Left side content */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '50px' }}>
        <img src={picture1} width = '200px'/>
          <h2 style={{ marginBottom: '0.5em' }}>Han Jang</h2>
          <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
            Undergraduate Research Student
          </p>
          <p style={{ textAlign: 'center', margin: '0 0 20px 0', fontWeight: 'normal' }}>
            Deep Learning, Medical Imaging
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '12px' }}>
            <p style={{ margin: '5px 0' }}><i className="fas fa-map-marker-alt"></i> &nbsp; San Diego, California, United States</p>
            <p style={{ margin: '5px 0' }}><i className="fab fa-github"></i> &nbsp;<a href="https://github.com/janghana" target="_blank" rel="noopener noreferrer" className="advisor-link">GitHub</a></p>
            <p style={{ margin: '5px 0' }}><i className="fas fa-graduation-cap"></i> <a href="https://scholar.google.com/citations?hl=en&user=b6IRRlsAAAAJ" target="_blank" rel="noopener noreferrer" className="advisor-link">Google Scholar</a></p>
            <p style={{ margin: '5px 0' }}><i className="fab fa-linkedin" style={{ marginRight: '5px' }}></i> <a href="https://www.linkedin.com/in/han-jang-255aa0253/" target="_blank" rel="noopener noreferrer" className="advisor-link">Linkedin</a></p>
            <p style={{ margin: '5px 0' }}>  <img src={tistoryLogo} alt="Tistory Logo" style={{ width: '10px', height: '10px', marginRight: '8px' }} /><a href="https://janghan-kor.tistory.com/" target="_blank" rel="noopener noreferrer" className="advisor-link">Tistory</a></p>

          </div>
        </div>
      </div>


      <div style={{ flex: '2' }}> {/* Middle content */}
        <h2>About Me</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }}></hr> {/* Lighter and more transparent HR */}
        <p>I'm an undergraduate research student with a profound interest in Human Research. I am studying Computer Science and Artificial Intelligence at the undergraduate level, and recently, my primary research focus has been on Computer Vision and Probabilistic Generative Modeling, Medical Imaging, Bioinformatics. Through my research, I aim to benefit humanity. In the future, I aspire to pursue graduate studies and engage in research that provides tangible assistance to people.</p>
        <br/>
        <h2>Research Interest</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }}></hr> {/* Lighter and more transparent HR */}
          <ul>
            <li><strong>Machine Learning</strong></li><br/>
            <li><strong>Computer Vision</strong></li><br/>
            <li><strong>Medical Imaging</strong></li>
            </ul>
        <br/>
        <h2>Education</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }}></hr> {/* Lighter and more transparent HR */}
        <div className="timeline">
        <div className="timeline-item">
        {/* <div className="timeline-icon"></div> */}
        <div className="timeline-content">
        <h3>Chungnam National University (CNU)</h3>
        <p><strong>Bachelor’s degree</strong>, Mar. 2019 - Present</p>
        <p>The Division of Computer Convergence</p>
        </div>
        </div>
        </div>
      </div>
      <div style={{ flex: '1' }}> {/* Right side empty space */}</div>
    </div>
  );
}

export default Home;
