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
        <h2>About me</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

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
          {" "}<em>Medical Imaging</em>, <em>Generative Models</em>, <em>Neuroimaging</em> and <em>Neuroscience</em>.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          My research aims to make tangible contributions to humanity, and I plan to pursue graduate 
          studies to continue engaging in deeper academic exploration and research.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
        Through sustained research efforts, I aspire to create meaningful changes in people’s lives by collaborating with like-minded researchers and contributing to the advancement of knowledge in the field.
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

        <br></br>
        <br></br>
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>News</h3>
        
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

        {/* <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          [Mar. 2025] Joined SNU AICON LAB to advance research in Deep Learning and Neuroimaging.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          [Feb. 2025] Completed a Machine Learning Engineer Intern in San Diego, California, United States, focusing on healthcare.
        </p> */}

        {/* <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          [May 2025] Published a paper in ESWA (IF 8.96 in 2025); <strong>Diffusion model-driven medical image translation.</strong>
        </p> */}






          

      </div>

      
      
      

      <div className="home-right" />
    </div>
  );
}

export default Home;
