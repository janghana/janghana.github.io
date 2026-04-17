import React from 'react';
import '../../../App.css';
import LeftSideProfile from '../../LeftSideProfile';

import viewHeight from './media/view_height.png';
import view2Height from './media/view2_height.png';
import view3Width from './media/view3_width.png';
import nameTag from './media/name_tag.png';
import cafeIntroHeight from './media/cafe_intro_height.png';
import cageIntro2Width from './media/cage_intro2_width.png';
import meHeight from './media/me_height.png';
import posterHeight from './media/poster_height.png';
import pptWidth from './media/ppt_width.png';
import awards from './media/awards.png';
import mySilverName from './media/my_name_silver_width.png';

function ICMRI2025() {
  return (
    <div className="home-container">
      <div className="home-left">
        <LeftSideProfile />
      </div>

      <div className="home-main" style={{ fontFamily: 'Montserrat, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ maxWidth: '650px', width: '100%' }}>
          <h2 style={{ fontWeight: 800, textAlign: 'center' }}>ICMRI 2025 Conference Experience</h2>
          <hr style={{ borderColor: '#e0e0e0', opacity: 0.15 }} />

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.8rem', marginLeft: '1.5rem', fontSize: '17px', textAlign: 'left' }}>
            <li><strong>Date:</strong> November 2025</li>
            <li><strong>Conference:</strong> International Conference on Medical Robotics and Intelligence</li>
            <li><strong>Location:</strong> Seoul, South Korea</li>
            <li><strong>Presentation:</strong> Poster Session - Silver Award 🥈</li>
          </ul>

          <h3 style={{ fontWeight: 700, textAlign: 'center', marginTop: '2rem' }}>The Hangang River is Beautiful!</h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0' }}>
            <img src={viewHeight} alt="Hangang River View 1" style={{ width: '48%', maxHeight: '350px', objectFit: 'contain', borderRadius: '10px' }} />
            <img src={view2Height} alt="Hangang River View 2" style={{ width: '48%', maxHeight: '350px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center', margin: '1.5rem 0' }}>
            My first medical conference—I was so excited about all the learning opportunities ahead!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <img src={nameTag} alt="Conference Name Tag" style={{ width: '100%', maxWidth: '350px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <h3 style={{ fontWeight: 700, textAlign: 'center', marginTop: '2.5rem' }}>First Impressions at the Hotel</h3>
          
          <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center', marginBottom: '1.5rem' }}>
            The moment I walked into the hotel, these beautiful views welcomed me. It was amazing!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0', flexWrap: 'wrap' }}>
            <img src={cafeIntroHeight} alt="Cafe View" style={{ maxWidth: '280px', maxHeight: '320px', objectFit: 'contain', borderRadius: '10px' }} />
            <img src={cageIntro2Width} alt="Hotel Interior" style={{ maxWidth: '280px', maxHeight: '320px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center', margin: '2rem 0' }}>
            This view was definitely my favorite—the wide Hangang River panorama!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <img src={view3Width} alt="Hangang River Panorama" style={{ width: '100%', maxWidth: '500px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <h3 style={{ fontWeight: 700, textAlign: 'center', marginTop: '3rem' }}>Poster Session Presentation</h3>
          
          <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center', margin: '1.5rem 0' }}>
            I presented at the poster session and even won a Silver Award!<br/>
            It was such a meaningful experience.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2.5rem 0' }}>
            <img src={meHeight} alt="Presenting" style={{ width: '48%', maxHeight: '400px', objectFit: 'contain', borderRadius: '10px' }} />
            <img src={posterHeight} alt="My Poster" style={{ width: '48%', maxHeight: '400px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <h3 style={{ fontWeight: 700, textAlign: 'center', marginTop: '2.5rem' }}>Conference Lectures</h3>

          <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center', marginBottom: '1.5rem' }}>
            I attended many insightful lectures from other researchers.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <img src={pptWidth} alt="Conference Presentation" style={{ width: '100%', maxWidth: '450px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center', margin: '1.5rem 0' }}>
            To be honest, some talks were challenging, but that just shows how much there is to learn!
          </p>

          <h3 style={{ fontWeight: 700, textAlign: 'center', marginTop: '3rem' }}>Silver Award 🏆</h3>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '2.5rem 0' }}>
            <img src={awards} alt="Award Certificate" style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>

          <p style={{ fontSize: '17px', lineHeight: 1.75, textAlign: 'center', fontWeight: 600, margin: '2rem 0' }}>
            My certificate!
          </p>

          <p style={{ fontSize: '18px', lineHeight: 1.8, textAlign: 'center', fontWeight: 600, margin: '3rem 0 2rem 0' }}>
            Life is about experiences! Every experience brings new insights and growth.
          </p>

          <p style={{ marginTop: '3rem', fontSize: '17px', textAlign: 'center' }}>
            <a href="/" className="advisor-link">← Back to Home</a>
          </p>
        </div>
      </div>

      <div className="home-right" />
    </div>
  );
}

export default ICMRI2025;