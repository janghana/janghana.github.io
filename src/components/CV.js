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

        <div className="timeline-section">
          <h3>Education</h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <p><strong>Chungnam National University (CNU)</strong> - Daejeon, South Korea</p>
                <p>2019. 3. ~ Present</p>
                <p>Bachelor’s degree</p>
                <p>The Division of Computer Convergence, College of Engineering</p>
              </div>
            </div>
          </div>


        </div>

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

        <div className="timeline-section">
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Seoul National University</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>Seoul, South Korea</p>
                <p><strong>Research Assistant</strong>, Mar. 2025 - Present</p>
                <p>
                  Research Focus: Machine Learning, Deep Learning, Medical Imaging(Brain Perfusion MR), Neuroimaging
                </p>
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
                  {" | "}
                  <a
                    href="https://sites.google.com/view/snuhradaicon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="advisor-link"
                  >
                    AICON LAB
                  </a>
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>NanoCellect Biomedical, Inc.</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>San Diego, California, United States</p>
                <p><strong>Machine Learning Engineer Intern</strong>, Apr. 2024 - Feb. 2025</p>
                <p>
                  Research Focus: Machine Learning, Deep Learning, Medical Imaging(Cytology), Cell Image Analysis, Cell Sorting, Cell Gating
                  <br />
                  (Specifically Human white blood, Leukemia, Trophoblast, Human Embryonic Kidney 293 cells)
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Seoul National University of Science and Technology (SEOULTECH)</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>Seoul, South Korea</p>
                <p><strong>Research Assistance</strong>, Dec. 2023 - Aug. 2024</p>
                <p>Research Focus: Deep Learning, Medical Imaging(Abdominal CT/MR/MRCP), Generative Models</p>
                <p>Under the supervision of Prof. <a href="https://scholar.google.com/citations?user=MeNWZXQAAAAJ" target="_blank" rel="noopener noreferrer" className="advisor-link">KH Choi</a></p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Korea Institute of Science and Technology (KIST)</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>Seoul, South Korea</p>
                <p><strong>Research Intern</strong>, Jun. 2023 - Dec. 2023</p>
                <p>Research Focus: Deep Learning, Medical Imaging(Abdominal CT/MR/MRCP), 3D Segmentation(Abdominal CT), 3D Classification(Breast MRI)</p>
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
                <p><strong>Research Assistance</strong>, Apr. 2022 - Sep. 2022</p>
                <p>Research Focus: Cognitive Neuroscience, EEG experiment</p>
                <p>Under the supervision of Dr. <a href="https://scholar.google.com/citations?user=DSkjj-4AAAAJ" target="_blank" rel="noopener noreferrer" className="advisor-link">YJ Kim</a></p>
              </div>
            </div>
          </div>
        </div>

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

        <div className="timeline-section">
          <h3>Publications</h3>
          <div className="timeline">
            <div className="timeline-item">
              <br></br>

              <div className="timeline-content">
                <div style={{ marginBottom: '1.5em' }}>
                  <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
                    Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.9em' }}>
                    <strong>Han Jang<sup>1</sup></strong>, J.H. Kwon, K.H. Choi<sup>*</sup>, 
                    {" "}
                    <i><a
                      href="http://m.kiise.or.kr/academyEng/main/getContent.faEng?content_no=1&MENU_ID=010100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-link"
                    >
                      Korea Computer Congress
                    </a>
                    
                    {" "} 2024 </i> (pp. 2048-2050),{" "}
                    <a
                      href="https://www.kiise.or.kr/conference/kcc/2024/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-link"
                    >
                      Jeju ICC
                    </a>
                    {" "}
                    [<a
                      href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862432"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-link"
                    >
                      Paper
                    </a>]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>

      <div style={{ flex: 1 }} />
    </div>
  );
}

export default CV;
