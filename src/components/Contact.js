import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <LeftSideProfile />
      </div>

      <div className="contact-main">
        <h2>Contact</h2>
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15' }} />

        <h2>Email</h2>
        <a href="mailto:hanjang@snu.ac.kr" className="advisor-link">
        hanjang[at]snu[dot]ac[dot]kr
        </a>

        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          If you're interested in my research or would like to learn more about me, 
          please contact me through the{" "}
          <a href="mailto:hanjang@snu.ac.kr" className="advisor-link">
            email
          </a>.
          <br />
          I enjoy discussions across various interdisciplinary fields, so please feel free to reach out!
          <br />
          <br />
          You can also connect with me via my{" "}
          <a
            href="https://github.com/janghana"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
            style={{ color: '#007BFF' }}
          >
            GitHub
          </a>,{" "}
          <a
            href="https://www.linkedin.com/in/han-jang-255aa0253/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
            style={{ color: '#007BFF' }}
          >
            LinkedIn
          </a>,{" "}
          <a
            href="https://janghan-kor.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
            style={{ color: '#007BFF' }}
          >
            Tech Blog
          </a>,{" "}
          or{" "}
          <a
            href="https://scholar.google.com/citations?hl=en&user=b6IRRlsAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="advisor-link"
            style={{ color: '#007BFF' }}
          >
            Google Scholar
          </a>
          {" "}
          links! I look forward to connecting with you and exploring new possibilities together.
        </p>

        <p className="italic-text">Thank you</p>

        <br></br>

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

        <div className="contact-workplace">
          <div className="workplace-info">
            <h3>Current Workplace :</h3>
            <p><strong>Seoul National University</strong></p>

            <p>Seoul National University Hospital, Department of Radiology,</p>
            <p>AICON LAB</p>
            <p>101 Daehak-ro, Jongno-gu, Seoul, South Korea</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.9771266494!2d126.9987965!3d37.5791563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca32888449cd5%3A0x742840c3a1ff9fec!2z7ISc7Jq47Yq567OE7IucIOyiheuhnOq1rCDrjIDtlZnroZwgMTAx!5e0!3m2!1sko!2skr!4v1759685533594!5m2!1sko!2skr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SNn Map"
            />
          </div>
        </div>
        {/* 10th Floor, Hyundai Group Building (West Wing) */}

        
      </div>

      

      <div className="contact-right" />
    </div>
  );
}

export default Contact;
