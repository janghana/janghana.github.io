import React from 'react';
import '../../../App.css';
import LeftSideProfile from '../../LeftSideProfile';

// media (kept in ./media as requested)
import weather from './media/weather.png';
import miccai1 from './media/miccai1.png';
import miccai2 from './media/miccai2.png';
import miccai3TopView from './media/miccai3_top_view.png';
import miccai4OralPpt from './media/miccai4_oral_ppt.png';
import miccaiFood from './media/miccai_food.png';
import posterMe from './media/poster_me.png';
import koreanFood from './media/korean_food.png';
import ppt1 from './media/ppt1.png';
import ppt2 from './media/ppt2.png';

function MICCAI2025() {
  return (
    <div className="home-container">
      {/* Left: Profile */}
      <div className="home-left">
        <LeftSideProfile />
      </div>

      {/* Main (NanoCellect-like layout) */}
      <div className="home-main" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <h2 style={{ fontWeight: 800 }}>MICCAI 2025 — Recap & Impressions</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: 0.15 }} />

        {/* Meta */}
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', fontSize: '17px' }}>
          <li><strong>Date:</strong> Sep. 23 – Sep. 27, 2025</li>
          <li><strong>Event:</strong> MICCAI 2025</li>
          <li><strong>Venue:</strong> Daejeon Convention Center</li>
          <li><strong>City:</strong> Daejeon, South Korea</li>
        </ul>

        {/* Weather */}
        <p style={{ fontSize: '17px', lineHeight: 1.75 }}>
          The weather in my hometown, Daejeon, felt like California that day.
        </p>
        <img
          src={weather}
          alt="Daejeon Weather"
          style={{ width: '100%', borderRadius: 12, marginBottom: '2.0rem' }}
        />

        {/* Opening vibes */}
        <h3 style={{ fontWeight: 700 }}>MICCAI finally opened!</h3>
        <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: '1fr 1fr', margin: '0.8rem 0 1.8rem' }}>
          <img src={miccai1} alt="MICCAI Entrance 1" style={{ width: '100%', borderRadius: 12 }} />
          <img src={miccai2} alt="MICCAI Entrance 2" style={{ width: '100%', borderRadius: 12 }} />
        </div>

        {/* View + Oral */}
        <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
          The view around the venue was beautiful and calming.
        </p>
        <img
          src={miccai3TopView}
          alt="DCC Top View"
          style={{ width: '100%', borderRadius: 12, margin: '0.6rem 0 1.6rem' }}
        />
        <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
          I also joined an oral session and listened to several promising works.
        </p>
        <img
          src={miccai4OralPpt}
          alt="Oral Session & PPT"
          style={{ width: '100%', borderRadius: 12, margin: '0.6rem 0 1.8rem' }}
        />

        {/* Food */}
        <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
          The conference food was well prepared and kept everyone focused.
        </p>
        <img
          src={miccaiFood}
          alt="MICCAI Food"
          style={{ width: '100%', borderRadius: 12, margin: '0.6rem 0 1.8rem' }}
        />

        {/* Poster */}
        <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
          I took a quick photo in front of a poster from our lab. A small moment that meant a lot to me.
        </p>
        <img
          src={posterMe}
          alt="Poster Area"
          style={{ width: '100%', borderRadius: 12, margin: '0.6rem 0 1.8rem' }}
        />

        {/* Kalguksu meetup */}
        <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
          I met a CS PhD student from Vanderbilt University, and we ate <em>kalguksu</em> together.
          Simple, warm, and perfect after a long day.
        </p>
        <img
          src={koreanFood}
          alt="Kalguksu"
          style={{ width: '100%', borderRadius: 12, margin: '0.6rem 0 2.0rem' }}
        />

        {/* Talk slides */}
        <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: '1fr 1fr', marginBottom: '0.8rem' }}>
          <img src={ppt1} alt="Talk Slide 1" style={{ width: '100%', borderRadius: 12 }} />
          <img src={ppt2} alt="Talk Slide 2" style={{ width: '100%', borderRadius: 12 }} />
        </div>
        <p style={{ fontSize: '17px', lineHeight: 1.75, marginBottom: '0.6rem' }}>
          This was my talk. It was a fun session, and I enjoyed sharing the work.
        </p>

        {/* Talk card */}
        <div style={{ marginTop: '0.6rem', padding: '1.1rem', border: '1px solid #eee', borderRadius: 12, background: '#fafafa' }}>
          <h4 style={{ marginTop: 0, marginBottom: '0.6rem', fontSize: '1.05em' }}>
            Domain-Specialized Interactive Segmentation Framework for Meningioma Radiotherapy Planning
          </h4>
          <p style={{ margin: 0, fontSize: '0.95em', lineHeight: 1.7 }}>
            I presented an interactive 3D tumor segmentation workflow. It used simple prompts
            (points, scribbles, boxes) to speed up safe boundary correction for radiotherapy planning.
            We focused on clicks, latency, and boundary quality, and designed it for a clinician-in-the-loop setup.
          </p>
          <div style={{ marginTop: '0.8rem', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
              GitHub
            </a>
          </div>
        </div>

        {/* Closing */}
        <p style={{ fontSize: '17px', lineHeight: 1.75, marginTop: '1.6rem' }}>
          It was an honor to make my first meaningful contribution at a big conference like MICCAI,
          in the CLIP 2025 workshop. I’m grateful for the feedback and will keep improving the demo
          for real clinical use.
        </p>

        <p style={{ marginTop: '2.3rem', fontSize: '17px' }}>
          <a href="/" className="advisor-link">← Back to Home</a>
        </p>
      </div>

      {/* Right */}
      <div className="home-right" />
    </div>
  );
}

export default MICCAI2025;
