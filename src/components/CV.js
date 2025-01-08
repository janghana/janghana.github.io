import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function Home() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>

    <LeftSideProfile />
    
    <div style={{ flex: '2' }}> {/* Middle content */}
        <h2>CV</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }}></hr> {/* Lighter and more transparent HR */}
          <div className="timeline">
          {/* Seoul National University */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>Seoul National University</h3>
              <p><strong>Research Assistance</strong>, Mar. 2025 - Present</p>
              <p>Research Focus: Deep Learning, Neuroimaging, Neuro-Oncology</p>
            </div>
          </div>
          {/* NanoCellect Biomedical */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>NanoCellect Biomedical</h3>
              <p><strong>Machine Learning Engineer</strong>, April 2024 - Feb. 2025 </p>
              <p>Research Focus: Cell Image Analysis, Cell Classification</p>
            </div>
          </div>
          {/* Seoul National University of Science and Technology */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>Seoul National University of Science and Technology (SEOULTECH)</h3>
              <p><strong>Research Assistance</strong>, Dec. 2023 - Aug. 2024</p>
              <p>Research Focus: Computer Vision, Medical Imaging, Probabilistic Generative Modeling(CT, MRI)</p>
              <p>Under the supervision of Prof. <a href="https://scholar.google.com/citations?user=MeNWZXQAAAAJ&hl=ko&oi=sra" target="_blank" rel="noopener noreferrer" className="advisor-link">KH Choi</a></p>
            </div>
          </div>
          {/* Korea Institute of Science and Technology */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>Korea Institute of Science and Technology (KIST)</h3>
              <p><strong>Research Intern</strong>, Jun. 2023 - Dec. 2023</p>
              <p>Research Focus: Computer Vision, Medical Imaging, 3D Segmentation(CT), 3D Classification(MRI)</p>
              <p>Under the supervision of Dr. <a href="https://scholar.google.com/citations?user=MeNWZXQAAAAJ&hl=ko&oi=sra" target="_blank" rel="noopener noreferrer" className="advisor-link">KH Choi</a></p>
            </div>
          </div>

          {/* Institute for Basic Science */}
          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>Institute for Basic Science (IBS)</h3>
              <p><strong>Research Assistance</strong>, Feb. 2023 - Jun. 2023</p>
              <p>Research Focus: Cognitive Neuroscience, Predictive Coding Theory, Predictive Coding Network</p>
              <p>Under the supervision of Dr. <a href="https://scholar.google.com/citations?user=DSkjj-4AAAAJ&hl=ko&oi=sra" target="_blank" rel="noopener noreferrer" className="advisor-link">YJ Kim</a></p>
            </div>
          </div>

          <div className="timeline-item">
            {/* <div className="timeline-icon"></div> */}
            <div className="timeline-content">
              <h3>Institute for Basic Science (IBS)</h3>
              <p><strong>Research Assistance</strong>, Feb. 2023 - Jun. 2023</p>
              <p>Research Focus: Cognitive Neuroscience, EEG (electroencephalography) experiment</p>
              <p>Under the supervision of Dr. <a href="https://scholar.google.com/citations?user=DSkjj-4AAAAJ&hl=ko&oi=sra" target="_blank" rel="noopener noreferrer" className="advisor-link">YJ Kim</a></p>
            </div>
          </div>
        </div>
        <br/>
      </div>
      <div style={{ flex: '1' }}> {/* Right side empty space */}</div>
    </div>
  );
}

export default Home;
