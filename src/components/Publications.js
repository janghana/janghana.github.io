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

        {/* <div style={{ marginBottom: '1.5em' }}>
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
          Radiogenomics Framework for Perfusion MRI via Hierarchical Graph Representation
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
          <strong>Han Jang<sup>1</sup></strong>, J. H. Lee<sup>1</sup>, ..., K. S. Choi<sup>*</sup>

            {" "}
            <i><a
              href="https://www.sciencedirect.com/journal/medical-image-analysis/"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              Medical Image Analysis 2025
            </a>
            </i>
            <a
              href="https://miccai-clip.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
            </a>
            {" "} Daejeon Convention Center {" "}
            <p></p>
            <a 
              href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862432"
              target="_blank" 
              rel="noopener noreferrer" 
              className="code-link"
            >
              Paper
            </a>
          </p>
        </div> */}

        {/* <p></p><br></br><br></br> */}


        <div style={{ marginBottom: '1.5em' }}>
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            Graph Deep Learning for Triple-Negative Breast Cancer Prediction Using Dynamic Contrast Enhanced MRI
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
          <strong>Han Jang<sup>1</sup></strong>, J. H. Lee<sup>1</sup>, K. S. Choi<sup>*</sup>

            {" "}
            <i><a
              href="https://icmri.ksmrm.org/2025m/"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              ICMRI 2025
            </a>
            </i>
            <a
              href="https://miccai-clip.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
            </a>
            {" "} Grand Walkerhill Seoul, South Korea
            <p></p>
            <a 
              href="https://drive.google.com/file/d/1gfXy22iOdNhNALBTo6k9rpiBjEsy-X6T/view?usp=drive_link"
              target="_blank" 
              rel="noopener noreferrer" 
              className="code-link"
            >
              Poster
            </a>
          </p>
        </div>

        <p></p><br></br><br></br>

        <div style={{ marginBottom: '1.5em' }}>
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
          Domain-Specialized Interactive Segmentation Framework for Meningioma Radiotherapy Planning
          {/* Domain-Specialized Interactive Segmentation Framework for Meningioma Radiotherapy Planning: Multi-Prompt 3D Tumor Delineation with Clinical Integration */}
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            J. H. Lee<sup>1</sup>, <strong>Han Jang<sup>1</sup></strong>, K. S. Choi<sup>*</sup>

            <br></br><br></br>
            <i><a
              href="https://conferences.miccai.org/2025/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              MICCAI, 2025
            </a>
            </i>
            {" "}(pp. 32-41),{" "}
            <a
              href="https://miccai-clip.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              CLIP workshop,
            </a>
            {" "} Daejeon Convention Center, South Korea
            <p></p>
            <a 
              href="https://janghana.github.io/Interactive_MEN_RT/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="code-link"
            >
              Project Page
            </a>
            <a 
              href="https://link.springer.com/chapter/10.1007/978-3-032-05479-1_4"
              target="_blank" 
              rel="noopener noreferrer" 
              className="code-link"
            >
              Paper
            </a>
            <a 
              href="https://arxiv.org/abs/2510.00416"
              target="_blank" 
              rel="noopener noreferrer" 
              className="code-link"
            >
              arXiv
            </a>
            <a 
              href="https://github.com/snuh-rad-aicon/Interactive-MEN-RT"
              target="_blank" 
              rel="noopener noreferrer" 
              className="code-link"
            >
              Github
            </a>

          </p>
        </div>

        <p></p><br></br><br></br>

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
              href="https://www.kiise.or.kr/conference/kcc/2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              Korea Computer Congress 2024
            </a>
            </i> (pp. 2048-2050){" "}
              Jeju ICC
            , South Korea
            <p></p>
            <a 
              href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862432"
              target="_blank" 
              rel="noopener noreferrer" 
              className="code-link"
            >
              Paper
            </a>

          </p>
        </div>
      </div>

      <div className="pub-right" />
    </div>
  );
}

export default Publications;
