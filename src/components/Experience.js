import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

import snu from './snu.png';
import nanocellect from './nanocellect.png';
import seoultech from './seoultech.png';
import kist from './kist.png';
import ibs from './ibs.png';
import navy from './navy.png';
import cnu from './cnu.png';

function Experience() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <LeftSideProfile />

      <div style={{ flex: '2' }}>
        <h2>Experience</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline">
          {/* SNU */}
          <div className="timeline-item">
            <div 
              className="timeline-content" 
              style={{ 
                display: 'flex', 
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Seoul National University (SNU)</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
                </p>
                <p><strong>Research Assistance</strong> (On-site), Mar. 2025 - Present</p>
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
              <div style={{ width: '80px', textAlign: 'center' }}>
                <img
                  src={snu}
                  alt="SNU Logo"
                  style={{ 
                    maxWidth: '150px',
                    maxHeight: '150px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* NanoCellect Biomedical */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>NanoCellect Biomedical</h3>

                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  San Diego, California, United States
                </p>

                <p><strong>Machine Learning Engineer</strong> (On-site), Apr. 2024 - Feb. 2025</p>
                <p>Research Focus: Cell Image Analysis, Cell Classification <br /> (specifically human white blood cells, leukemia cells, trophoblast cells)</p>
                <p>
                  Product: &nbsp;
                  <strong>
                  <a 
                    href="https://nanocellect.com/verlo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='advisor-link'
                    style={{ color: 'green' }}
                  >
                    VERLO™ Image-Guided Cell Sorter
                  </a>
                  </strong>
                </p>

              </div>
              <div style={{ width: '80px', textAlign: 'center' }}>
                <img
                  src={nanocellect}
                  alt="NanoCellect Logo"
                  style={{ 
                    maxWidth: '150px',
                    maxHeight: '150px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* SEOULTECH */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Seoul National University of Science and Technology (SEOULTECH)</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
                </p>
                <p><strong>Research Assistance</strong> (Hybrid), Dec. 2023 - Aug. 2024</p>
                <p>Research Focus: Computer Vision, Medical Imaging, Generative Models</p>
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
                  &nbsp;BAIS LAB
                </p>
              </div>
              <div style={{ width: '80px', textAlign: 'center' }}>
                <img
                  src={seoultech}
                  alt="SEOULTECH Logo"
                  style={{ 
                    maxWidth: '150px',
                    maxHeight: '150px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* KIST */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Korea Institute of Science and Technology (KIST)</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
                </p>
                <p><strong>Research Intern</strong> (On-site), Jun. 2023 - Dec. 2023</p>
                <p>Research Focus: Computer Vision, Medical Imaging, 3D Segmentation, 3D Classification</p>
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
                  &nbsp;AIMI LAB
                </p>
              </div>
              <div style={{ width: '80px', textAlign: 'center' }}>
                <img
                  src={kist}
                  alt="KIST Logo"
                  style={{ 
                    maxWidth: '150px',
                    maxHeight: '150px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* IBS 1 */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Institute for Basic Science (IBS)</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Daejeon, South Korea
                </p>
                <p><strong>Research Assistance</strong> (On-site), Feb. 2023 - Jun. 2023</p>
                <p>Research Focus: Cognitive Neuroscience, Predictive Coding, Predictive Coding Network</p>
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
                  &nbsp;BrainX LAB
                </p>
              </div>
              <div style={{ width: '80px', textAlign: 'center' }}>
                <img
                  src={ibs}
                  alt="IBS Logo"
                  style={{ 
                    maxWidth: '150px',   /* 가로 최대 120px */
                    maxHeight: '150px',   /* 세로 최대 80px */
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* IBS 2 */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Institute for Basic Science (IBS)</h3>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Daejeon, South Korea
                </p>
                <p><strong>Research Assistance</strong> (On-site), Feb. 2023 - Jun. 2023</p>
                <p>Research Focus: Cognitive Neuroscience, EEG (electroencephalography) Experiment</p>
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
                  &nbsp;BrainX LAB
                </p>
              </div>
              <div style={{ width: '80px', textAlign: 'center' }}>
                <img
                  src={ibs}
                  alt="IBS Logo"
                  style={{ 
                    maxWidth: '150px',   /* 가로 최대 120px */
                    maxHeight: '150px',   /* 세로 최대 80px */
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
          </div>


          {/* Military & Student Leadership */}
          <hr
            style={{
              width: '100%',
              marginLeft: '0',
              marginRight: 'auto',
              marginTop: '1em',
              marginBottom: '1em',
              borderColor: '#e0e0e0',
              opacity: '0.15',
              display: 'block',
            }}
          />

          <h2>Military & Student Representative</h2>

          {/* Republic of Korea Navy */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Republic of Korea Navy</h3>
                <p>2020. 2. ~ 2021. 10.</p>
                <p>Military Service - Republic of Korea Navy, Class 664</p>
                <p>(Honorably Discharged as a Sergeant upon Completion of Full Service Term)</p>
              </div>

              <div style={{ width: '80px', textAlign: 'center' }}>
                <img
                  src={navy}
                  alt="ROK Navy Logo"
                  style={{ 
                    maxWidth: '150px', 
                    maxHeight: '150px', 
                    objectFit: 'contain' 
                  }}
                />
              </div>
            </div>
          </div>

          {/* CNU */}
          <div className="timeline-item">
            <div
              className="timeline-content"
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <h3>Chungnam National University (CNU)</h3>
                <p>2019. 3. ~ 2019. 12.</p>
                <p>
                  Class of 2019 Student Representative of the Division of Computer Convergence,<br />
                  College of Engineering, Chungnam National University
                </p>
              </div>

              <div style={{ width: '80px', textAlign: 'center' }}>
                <img
                  src={cnu}
                  alt="CNU Logo"
                  style={{ 
                    maxWidth: '150px', 
                    maxHeight: '150px', 
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

        <br/>
      </div>

      <div style={{ flex: '1' }}/>
    </div>
  );
}

export default Experience;
