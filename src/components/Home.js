import React, { useState } from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';
import Lightbox from './Lightbox';

import SnuMark from './Affiliation/snu.png';
import MpibThumb from './selected/mpib_overview.png';
import MedLayBenchThumb from './selected/medlaybench_v.png';
import CyclicThumb from './selected/cyclic_diffusion.png';

const SECTION_RULE = {
  width: '100%',
  marginLeft: '0',
  marginRight: 'auto',
  marginTop: '1em',
  marginBottom: '1em',
  borderColor: '#e0e0e0',
  opacity: '0.15',
  display: 'block'
};

const SELECTED_PAPERS = [
  {
    thumb: MpibThumb,
    title: 'MPIB: A Benchmark for Medical Prompt Injection Attacks and Clinical Safety in LLMs',
    paper: 'https://arxiv.org/abs/2602.06268',
    authors: (
      <>
        J. Lee, <strong>Han Jang</strong>, K. S. Choi
      </>
    ),
    venue: (
      <a href="https://2026.emnlp.org/" target="_blank" rel="noopener noreferrer" className="advisor-link">
        Findings of EMNLP 2026
      </a>
    ),
    venueSuffix: <>, Budapest, Hungary</>,
    tldr: 'Poisoned retrieval context can flip a clinical LLM from safe advice to harmful advice, and MPIB measures how far it bends.'
  },
  {
    thumb: MedLayBenchThumb,
    title: 'MedLayBench-V: A Large-Scale Benchmark for Expert-Lay Semantic Alignment in Medical Vision Language Models',
    paper: 'https://aclanthology.org/2026.findings-acl.914/',
    authors: (
      <>
        <strong>Han Jang</strong>, J. Lee, H. Eum, K. S. Choi
      </>
    ),
    venue: (
      <a href="https://2026.aclweb.org/" target="_blank" rel="noopener noreferrer" className="advisor-link">
        Findings of ACL 2026
      </a>
    ),
    venueSuffix: <>, San Diego, USA</>,
    tldr: 'Can medical VLMs move between expert and lay explanation without losing clinical meaning? A large-scale benchmark says how well.'
  },
  {
    thumb: CyclicThumb,
    title: 'Cyclic Conditional Diffusion Models for CT-to-MR Synthetic Image Segmentation with Misaligned Image Pairs',
    paper: 'https://www.sciencedirect.com/science/article/pii/S0957417425042460',
    authors: (
      <>
        <strong>Han Jang</strong>, N. Han, J. Kwon, H. Seo, B. J. Park, K. S. Choi
      </>
    ),
    venue: (
      <a
        href="https://www.sciencedirect.com/journal/expert-systems-with-applications"
        target="_blank"
        rel="noopener noreferrer"
        className="advisor-link"
      >
        Expert Systems with Applications, 2026
      </a>
    ),
    venueSuffix: <> (<strong>IF=9.4</strong>, JCR Top 5.8%)</>,
    tldr: 'Synthesizes MR from CT and segments it without ever needing pixel-aligned CT-MR training pairs.'
  }
];

const RESEARCH_THEMES = [
  {
    name: 'Trustworthy Clinical LLMs',
    desc: 'prompt injection, adversarial robustness, clinical safety evaluation'
  },
  {
    name: 'Medical Vision-Language Modeling',
    desc: 'expert-lay semantic alignment, multimodal benchmarking, visual reasoning'
  },
  {
    name: 'Generative Medical Imaging',
    desc: 'cross-modality synthesis, segmentation under misaligned image pairs'
  }
];

function Home() {
  const [zoomed, setZoomed] = useState(null);

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
          {" "}<em>Medical Image Analysis</em>, <em>Generative Models</em>, and{" "}
          <em>the reliability of large multimodal models</em>.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          My research aims to make tangible contributions to humanity. As a graduate student, I am
          committed to deeper academic exploration and to contributing to academia through sustained
          research.
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
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>Current Education</h3>

        <hr style={SECTION_RULE} />

        <div className="edu-row">
          <img className="edu-mark" src={SnuMark} alt="Seoul National University" />
          <p style={{ margin: 0, lineHeight: '1.6' }}>
            <strong>MS-PhD Student</strong>,{" "}
            <a
              href="https://bioeng.snu.ac.kr/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              Interdisciplinary Program for Bioengineering
            </a>
            ,{" "}
            <a
              href="https://en.snu.ac.kr/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-link"
            >
              Seoul National University
            </a>
            {" "}(<strong>SNU</strong>), Seoul, South Korea
          </p>
        </div>

        <br></br>
        <br></br>
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>Selected Papers</h3>

        <hr style={SECTION_RULE} />

        {SELECTED_PAPERS.map((paper) => (
          <div className="card-base selected-card" key={paper.title}>
            <button
              type="button"
              className="selected-thumb"
              onClick={() => setZoomed({ src: paper.thumb, alt: paper.title })}
              aria-label={`Enlarge figure: ${paper.title}`}
            >
              <img src={paper.thumb} alt={paper.title} loading="lazy" />
            </button>
            <div className="selected-body">
              <h4 style={{ margin: '0 0 0.4em', fontSize: '1.05em', lineHeight: '1.4' }}>
                <a
                  href={paper.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="selected-title-link"
                >
                  {paper.title}
                </a>
              </h4>
              <p style={{ margin: 0, fontSize: '0.9em' }}>
                {paper.authors}, <i>{paper.venue}</i>{paper.venueSuffix}
              </p>
              <p style={{ margin: '0.6em 0 0.8em', fontSize: '0.88em', lineHeight: '1.55', color: '#444' }}>
                <strong>TL;DR</strong>&nbsp;&nbsp;{paper.tldr}
              </p>
              <div>
                <a href={paper.paper} target="_blank" rel="noopener noreferrer" className="code-link">
                  Paper
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Research Themes - temporarily hidden.
        <br></br>
        <br></br>
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>Research Themes</h3>

        <hr style={SECTION_RULE} />

        {RESEARCH_THEMES.map((theme) => (
          <p key={theme.name} style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            <strong>{theme.name}</strong> - {theme.desc}
          </p>
        ))}

        */}

        {/* News - temporarily hidden; Selected Papers carries the highlights for now.
        <br />
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>News</h3>
        <hr style={SECTION_RULE} />

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          [Apr. 2026] Published MedLayBench-V in Findings of ACL 2026 (Poster Presentation).
        </p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          [Dec. 2025] Published Cyclic Conditional Diffusion Models in Expert Systems with Applications.
        </p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          [Oct. 2025] Presented at ICMRI 2025 and received the Best Trainee Scientific Award (Silver Prize).
        </p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          [Sep. 2025] Presented at the MICCAI 2025 CLIP Workshop in Daejeon, South Korea.
        </p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          [Feb. 2025] Completed a Machine Learning Engineer role at NanoCellect Biomedical, Inc.
        </p>
        */}

        <br></br>
        <br></br>
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>Academic Services</h3>

        <hr style={SECTION_RULE} />

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

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <strong>Reviewer</strong>,{" "}
          <a
            href="https://bmjdigitalhealth.bmj.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            BMJ Digital Health &amp; AI
          </a>
          {" "}(<strong>2026</strong>)
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <strong>Reviewer</strong>,{" "}
          <a
            href="https://www.frontiersin.org/journals/physics"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            Frontiers in Physics
          </a>
          {" "}(<strong>2026</strong>)
        </p>
      </div>
      <div className="home-right" />

      {zoomed && (
        <Lightbox src={zoomed.src} alt={zoomed.alt} onClose={() => setZoomed(null)} />
      )}
    </div>
  );
}

export default Home;
