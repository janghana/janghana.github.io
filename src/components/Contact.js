import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function Contact() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>

      <LeftSideProfile />
      <div style={{ flex: '2' }}>
        <h2>Contact</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <h2>Email</h2>
        <a href="mailto:janghan001112@gmail.com" className="advisor-link">
          janghan001112@gmail.com
        </a>

        <p className="italic-text">
          If you're interested in my research or would like to learn more about me, 
          please contact me through the{" "}
          <a href="mailto:janghan001112@gmail.com" className="advisor-link">
            email
          </a>.
        </p>

        <p className="italic-text">
          Thank you.
        </p>

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

        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <h3>Current workplace :</h3>
            <p><strong>NanoCellect Biomedical Inc.</strong></p>
            <p>9525 Towne Centre Drive, Suite 150, San Diego, CA 92121</p>
            {/* <p>(2024. 8. ~ 2025. 2.)</p> */}
          </div>

          {/* google map iframe */}
          <div style={{ flex: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.6626102197115!2d-117.20688719999998!3d32.880645099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0761c0a7e59d%3A0xe414edbdd10d1a2d!2sNanoCellect%20Biomedical!5e0!3m2!1sko!2sus!4v1736279848290!5m2!1sko!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NanoCellect Biomedical Inc. Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div style={{ flex: '1' }}> {/* Right side empty space */}</div>
    </div>
  );
}

export default Contact;
