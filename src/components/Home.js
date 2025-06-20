import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';
// import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      
      <div className="home-left">
        <LeftSideProfile />
      </div>

      <div className="home-main">
        <h2>About me</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}></p>
        
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Greetings and Welcome !
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          I am <strong>Han Jang</strong>, and I am currently a <strong>Senior Student</strong> at
          the Divison of Computer Convergence, {" "}
          <a
            href="https://plus.cnu.ac.kr/html/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            <i>Chungnam National University</i>
          </a> in Daejeon (South Korea) with a profound interest in Enhancing Human Well-being.
        </p>

        <p>
          I am working at {" "}
          <a
            href="https://sites.google.com/view/snuhradaicon"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
            >
            AICON LAB {" "}
          </a>
            under the supervision of Prof. <a
              href="https://scholar.google.co.kr/citations?hl=ko&user=XYh6Z0gAAAAJ&view_op=list_works&sortby=pubdate"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              KS Choi
            </a>
.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          I focus on <em>Computer Science</em> and <em>Artificial Intelligence</em>, 
          with a particular interest in <em>Machine Learning</em>, <em>Generative Models</em>, 
          {" "}<em>Medical Imaging</em>, <em>Neuroimaging</em>.
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

        {/* <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <a
            href="#/post/AICON"
            className="code-link"
          >
            Post
          </a>

          [Mar. 2025] Joined SNU
          {" "}
          <i><a
            href="https://sites.google.com/view/snuhradaicon"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            AICON LAB
          </a></i>
          {" "}
          as a Research Assistant to advance research in Deep Learning and Neuro­imaging.
        </p> */}

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <a
            href="#/post/Nanocellect"
            className="code-link"
          >
            Post
          </a>
          [Feb. 2025] 
          {" "}
          Completed a <strong>Machine Learning Engineer</strong> at {" "}
          <i><a
            href="https://nanocellect.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            NanoCellect Biomedical, Inc.
          </a></i> {" "}
          in San Diego, California, United States.
        </p>

        {/* <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <a href="#/post/Nanocellect" className="code-link">Post</a>
          &nbsp;[Jul.&nbsp;2024]&nbsp;
          Published my first-author paper&nbsp;
          <strong>“Unsupervised Diffusion Model for Synthesizing&nbsp;T1-weighted&nbsp;MRI Scans from Abdominal CT Scans”</strong>&nbsp;
          at&nbsp;
          <i><a
            href="https://www.kiise.or.kr/conference/kcc/2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            Korea&nbsp;Computer&nbsp;Congress&nbsp;2024
          </a></i>, Jeju&nbsp;ICC&nbsp;(South Korea).
        </p>
 */}







      </div>

      
      
      

      <div className="home-right" />
    </div>
  );
}

export default Home;
