import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function Home() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>

      <LeftSideProfile />
      

      <div style={{ flex: '2' }}>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Hi there, and welcome! My name is Han Jang, and I am currently an 
          <strong>Undergraduate Research Student</strong> at Chungnam National University. 
          I focus on <em>Computer Science</em> and <em>Artificial Intelligence</em>, 
          with a particular interest in <em>Deep Learning</em>, 
          <em>Medical Imaging</em>, and <em>Neuroimaging</em>.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          My ultimate ambition is to promote and enhance human well-being. 
          Whether it’s discovering novel ways to improve healthcare through 
          <em>Computer Vision</em> and <em>Generative Modeling</em> or exploring 
          the depths of <em>Neuroscience</em>, I believe in making 
          <strong>tangible contributions</strong> to people’s lives. 
          I plan to pursue graduate studies, where I hope to collaborate 
          with like-minded researchers and further develop advanced 
          <em>AI-driven</em> solutions for real-world problems.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Beyond my academic pursuits, I love exploring creative outlets 
          like <strong>playing the piano</strong>, running, cycling, 
          working out, writing, cooking, and reading. I’m also a big fan of 
          <em>Flower Dance (DJ Okawari)</em> and <em>Passacaglia (Handel-Halvorsen)</em>, 
          sometimes sharing my piano performances to spread a bit of joy. 
          In my leisure time, I delve into fields like <em>Psychology</em>, 
          <em>Neuroscience</em>, <em>Psychiatry</em>, and <em>Cognitive Psychology</em>, 
          aspiring to learn how we can better understand the human mind and 
          bring greater comfort to people’s everyday lives.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <strong>Research Philosophy:</strong> At the core of human research, 
          I believe there is a deep exploration of humanity itself. 
          Consequently, my work extends beyond medical diagnostic analysis 
          and rehabilitation, into broader scientific approaches such as 
          <em>neuroscience</em>, <em>cognitive neuroscience</em>, 
          <em>medical data analysis</em>, and <em>protein analysis</em>. 
          I strive to combine these interdisciplinary insights to offer 
          <strong>practical, real-world benefits</strong> for individuals 
          and communities.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <strong>MBTI:</strong> ENFJ (E: 86%, N: 85%, F: 86%, J: 98%) 
          <em>(updated Nov. 28, 2024)</em>. This reflects my enthusiasm for 
          collaborative research and my eagerness to connect with fellow 
          researchers and practitioners who share a passion for improving 
          human well-being.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Thank you for stopping by my page. If you’d like to learn more 
          about my work or discuss potential collaborations, feel free to reach out via my
          <strong> 
            {" "}
            <a 
              href="https://github.com/janghana" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: '#007BFF' }}
            >
              GitHub
            </a>,{" "}
            <a 
              href="https://www.linkedin.com/in/han-jang-255aa0253/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: '#007BFF' }}
            >
              LinkedIn
            </a>,{" "}
            <a 
              href="https://janghan-kor.tistory.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: '#007BFF' }}
            >
              Tistory
            </a>,{" "}
            or{" "}
            <a 
              href="https://scholar.google.com/citations?hl=en&user=b6IRRlsAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: '#007BFF' }}
            >
              Google Scholar
            </a>
          </strong>{" "}
          links! I look forward to connecting with you and exploring new possibilities together.
        </p>
      </div>


      <div style={{ flex: '1' }}> {/* Right side empty space */}</div>
    </div>
  );
}

export default Home;
