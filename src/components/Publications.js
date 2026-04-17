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

        <h3 style={{ margin: '1.5em 0 0.5em', fontSize: '1.2em' }}>2026</h3>

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

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            MedLayBench-V: A Large-Scale Benchmark for Expert-Lay Semantic Alignment in Medical Vision Language Models
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>Han Jang</strong>, J. Lee, H. Eum, K. S. Choi,
            {" "}
            <i><a href="https://2026.aclweb.org/" target="_blank" rel="noopener noreferrer" className="advisor-link">Findings of ACL 2026</a></i>
            {" "}<strong style={{ color: '#c0392b' }}>(Oral Presentation)</strong>, San Diego, USA
          </p>
          <p></p>
          <a href="https://arxiv.org/abs/2604.05738" target="_blank" rel="noopener noreferrer" className="code-link">arXiv</a>
          <a href="https://janghana.github.io/MedLayBench-V/" target="_blank" rel="noopener noreferrer" className="code-link">Project Page</a>
          <a href="https://github.com/janghana/MedLayBench-V" target="_blank" rel="noopener noreferrer" className="code-link">Github</a>
          <a href="https://huggingface.co/datasets/hanjang/MedLayBench-V" target="_blank" rel="noopener noreferrer" className="code-link">HuggingFace</a>
        </div>

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            SciZoom: A Large-scale Benchmark for Hierarchical Scientific Summarization across the LLM Era
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>Han Jang</strong>, J. Lee, K. S. Choi,
            {" "}
            <i>arXiv preprint</i>, 2026.
          </p>
          <p></p>
          <a href="https://arxiv.org/abs/2603.16131" target="_blank" rel="noopener noreferrer" className="code-link">arXiv</a>
        </div>

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            Segmentation-before-Staining Improves Structural Fidelity in Virtual IHC-to-Multiplex IF Translation
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            J. Lee, <strong>Han Jang</strong>, H. Eum, J. Jang, K. S. Choi,
            {" "}
            <i>arXiv preprint</i>, 2026.
          </p>
          <p></p>
          <a href="https://arxiv.org/abs/2603.16160" target="_blank" rel="noopener noreferrer" className="code-link">arXiv</a>
        </div>

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            Evidential Perfusion Physics-Informed Neural Networks with Residual Uncertainty Quantification
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            J. Lee, M. Choi, <strong>Han Jang</strong>, Y. H. Jeon, H. Eum, J. Jang, C. Sohn, K. S. Choi,
            {" "}
            <i>arXiv preprint</i>, 2026.
          </p>
          <p></p>
          <a href="https://arxiv.org/abs/2603.09359" target="_blank" rel="noopener noreferrer" className="code-link">arXiv</a>
        </div>

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            MPIB: A Benchmark for Medical Prompt Injection Attacks and Clinical Safety in LLMs
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            J. Lee, <strong>Han Jang</strong>, K. S. Choi,
            {" "}
            <i>arXiv preprint</i>, 2026.
          </p>
          <p></p>
          <a href="https://arxiv.org/abs/2602.06268" target="_blank" rel="noopener noreferrer" className="code-link">arXiv</a>
        </div>


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

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            GlioSurv: interpretable transformer for multimodal, individualized survival prediction in diffuse glioma
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            J. Lee, J. Jang, H. Eum, <strong>Han Jang</strong>, M. Kim, S. H. Park, C. K. Park, S. H. Choi, S. S. Ahn, Y. Han, K. S. Choi,
            {" "}
            <i><a href="https://www.nature.com/npjdigitalmed/" target="_blank" rel="noopener noreferrer" className="advisor-link">npj Digital Medicine</a></i>
            {" "}8(1), 660, 2025.
          </p>
          <p></p>
          <a href="https://www.nature.com/articles/s41746-025-02018-x" target="_blank" rel="noopener noreferrer" className="code-link">Paper</a>
          <a href="https://github.com/snuh-rad-aicon/GlioSurv" target="_blank" rel="noopener noreferrer" className="code-link">Github</a>
        </div>

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            Cyclic Conditional Diffusion Models for CT-to-MR Synthetic Image Segmentation with Misaligned Image Pairs
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>Han Jang</strong>, N. Han, J. Kwon, H. Seo, B. J. Park, K. Choi,
            {" "}
            <i><a href="https://www.sciencedirect.com/journal/expert-systems-with-applications" target="_blank" rel="noopener noreferrer" className="advisor-link">Expert Systems with Applications, 2025</a></i>
            {" "}(IF=7.5, JCR Top 6.1%), Vol. 304, 130631, Apr. 2026.
          </p>
          <p></p>
          <a href="https://www.sciencedirect.com/science/article/pii/S0957417425042460" target="_blank" rel="noopener noreferrer" className="code-link">Paper</a>
          <a href="https://github.com/janghana/C3DMAAL-official" target="_blank" rel="noopener noreferrer" className="code-link">Github</a>
        </div>

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            Domain-Specialized Interactive Segmentation Framework for Meningioma Radiotherapy Planning
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            J. Lee, <strong>Han Jang</strong>, K. S. Choi,
            {" "}
            <i><a href="https://conferences.miccai.org/2025/en/" target="_blank" rel="noopener noreferrer" className="advisor-link">MICCAI, 2025</a></i>
            {" "}(pp. 32-41), CLIP workshop, Daejeon Convention Center, South Korea
          </p>
          <p></p>
          <a href="https://link.springer.com/chapter/10.1007/978-3-032-05479-1_4" target="_blank" rel="noopener noreferrer" className="code-link">Paper</a>
          <a href="https://janghana.github.io/Interactive_MEN_RT/" target="_blank" rel="noopener noreferrer" className="code-link">Project Page</a>
          <a href="https://arxiv.org/abs/2510.00416" target="_blank" rel="noopener noreferrer" className="code-link">arXiv</a>
          <a href="https://github.com/snuh-rad-aicon/Interactive-MEN-RT" target="_blank" rel="noopener noreferrer" className="code-link">Github</a>
        </div>

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            Graph Deep Learning for Triple-Negative Breast Cancer Prediction Using Dynamic Contrast Enhanced MRI
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>Han Jang</strong>, J. Lee, K. S. Choi,
            {" "}
            <i><a href="https://icmri.ksmrm.org/2025m/" target="_blank" rel="noopener noreferrer" className="advisor-link">ICMRI 2025</a></i>
            {" "}Grand Walkerhill Seoul, South Korea
          </p>
          <p></p>
          <a href="https://drive.google.com/file/d/1gfXy22iOdNhNALBTo6k9rpiBjEsy-X6T/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="code-link">Poster</a>
          {" "}
          <a href="https://drive.google.com/file/d/1puwCCurH7XDfHEM-_a25z5MN8IBUE_it/view?usp=sharing" target="_blank" style={{ color: 'darkgoldenrod', border: '1px solid darkgoldenrod', padding: '2px 5px' }} rel="noopener noreferrer" className="code-link">Best Trainee Scientific Award (Silver Prize)</a>
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

        <div className="card-base pub-card">
          <h4 style={{ margin: '0 0 0.5em', fontSize: '1.1em', lineHeight: '1.4' }}>
            Unsupervised Diffusion Model for Synthesizing T1-weighted MRI Scans from Abdominal CT Scans
          </h4>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong>Han Jang</strong>, J. Kwon, K. Choi,
            {" "}
            <i><a href="https://www.kiise.or.kr/conference/kcc/2024/" target="_blank" rel="noopener noreferrer" className="advisor-link">Korea Computer Congress 2024</a></i>
            {" "}(pp. 2048-2050) Jeju ICC, South Korea
          </p>
          <p></p>
          <a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862432" target="_blank" rel="noopener noreferrer" className="code-link">Paper</a>
        </div>

      </div>

      <div className="pub-right" />
    </div>
  );
}

export default Publications;
