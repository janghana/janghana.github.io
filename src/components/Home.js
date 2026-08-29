import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

import MpibThumb from './selected/mpib.svg';
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
    authors: (
      <>
        J. Lee<sup>*</sup>, <strong>Han Jang</strong><sup>*</sup>, K. S. Choi
      </>
    ),
    venue: (
      <a href="https://2026.emnlp.org/" target="_blank" rel="noopener noreferrer" className="advisor-link">
        Findings of EMNLP 2026
      </a>
    ),
    note: '* Equal contribution (co-first author)',
    blurb:
      'A benchmark that stress-tests clinical LLMs against prompt injection embedded in medical context, and measures how those attacks translate into unsafe clinical guidance.',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2602.06268' }]
  },
  {
    thumb: MedLayBenchThumb,
    title: 'MedLayBench-V: A Large-Scale Benchmark for Expert-Lay Semantic Alignment in Medical Vision Language Models',
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
    blurb:
      'A large-scale benchmark measuring whether medical vision-language models can move between expert radiological description and lay-accessible explanation without losing clinical meaning.',
    links: [
      { label: 'ACL Anthology', href: 'https://aclanthology.org/2026.findings-acl.914/' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2604.05738' },
      { label: 'Project Page', href: 'https://janghana.github.io/MedLayBench-V/' },
      { label: 'Github', href: 'https://github.com/janghana/MedLayBench-V' }
    ]
  },
  {
    thumb: CyclicThumb,
    title: 'Cyclic Conditional Diffusion Models for CT-to-MR Synthetic Image Segmentation with Misaligned Image Pairs',
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
    blurb:
      'A cyclic conditional diffusion framework that synthesizes MR from CT and segments it without requiring pixel-aligned CT-MR training pairs, making MR-less synthetic segmentation practical on real clinical data.',
    links: [
      { label: 'Paper', href: 'https://www.sciencedirect.com/science/article/pii/S0957417425042460' },
      { label: 'Github', href: 'https://github.com/janghana/C3DMAAL-official' }
    ]
  }
];

function Home() {
  return (
    <div className="home-container">

      <div className="home-left">
        <LeftSideProfile />
      </div>

      <div className="home-main">
        <h2>About me</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <p style={{ marginBottom: '1rem', lineHeight: '1.6', marginTop: '1.5rem' }}>
          I am <strong>Han Jang</strong>, an <strong>MS-PhD student</strong> in the{" "}
          <a
            href="https://bioeng.snu.ac.kr/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            <i>Interdisciplinary Program for Bioengineering</i>
          </a>
          {" "}at{" "}
          <a
            href="https://en.snu.ac.kr/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            <i>Seoul National University</i>
          </a>
          {" "}(SNU), working at{" "}
          <a
            href="https://sites.google.com/view/snuhradaicon"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            AICON Lab
          </a>
          {" "}under Prof.{" "}
          <a
            href="https://scholar.google.co.kr/citations?hl=ko&user=XYh6Z0gAAAAJ&view_op=list_works&sortby=pubdate"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
          >
            Kyu Sung Choi
          </a>
          .
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          My research sits at the intersection of <em>medical image analysis</em>,{" "}
          <em>generative models</em>, and <em>the reliability of clinical language and
          vision-language models</em> — building systems that are not just accurate on a
          benchmark, but trustworthy enough to stand next to a clinician.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Three threads run through my work: synthesizing and segmenting medical images when
          paired data is imperfect, benchmarking how medical vision-language models communicate
          across expert and lay audiences, and probing where clinical LLMs break under adversarial
          pressure.
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#333' }}>
          I am always open to discussions on interesting ideas and collaborations — reach me at{" "}
          <a href="mailto:hanjang@snu.ac.kr" className="advisor-link">
            hanjang[at]snu[dot]ac[dot]kr
          </a>
          .
        </p>

        <p style={{ marginBottom: '0.5rem', lineHeight: '1.6', fontSize: '0.92em', color: '#555' }}>
          More detail:{" "}
          <Link to="/publications" className="advisor-link">Publications</Link>
          {" · "}
          <Link to="/Experience" className="advisor-link">Experiences</Link>
          {" · "}
          <Link to="/CV" className="advisor-link">CV</Link>
        </p>

        <br />
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>Education</h3>

        <hr style={SECTION_RULE} />

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <strong>M.S.–Ph.D. Integrated Program</strong>, Interdisciplinary Program for
          Bioengineering,{" "}
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

        <br />
        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>Selected Papers</h3>

        <hr style={SECTION_RULE} />

        {SELECTED_PAPERS.map((paper) => (
          <div className="card-base selected-card" key={paper.title}>
            <img className="selected-thumb" src={paper.thumb} alt="" loading="lazy" />
            <div className="selected-body">
              <h4 style={{ margin: '0 0 0.4em', fontSize: '1.05em', lineHeight: '1.4' }}>
                {paper.title}
              </h4>
              <p style={{ margin: 0, fontSize: '0.9em' }}>
                {paper.authors}, <i>{paper.venue}</i>{paper.venueSuffix}
              </p>
              {paper.note && (
                <p style={{ margin: '0.3em 0 0', fontSize: '0.78em', color: '#6b7280' }}>
                  {paper.note}
                </p>
              )}
              <p style={{ margin: '0.6em 0 0.8em', fontSize: '0.88em', lineHeight: '1.55', color: '#444' }}>
                {paper.blurb}
              </p>
              <div>
                {paper.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="code-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

        <p style={{ marginTop: '1.2em', fontSize: '0.92em', color: '#555' }}>
          <Link to="/publications" className="advisor-link">See all publications →</Link>
        </p>

        {/* News — temporarily hidden; Selected Papers carries the highlights for now.
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

        <br />
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
    </div>
  );
}

export default Home;
