import React from 'react';
import '../../../App.css';
import LeftSideProfile from '../../LeftSideProfile';

import repPhoto from './media/nanocellect_representative.jpg';
import marathon1 from './media/marathon_1.jpg';
import marathon2 from './media/marathon_2.jpg';
import presentation1 from './media/presentation.jpg';
import officePhoto from './media/office_work.jpg';
import partyPhoto from './media/company_party.jpg';
import sandiegoPhoto from './media/sandiego_view.jpg';

function Nanocellect() {
  return (
    <div className="home-container">
      <div className="home-left">
        <LeftSideProfile />
      </div>

      <div className="home-main" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <h2 style={{ fontWeight: 800 }}>Machine Learning Engineer @ NanoCellect</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: 0.15 }} />

        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', fontSize: '17px' }}>
          <li><strong>Date:</strong> Apr 2024 – Feb 2025</li>
          <li><strong>Role:</strong> Machine Learning Engineer, R&amp;D Team</li>
          <li><strong>Company:</strong> NanoCellect Biomedical, Inc.</li>
          <li><strong>Place:</strong> San Diego, California</li>
        </ul>

        <img src={repPhoto} alt="With CEO" style={{ width: '100%', borderRadius: '10px', marginBottom: '2.2rem' }} />

        <h3 style={{ fontWeight: 700 }}>What Went Down</h3>
        <p style={{ fontSize: '17px', lineHeight: 1.75 }}>
          I dove into <em>VERLO™ Image‑Guided Cell Sorter</em>, teaming up with UCSD brains and in‑house bio wizards.
          Days were split between CNN tweaks, fluorescent datasets, and spontaneous whiteboard wars.
          We pushed cell‑type ID accuracy up by 13 %, chopped annotation drudge by 30 %, and pitched every win over tacos.
        </p>

        <h3 style={{ fontWeight: 700 }}>Quick Hits</h3>
        <ul style={{ marginLeft: '1.2rem', fontSize: '17px', lineHeight: 1.6 }}>
          <li>Built a preprocessing toolkit that chewed through 10 k+ cytology images overnight.</li>
          <li>Spun up an active‑learning loop—label smarter, not harder.</li>
          <li>Show‑and‑tell every Friday; shipped ideas straight into the sorter firmware.</li>
        </ul>

        <div style={{ display: 'flex', gap: '1rem', margin: '2.3rem 0' }}>
          <img src={marathon1} alt="Beach Run 1" style={{ width: '50%', borderRadius: '10px' }} />
          <img src={marathon2} alt="Beach Run 2" style={{ width: '50%', borderRadius: '10px' }} />
        </div>

        <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
          When the code stopped compiling, La Jolla waves took over. Sunrise jogs, salt in the air, brain rebooted.
        </p>

        <div style={{ display: 'flex', gap: '1rem', margin: '2.3rem 0' }}>
          <img src={presentation1} alt="Pitching Results" style={{ width: '50%', borderRadius: '10px' }} />
          <img src={officePhoto} alt="Desk Vibes" style={{ width: '50%', borderRadius: '10px' }} />
        </div>

        <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
          Office moments swung between laser focus and coffee‑fueled laughs—exactly how R&amp;D should feel.
        </p>

        <img src={partyPhoto} alt="Halloween Bash" style={{ width: '100%', borderRadius: '10px', margin: '2.3rem 0' }} />

        <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
          First US Halloween: costumes, candy, and a sorter wrapped in cobwebs. Unreal.
        </p>

        <img src={sandiegoPhoto} alt="San Diego Sunset" style={{ width: '100%', borderRadius: '10px', margin: '2.3rem 0' }} />

        {/* <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
          San Diego sunsets hit different. Can’t wait to chase that horizon again.
        </p> */}

        {/* <div style={{ display: 'flex', gap: '1rem', margin: '2.5rem 0' }}>
          <img src={seriousPhoto} alt="Serious Mode" style={{ width: '50%', borderRadius: '10px' }} />
          <img src={smilePhoto} alt="Happy Mode" style={{ width: '50%', borderRadius: '10px' }} />
        </div> */}

        <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center', fontWeight: 600 }}>
          {/* Big smiles. That’s the California story—work hard, live louder. */}
          San Diego sunsets hit different. Can’t wait to chase that horizon again.
        </p>

        <p style={{ marginTop: '2.5rem', fontSize: '17px' }}>
          <a href="/" className="advisor-link">← Back to Home</a>
        </p>
      </div>

      <div className="home-right" />
    </div>
  );
}

export default Nanocellect;
