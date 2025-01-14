import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function Home() {
  return (
    <div className="home-container">
      
      <div className="home-left">
        <LeftSideProfile />
      </div>

      <div className="home-main">
        <p style={{ marginBottom: '4rem', lineHeight: '1.6' }}></p>
        
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Greetings and Welcome !
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          I'm Han Jang, and I am currently a <strong>Senior Student</strong> at&nbsp;
          <a
            href="https://plus.cnu.ac.kr/html/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            Chungnam National University
          </a> with a profound interest in Enhancing Human Well-being.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          I focus on <em>Computer Science</em> and <em>Artificial Intelligence</em>, 
          with a particular interest in <em>Machine Learning</em>, <em>Deep Learning</em>, 
          <em>Medical Imaging</em>, <em>Generative Models</em>, <em>Neuroimaging</em> and <em>Neuroscience</em>.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          My research aims to make tangible contributions to humanity, and I plan to pursue graduate 
          studies to continue engaging in deeper academic exploration and research.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Through sustained research efforts, I aspire to create meaningful changes in people’s lives, 
          while collaborating with researchers who share similar interests and contributing to 
          the advancement of knowledge in the field.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#333' }}>
          Feel free to contact me anytime at&nbsp;
          <a
            href="mailto:janghan001112@gmail.com"
            className="advisor-link"
          >
            janghan001112[at]gmail[dot]com
          </a>
          .
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#333' }}>
          I’m always open to discussions on interesting ideas and collaborations.
        </p>
      </div>

      <div className="home-right" />
    </div>
  );
}

export default Home;
