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

      <div className="home-main" style={{ fontFamily: 'Montserrat, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <h2 style={{ fontWeight: 800, textAlign: 'center' }}>Machine Learning Engineer @ NanoCellect</h2>
          <hr style={{ borderColor: '#e0e0e0', opacity: 0.15 }} />

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', marginLeft: '1.5rem', fontSize: '17px', textAlign: 'left' }}>
            <li><strong>Date:</strong> Apr 2024 – Feb 2025</li>
            <li><strong>Role:</strong> Machine Learning Engineer, R&amp;D Team</li>
            <li><strong>Company:</strong> NanoCellect Biomedical, Inc.</li>
            <li><strong>Place:</strong> San Diego, California</li>
          </ul>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.2rem' }}>
            <img src={repPhoto} alt="With CEO" style={{ width: '100%', maxWidth: '400px', maxHeight: '400px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <h3 style={{ fontWeight: 700, textAlign: 'center' }}>What I Did</h3>
          <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center' }}>
            I worked on the <em>VERLO™ Image‑Guided Cell Sorter</em> project, collaborating with researchers from UCSD and our in‑house biology team.
            My days were spent improving CNN models, working with fluorescent image datasets, and having productive discussions with the team.
            We improved cell‑type identification accuracy by 13%, reduced the time needed for data annotation by 30%, and regularly celebrated our progress together.
          </p>

          <h3 style={{ fontWeight: 700, textAlign: 'center' }}>Key Achievements</h3>
          <ul style={{ marginLeft: '1.2rem', fontSize: '17px', lineHeight: 1.6, textAlign: 'left', display: 'inline-block' }}>
            <li>Built a preprocessing toolkit that processed over 10,000 cytology images efficiently.</li>
            <li>Developed an active‑learning system to make data labeling more efficient.</li>
            <li>Presented results every Friday and integrated new ideas directly into the sorter firmware.</li>
          </ul>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2.3rem 0', flexWrap: 'wrap' }}>
            <img src={marathon1} alt="Beach Run 1" style={{ maxWidth: '200px', maxHeight: '250px', objectFit: 'contain', borderRadius: '10px' }} />
            <img src={marathon2} alt="Beach Run 2" style={{ maxWidth: '200px', maxHeight: '250px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <p style={{ fontSize: '17px', lineHeight: 1.7, textAlign: 'center' }}>
            When I needed a break from coding, I enjoyed the beautiful La Jolla beach. Morning jogs by the ocean with fresh salt air always helped me reset and come back refreshed.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2.3rem 0', flexWrap: 'wrap' }}>
            <img src={presentation1} alt="Pitching Results" style={{ maxWidth: '200px', maxHeight: '250px', objectFit: 'contain', borderRadius: '10px' }} />
            <img src={officePhoto} alt="Desk Vibes" style={{ maxWidth: '200px', maxHeight: '250px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <p style={{ fontSize: '17px', lineHeight: 1.7, textAlign: 'center' }}>
            The office atmosphere was a perfect balance of focused work and friendly conversations over coffee—exactly what a healthy R&amp;D environment should be like.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '2.3rem 0' }}>
            <img src={partyPhoto} alt="Halloween Bash" style={{ width: '100%', maxWidth: '400px', maxHeight: '400px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <p style={{ fontSize: '17px', lineHeight: 1.7, textAlign: 'center' }}>
            This was my first Halloween in the US. We had costumes, candy, and even decorated the cell sorter with cobwebs. It was an amazing experience.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '2.3rem 0' }}>
            <img src={sandiegoPhoto} alt="San Diego Sunset" style={{ width: '100%', maxWidth: '400px', maxHeight: '400px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center', fontWeight: 600 }}>
            San Diego sunsets were truly special. I can't wait to experience that beautiful horizon again.
          </p>

          <p style={{ marginTop: '2.5rem', fontSize: '17px', textAlign: 'center' }}>
            <a href="/" className="advisor-link">← Back to Home</a>
          </p>
        </div>
      </div>

      <div className="home-right" />
    </div>
  );
}

export default Nanocellect;
