// CV.js

import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function CV() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      
      <LeftSideProfile />

      <div style={{ flex: '2' }}>
        <h2>CV</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        {/* ================================ 
            Research Interest
        ================================ */}
        <h3>Research Interest</h3>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
          <li>Machine Learning</li>
          <li>Computer Vision</li>
          <li>Generative Models</li>
          <li>Medical Imaging</li>
          <li>Neuroimaging</li>
          <li>Neuroscience</li>
        </ul>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />
        {/* ================================ 
            Education
        ================================ */}
        <h3>Education</h3>
        <div style={{ marginLeft: '1.5rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Chungnam National University (CNU)</strong> - Daejeon, South Korea
          </p>
          <p style={{ margin: 0 }}>2019. 3. ~ Present</p>
          <p style={{ margin: 0 }}>Bachelor’s degree</p>
          <p style={{ margin: 0 }}>(Major) The Division of Computer Convergence</p>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        {/* ================================ 
            Experience
        ================================ */}
        <h3 style={{ marginTop: '2rem' }}>Experience</h3>
        {/* <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} /> */}

        <div className="timeline">
          {/* Seoul National University */}
          {/* <div className="timeline-item">
            <div className="timeline-content">
              <h3>Seoul National University</h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
                </p>
              <p><strong>Research Assistance</strong>, Mar. 2025 - Present</p>
              <p>Research Focus: Deep Learning, Neuroimaging, Neuro-Oncology</p>
              <p>
                Under the supervision of Prof.&nbsp;
                <a 
                  href="https://scholar.google.co.kr/citations?hl=ko&user=XYh6Z0gAAAAJ&view_op=list_works&sortby=pubdate" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                >
                  KS Choi
                </a>
              </p>
            </div>
          </div> */}

          {/* NanoCellect Biomedical */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>NanoCellect Biomedical</h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  San Diego, California, United States
              </p>
              <p><strong>Machine Learning Engineer</strong>, Apr. 2024 - Feb. 2025</p>
              <p>Research Focus: Cell Image Analysis, Cell Classification</p>
            </div>
          </div>

          {/* Seoul National University of Science and Technology */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Seoul National University of Science and Technology (SEOULTECH)</h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
              </p>
              <p><strong>Research Assistance</strong>, Dec. 2023 - Aug. 2024</p>
              <p>
                Research Focus: Computer Vision, Medical Imaging, 
                Probabilistic Generative Modeling (CT, MRI)
              </p>
              <p>
                Under the supervision of Prof.&nbsp;
                <a 
                  href="https://scholar.google.com/citations?user=MeNWZXQAAAAJ&hl=ko&oi=sra" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                >
                  KH Choi
                </a>
              </p>
            </div>
          </div>

          {/* Korea Institute of Science and Technology */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Korea Institute of Science and Technology (KIST)</h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
              </p>
              <p><strong>Research Intern</strong>, Jun. 2023 - Dec. 2023</p>
              <p>
                Research Focus: Computer Vision, Medical Imaging, 
                3D Segmentation(CT), 3D Classification(MRI)
              </p>
              <p>
                Under the supervision of Dr.&nbsp;
                <a 
                  href="https://scholar.google.com/citations?user=MeNWZXQAAAAJ&hl=ko&oi=sra" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                >
                  KH Choi
                </a>
              </p>
            </div>
          </div>

          {/* Institute for Basic Science */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Institute for Basic Science (IBS)</h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Daejeon, South Korea
              </p>
              <p><strong>Research Assistance</strong>, Feb. 2023 - Jun. 2023</p>
              <p>Research Focus: Cognitive Neuroscience, Predictive Coding Theory, Predictive Coding Network</p>
              <p>
                Under the supervision of Dr.&nbsp;
                <a 
                  href="https://scholar.google.com/citations?user=DSkjj-4AAAAJ&hl=ko&oi=sra" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                >
                  YJ Kim
                </a>
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Institute for Basic Science (IBS)</h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Daejeon, South Korea
              </p>
              <p><strong>Research Assistance</strong>, Feb. 2023 - Jun. 2023</p>
              <p>Research Focus: Cognitive Neuroscience, EEG (electroencephalography) experiment</p>
              <p>
                Under the supervision of Dr.&nbsp;
                <a 
                  href="https://scholar.google.com/citations?user=DSkjj-4AAAAJ&hl=ko&oi=sra" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="advisor-link"
                >
                  YJ Kim
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />
        <h3>Publications</h3>
        {/* 2025 */}
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>2025</h3>
        <div style={{ marginBottom: '1.5em' }}>
          <h4 style={{ 
            margin: '0 0 0.5em', 
            fontSize: '1.1em',
            lineHeight: '1.4'
          }}>
            Bi-directional Diffusion Model-Driven Medical Image Translation
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>H. Jang et al.</strong>,
            <em> Expert Systems With Applications</em> 2025
          </p>
        </div>

        {/* 2024 */}
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>2024</h3>
        <div style={{ marginBottom: '1.5em' }}>
          <h4 style={{ 
            margin: '0 0 0.5em', 
            fontSize: '1.1em',
            lineHeight: '1.4'
          }}>
            Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>H. Jang</strong>, J.H. Kwon, K.H. Choi*, 
            <em> Korea Computer Congress</em> 2025 (pp. 2048-2050), Jeju ICC |{" "}
            <a 
              href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862432" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: '#1f6f8b' }}
            >
              Paper
            </a>
          </p>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />
        {/* ================================ 
            Skills
        ================================ */}
        <h3>Skills</h3>

        {/* Programming Language Proficiency */}
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Programming Language Proficiency:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          <li>Python, MATLAB, C++, C, Java</li>
        </ul>

        {/* Libraries and Frameworks */}
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Libraries and Frameworks:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          <li>
            PyTorch, PyTorch Lightning, W&amp;B, TensorFlow, scikit-learn, Git, GitHub, 
            Docker, OpenCV, PsychoPy (Psychotoolbox-3), Simulink, Keras
          </li>
        </ul>

        {/* Support Programs (Medical Imaging) */}
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Support Programs (Medical Imaging):
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          <li>
            3D Slicer (5.6.1), ImageJ (FIJI), ITK-SNAP, RadiAnt DICOM Viewer, 
            MIPAV, Elastix, SimpleITK
          </li>
        </ul>

        {/* Experimental Equipment (Neuroscience) */}
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Experimental Equipment (Neuroscience):
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          <li>Brain Product: EEG (electroencephalography), Tobii TX300 Eye Tracker</li>
        </ul>

        {/* Online Work Stationary Friendly */}
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Online Work Stationary Friendly:
        </p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          <li>Jira, Bitbucket, Microsoft Teams, Outlook, Notion, Overleaf, Slack</li>
        </ul>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        {/* ================================ 
            3) Honors & Awards
        ================================ */}
        <h3>Honors & Awards</h3>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
          <li>
            Received an Encouragement Award, Engineering Fair 2024 
            (Issued by Chungnam National Univ. Aug. 2024)
          </li>
          <li>
            Received an Encouragement Award, SW/AI Creative Contest in AI Project 
            (Issued by Chungnam National Univ. Jun. 2024)
          </li>
          <li>
            Received an Encouragement Award, SW/AI Creative Contest, Coding Test 
            (Issued by Chungnam National Univ. Jun. 2023)
          </li>
          <li>
            Received an Encouragement Award, SW/AI Creative Contest, Coding Test 
            (Issued by Chungnam National Univ. Apr. 2022)
          </li>
          <li>
            Received a Bronze Award, Creative Software Contest 
            (Issued by Chungnam National Univ. Oct. 2019)
          </li>
        </ul>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        {/* ================================ 
            Licenses & Certifications
        ================================ */}
        <h3>Licenses & Certifications</h3>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
          <li>
            <strong>Fundamental Neuroscience for Neuroimaging</strong> 
            &nbsp;- Prof. Arnold Bakker (Issued by Johns Hopkins University), Dec. 2024.
          </li>
          <li>
            <strong>Machine Learning</strong> 
            &nbsp;- Prof. Andrew Ng (Issued by Stanford University), Dec. 2024.
          </li>
          <li>
            <strong>Unsupervised Learning, Recommenders, Reinforcement Learning</strong> 
            &nbsp;- Prof. Andrew Ng (Issued by Stanford University), Dec. 2024.
          </li>
          <li>
            <strong>Advanced Learning Algorithm</strong> 
            &nbsp;- Prof. Andrew Ng (Issued by Stanford University), Oct. 2024.
          </li>
          <li>
            <strong>Supervised Machine Learning: Regression and Classification</strong> 
            &nbsp;- Prof. Andrew Ng (Issued by Stanford University), July. 2024.
          </li>
          <li>
            <strong>SQLD</strong> 
            &nbsp;(Issued by Korea Data Industry Promotion Agency),
            Jun. 2023 ~ Expires Jun. 2033
          </li>
        </ul>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        {/* ================================ 
            Languages
        ================================ */}
        <h3>Languages</h3>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
          <li>English (Professional working proficiency)</li>
          <li>Korean (Native Fluency)</li>
          <li>French (Elementary proficiency)</li>
        </ul>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />
      </div>

      <div style={{ flex: '1' }}/>
    </div>
  );
}

export default CV;
