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

        <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}></p>
        
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Greetings and Welcome !
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          I am <strong>Han Jang</strong>, and I am currently a <strong>MS-PhD Student</strong> at
          the {" "}
          <a
            href="https://bioeng.snu.ac.kr/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            <i>Interdisciplinary Program for Bioengineering</i>
          </a>
          , Graduate School of {" "}
          <a
            href="https://en.snu.ac.kr/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            <i>Seoul National University</i>
          </a> (SNU) in Seoul (South Korea) with a profound interest in Enhancing Human Well-being.
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
          with a particular interest in
          {" "}<em>Medical Image Analysis</em> and <em>Generative Models</em>.
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
            href="mailto:hanjang@snu.ac.kr"
            className="advisor-link"
          >
            hanjang[at]snu[dot]ac[dot]kr
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


        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7447599745172402176/"
            target="_blank"
            rel="noopener noreferrer"
            className="code-link"
          >
            Post
          </a>
          [Apr. 2026]
          {" "}
          Congratulations! Our paper{" "}
          <a href="https://arxiv.org/abs/2604.05738" target="_blank" rel="noopener noreferrer" className="advisor-link">
            MedLayBench-V: A Large-Scale Benchmark for Expert-Lay Semantic Alignment in Medical Vision Language Models
          </a>
          {" "}has been accepted to{" "}
          <i>Findings of the 64th Annual Meeting of the Association for Computational Linguistics</i>{" "}
          (<strong>ACL 2026</strong>, <strong style={{ color: '#c0392b' }}>Oral Presentation</strong>).
        </p>


        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <a
            href="#/post/ICMRI2025"
            className="code-link"
          >
            Post
          </a>
          [Oct. 2025] 
          {" "}
          Presented my paper at the ICMRI 2025 Conference, <b>Graph Deep Learning for Triple-Negative Breast Cancer Prediction Using Dynamic Contrast-Enhanced MRI</b>,
          and received the 🏆 {" "}
          <a 
            href="https://drive.google.com/file/d/1puwCCurH7XDfHEM-_a25z5MN8IBUE_it/view?usp=sharing"
            target="_blank"
            style={{ 
              color: 'darkgoldenrod',
            }}              
          >
            Best Trainee Scientific Award (Silver Prize)
          </a>
          {" "}
          in Seoul, South Korea.
        </p>


        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <a
            href="#/post/MICCAI2025"
            className="code-link"
          >
            Post
          </a>
          [Sep. 2025] 
          {" "}
          Presented my paper at the MICCAI 2025 CLIP Workshop, 
          {" "}
          <a href="https://link.springer.com/chapter/10.1007/978-3-032-05479-1_4" target="_blank" rel="noopener noreferrer" className="advisor-link">
            Domain-Specialized Interactive Segmentation Framework for Meningioma Radiotherapy Planning
          </a>
          ,
          {" "}
          in Daejeon, South Korea.
        </p>



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

        <br></br>
        <br></br>
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>Academic Services</h3>

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

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <strong>Reviewer</strong>,{" "}
          <a
            href="https://conferences.miccai.org/2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            International Conference on Medical Image Computing and Computer-Assisted Intervention
          </a>
          {" "}(<strong>MICCAI 2026</strong>)
        </p>
      </div>
      <div className="home-right" />
    </div>
  );
}

export default Home;
