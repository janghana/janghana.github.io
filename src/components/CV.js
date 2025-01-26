import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function CV() {
  return (
    <div className="cv-container">

      <div className="cv-left">
        <LeftSideProfile />
      </div>

      <div className="cv-main">
        <h2>CV</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline-section research-interest-section">
          <h3>Research Interest</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Machine Learning</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Deep Learning</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Generative Models</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Medical Imaging</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Neuroimaging</p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline-section">
          <h3>Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <p><strong>Chungnam National University (CNU)</strong> - Daejeon, South Korea</p>
                <p>2019. 3. ~ Present</p>
                <p>Bachelor’s degree</p>
                <p>The Division of Computer Convergence</p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline-section">
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>NanoCellect Biomedical</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>San Diego, California, United States</p>
                <p><strong>Machine Learning Engineer Intern</strong>, Apr. 2024 - Feb. 2025</p>
                <p>Research Focus: Cell Image Analysis, Cell Classification</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Seoul National University of Science and Technology (SEOULTECH)</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>Seoul, South Korea</p>
                <p><strong>Research Assistance</strong>, Dec. 2023 - Aug. 2024</p>
                <p>Research Focus: Computer Vision, Medical Imaging, Probabilistic Generative Modeling (CT, MRI)</p>
                <p>Under the supervision of Prof. <a href="https://scholar.google.com/citations?user=MeNWZXQAAAAJ" target="_blank" rel="noopener noreferrer" className="advisor-link">KH Choi</a></p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Korea Institute of Science and Technology (KIST)</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>Seoul, South Korea</p>
                <p><strong>Research Intern</strong>, Jun. 2023 - Dec. 2023</p>
                <p>Research Focus: Computer Vision, Medical Imaging, 3D Segmentation(CT), 3D Classification(MRI)</p>
                <p>Under the supervision of Dr. <a href="https://scholar.google.com/citations?user=MeNWZXQAAAAJ" target="_blank" rel="noopener noreferrer" className="advisor-link">KH Choi</a></p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Institute for Basic Science (IBS)</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>Daejeon, South Korea</p>
                <p><strong>Research Assistance</strong>, Feb. 2023 - Jun. 2023</p>
                <p>Research Focus: Cognitive Neuroscience, Predictive Coding Theory, Predictive Coding Network</p>
                <p>Under the supervision of Dr. <a href="https://scholar.google.com/citations?user=DSkjj-4AAAAJ" target="_blank" rel="noopener noreferrer" className="advisor-link">YJ Kim</a></p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Institute for Basic Science (IBS)</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>Daejeon, South Korea</p>
                <p><strong>Research Assistance</strong>, Feb. 2023 - Jun. 2023</p>
                <p>Research Focus: Cognitive Neuroscience, EEG experiment</p>
                <p>Under the supervision of Dr. <a href="https://scholar.google.com/citations?user=DSkjj-4AAAAJ" target="_blank" rel="noopener noreferrer" className="advisor-link">YJ Kim</a></p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline-section">
          <h3>Publications</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Bi-directional Diffusion Model-Driven Medical Image Translation</h4>
                <p><strong>Han Jang et al.</strong>, <em>Expert Systems With Applications</em> 2025</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans</h4>
                <p>
                  <strong>Han Jang</strong>, J.H. Kwon, K.H. Choi*, <em>Korea Computer Congress</em> 2025 (pp. 2048-2050), Jeju ICC |{' '}
                  <a className="advisor-link" href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862432" target="_blank" rel="noopener noreferrer">
                    Paper
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline-section">
          <h3>Skills</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Programming Language Proficiency</h4>
                <p>Python, MATLAB, C++, C, Java</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Libraries and Frameworks</h4>
                <p>
                  PyTorch, PyTorch Lightning, W&amp;B, TensorFlow, scikit-learn, Git, GitHub,
                  Docker, OpenCV, PsychoPy, Simulink, Keras
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Support Programs (Medical Imaging)</h4>
                <p>
                  3D Slicer, ImageJ (FIJI), ITK-SNAP, RadiAnt DICOM Viewer,
                  MIPAV, Elastix, SimpleITK
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Experimental Equipment (Neuroscience)</h4>
                <p>Brain Product: EEG, Tobii TX300 Eye Tracker</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Online Work Stationary Friendly</h4>
                <p>Jira, Bitbucket, Microsoft Teams, Outlook, Notion, Overleaf, Slack</p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline-section">
          <h3>Honors & Awards</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Encouragement Award, Engineering Fair 2024 (CNU, Aug. 2024)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Encouragement Award, SW/AI Creative Contest in AI Project (CNU, Jun. 2024)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Encouragement Award, SW/AI Creative Contest, Coding Test (CNU, Jun. 2023)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Encouragement Award, SW/AI Creative Contest, Coding Test (CNU, Apr. 2022)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Bronze Award, Creative Software Contest (CNU, Oct. 2019)</p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline-section">
          <h3>Licenses & Certifications</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <p><strong>Fundamental Neuroscience for Neuroimaging</strong> - Prof. Arnold Bakker (Johns Hopkins), Dec. 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p><strong>Machine Learning</strong> - Prof. Andrew Ng (Stanford), Dec. 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p><strong>Unsupervised Learning, Recommenders, Reinforcement Learning</strong> - Prof. Andrew Ng (Stanford), Dec. 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p><strong>Advanced Learning Algorithm</strong> - Prof. Andrew Ng (Stanford), Oct. 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p><strong>Supervised Machine Learning: Regression and Classification</strong> - Prof. Andrew Ng (Stanford), Jul. 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p><strong>SQLD</strong> (Korea Data Industry Promotion Agency), Jun. 2023 ~ Expires Jun. 2033</p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline-section">
          <h3>Languages</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <p>English (Professional working proficiency)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>Korean (Native Fluency)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <p>French (Elementary proficiency)</p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />
      </div>

      <div style={{ flex: 1 }} />
    </div>
  );
}

export default CV;
