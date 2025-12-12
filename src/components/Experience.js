import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

import snu from './Affiliation/snu.png';
import nanocellect from './Affiliation/nanocellect.png';
import seoultech from './Affiliation/seoultech.png';
import kist from './Affiliation/kist.png';
import ibs from './Affiliation/ibs.png';
import navy from './Affiliation/navy.png';
import cnu from './Affiliation/cnu.png';

function Experience() {
  return (
    <div className="exp-container">
      <div className="exp-left">
        <LeftSideProfile />
      </div>

      <div className="exp-main">
        <h2>Experience</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <div className="timeline">

          {/* SNUH */}
          <div className="timeline-item">
            <div className="card-base exp-card exp-flex-item">
              <div className="exp-description">
                <h3>
                <a
                  href="http://www.snuh.org/global/en/main.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                  style={{ color: '#00AAFF' }}
                >
                  Seoul National University Hospital (SNUH)
                </a>
                </h3>
                <p><i>Department of Radiology</i></p>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
                </p>
                <p><strong>Research Assistant</strong> (On-site), Mar. 2025 - Present</p>
                <p>Research Focus: Machine Learning, Multi-modal, Segmentation, Medical Imaging(MR Perfusion, MR, Ultrasound), Neuroimaging</p>
                <p>Advanced Imaging and Computational Neuroimaging Laboratory, {" "}
                  <a
                    href="https://sites.google.com/view/snuhradaicon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="advisor-link"
                  >
                    AICON LAB
                  </a>
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
                </p>
              </div>
              <div className="exp-logo">
                <img
                  src={snu}
                  alt="SNU Logo"
                  className="exp-logo-img"
                />
              </div>
            </div>
          </div>

          {/* NanoCellect Biomedical */}
          <div className="timeline-item">
            <div className="card-base exp-card exp-flex-item">
              <div className="exp-description">
                <h3>
                <a
                  href="https://nanocellect.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                  // style={{ color: '#00AAFF' }}
                >
                  NanoCellect Biomedical, Inc.
                </a>
                </h3>
                <p><i>R&D Team</i></p>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  San Diego, California, United States
                </p>
                <p><strong>Machine Learning Engineer</strong> (Remote & On-site), Apr. 2024 - Feb. 2025</p>
                <p>
                  Research Focus: Machine Learning, Deep Learning, Medical Imaging(Cytology), Cell Image Analysis, Cell Sorting, Cell Gating
                  <br />
                  (Specifically Human white blood, Leukemia, Trophoblast, Human Embryonic Kidney 293 cells)
                </p>
                <p>
                  Product: &nbsp;
                  <strong>
                    <a
                      href="https://nanocellect.com/verlo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-link"
                      style={{ color: 'green' }}
                    >
                      VERLO™ Image-Guided Cell Sorter
                    </a>
                  </strong>
                </p>
                <p>
                  Collaborative Research with&nbsp;
                    <a
                      href="https://ucsd.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-link"
                    >
                      Lo LAB, University of California San Diego(UCSD)
                    </a>
                </p>
              </div>
              <div className="exp-logo">
                <img
                  src={nanocellect}
                  alt="NanoCellect Logo"
                  className="exp-logo-img"
                />
              </div>
            </div>
          </div>

          {/* SEOULTECH */}
          <div className="timeline-item">
            <div className="card-base exp-card exp-flex-item">
              <div className="exp-description">
                <h3>
                <a
                  href="https://en.seoultech.ac.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                >
                  Seoul National University of Science and Technology (SEOULTECH)
                </a>
                </h3>
                <p><i>Department of Applied Artificial Intelligence</i></p>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
                </p>
                <p><strong>Research Assistant</strong> (Hybrid), Dec. 2023 - Aug. 2024</p>
                <p>Research Focus: Deep Learning, Medical Imaging(CT/MR/MRCP), Generative Models</p>
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
                <p>
                  Collaborative Research with&nbsp;
                    <a
                      href="https://www.kist.re.kr/eng/index.do"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-link"
                    >
                      KIST
                    </a>
                    {" & "}
                    <a
                      href="https://anam.kumc.or.kr/en/index.do"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-link"
                    >
                      KUMC
                    </a>
                </p>
              </div>
              <div className="exp-logo">
                <img
                  src={seoultech}
                  alt="SEOULTECH Logo"
                  className="exp-logo-img"
                />
              </div>
            </div>
          </div>

          {/* KIST */}
          <div className="timeline-item">
            <div className="card-base exp-card exp-flex-item">
              <div className="exp-description">
                <h3>
                <a
                  href="https://www.kist.re.kr/eng/index.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                >
                  Korea Institute of Science and Technology (KIST)
                </a>
                </h3>
                <p><i>Bionics Research Center</i></p>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
                </p>
                <p><strong>Research Intern</strong> (On-site), Jun. 2023 - Dec. 2023</p>
                <p>Research Focus: Deep Learning, Medical Imaging(CT/MR/MRCP), 3D Segmentation, 3D Classification</p>
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
                <p>
                  Collaborative Research with&nbsp;
                    <a
                      href="https://anam.kumc.or.kr/en/index.do"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-link"
                    >
                      KUMC
                    </a>
                </p>

              </div>
              <div className="exp-logo">
                <img
                  src={kist}
                  alt="KIST Logo"
                  className="exp-logo-img"
                />
              </div>
            </div>
          </div>

          {/* IBS 1 */}
          <div className="timeline-item">
            <div className="card-base exp-card exp-flex-item">
              <div className="exp-description">
                <h3>
                <a
                  href="https://www.ibs.re.kr/eng.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                >
                  Institute for Basic Science (IBS)
                </a>
                </h3>
                <p><i>Center for Cognition and Sociality</i></p>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Daejeon, South Korea
                </p>
                <p><strong>Research Assistant</strong> (On-site), Feb. 2023 - Jun. 2023</p>
                <p>Research Focus: Machine Learning, Cognitive Neuroscience, Predictive Coding, Predictive Coding Network</p>
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
              <div className="exp-logo">
                <img
                  src={ibs}
                  alt="IBS Logo"
                  className="exp-logo-img"
                />
              </div>
            </div>
          </div>

          {/* IBS 2 */}
          <div className="timeline-item">
            <div className="card-base exp-card exp-flex-item">
              <div className="exp-description">
                <h3>
                <a
                  href="https://www.ibs.re.kr/eng.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                >
                  Institute for Basic Science (IBS)
                </a>
                </h3>
                <p><i>Center for Cognition and Sociality</i></p>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Daejeon, South Korea
                </p>
                <p><strong>Research Assistant</strong> (On-site), Apr. 2022 - Sep. 2022</p>
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
              <div className="exp-logo">
                <img
                  src={ibs}
                  alt="IBS Logo"
                  className="exp-logo-img"
                />
              </div>
            </div>
          </div>
        </div>


        <h2>Education</h2>
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

          {/* SNU */}
          <div className="timeline-item">
            <div className="card-base exp-card exp-flex-item">
              <div className="exp-description">
                <h3>
                <a
                  href="https://en.snu.ac.kr/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                  // style={{ color: '#00AAFF' }}
                >
                  Seoul National University (SNU)
                </a>
                </h3>
                <p><i>Interdisciplinary Program for Bioengineering</i></p>
                <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Seoul, South Korea
                </p>
                <p><strong>Research Assistant</strong> (On-site), Mar. 2026 - Present</p>
                <p>Research Focus: Multi-modal Reasoning Segmentation w/ LLM, Medical Image Analysis</p>
                <p>Interdisciplinary Program for Bioengineering, Graduate School of SNU, MS-PhD Student</p>
                <p>Advanced Imaging and Computational Neuroimaging Laboratory, {" "}
                  <a
                    href="https://sites.google.com/view/snuhradaicon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="advisor-link"
                  >
                    AICON LAB
                  </a>
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
                </p>
              </div>
              <div className="exp-logo">
                <img
                  src={snu}
                  alt="SNU Logo"
                  className="exp-logo-img"
                />
              </div>
            </div>
          </div>

        {/* CNU */}
        <div className="timeline-item">
          <div className="card-base exp-card exp-flex-item">
            <div className="exp-description">
              <h3>
                <a
                  href="https://plus.cnu.ac.kr/html/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                >
                  Chungnam National University (CNU)
                </a>
              </h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Daejeon, South Korea
              </p>
              <p><strong>Bachelor’s degree</strong>, Mar. 2019 - Aug. 2025</p>
              <p>
                The Division of Computer Convergence, College of Engineering
              </p>
            </div>
            <div className="exp-logo">
              <img
                src={cnu}
                alt="CNU Logo"
                className="exp-logo-img"
              />
            </div>
          </div>
        </div>


        <h2>Extracurricular activities</h2>
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

        {/* CNU */}
        <div className="timeline-item">
          <div className="card-base exp-card exp-flex-item">
            <div className="exp-description">
              <h3>
                <a
                  href="https://plus.cnu.ac.kr/html/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                >
                  Chungnam National University (CNU)
                </a>
              </h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Daejeon, South Korea
              </p>
              <p><strong>Artificial Intelligence Coding Tutor (Programming Tutor)</strong>, Mar. 2024 - Jun. 2024</p>
              <p>The course introduces AI to humanities and social sciences students with no prior experience, featuring basic lectures and practical assignments. It aims to understand the human mind and brain through AI, exploring AI-inspired neuroscience, which uses AI to gain insights into brain functions, and neuroscience-inspired AI, which applies brain principles to enhance AI systems.</p>
              <p>
                Subjects name : Artificial Intelligence Convergence Basic
              </p>
            </div>
            <div className="exp-logo">
              <img
                src={cnu}
                alt="CNU Logo"
                className="exp-logo-img"
              />
            </div>
          </div>
        </div>

        <h2>Military & Student Representative</h2>
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

        {/* ROK Navy */}
        <div className="timeline-item">
          <div className="card-base exp-card exp-flex-item">
            <div className="exp-description">
              <h3>
                <a
                  href="https://www.navy.mil.kr/mbshome/mbs/eng/index.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                >
                  Republic of Korea Navy
                </a>
              </h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  South Korea
              </p>
              <strong>Military Service - Republic of Korea Navy, Class 664</strong>, Feb. 2020 - Oct. 2021 
              <p>Honorably Discharged as a Sergeant upon Completion of Full Service Term</p>
            </div>
            <div className="exp-logo">
              <img
                src={navy}
                alt="ROK Navy Logo"
                className="exp-logo-img"
              />
            </div>
          </div>
        </div>

        {/* CNU */}
        <div className="timeline-item">
          <div className="card-base exp-card exp-flex-item">
            <div className="exp-description">
              <h3>
                <a
                  href="https://plus.cnu.ac.kr/html/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-link"
                >
                  Chungnam National University (CNU)
                </a>
              </h3>
              <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic', color: '#555' }}>
                  Daejeon, South Korea
              </p>
              <p>
                <strong>Class of 2019 Student Representative</strong>, Mar. 2019 - Dec. 2019
                <br />
              </p>
              <p>The Division of Computer Convergence, College of Engineering</p>
            </div>
            <div className="exp-logo">
              <img
                src={cnu}
                alt="CNU Logo"
                className="exp-logo-img"
              />
            </div>
          </div>
        </div>

        <br />
      </div>

      <div className="exp-right" />
    </div>
  );
}

export default Experience;
