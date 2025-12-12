import React from 'react';
import '../App.css';
import LeftSideProfile from './LeftSideProfile';

function CV() {
  const pdfUrl = process.env.PUBLIC_URL + '/CV.pdf';

  // 버튼 공통 스타일
  const buttonStyle = {
    textDecoration: 'none',
    color: '#555',
    border: '1px solid #ddd',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '0.9rem',
    backgroundColor: '#fff',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  return (
    <div className="cv-container">

      <div className="cv-left">
        <LeftSideProfile />
      </div>

      <div className="cv-main">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>CV</h2>
          
          {/* 우측 상단 기능 버튼 영역 */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={buttonStyle}
              title="Open in new tab"
            >
              <span>↗ New Tab</span>
            </a>
            <a 
              href={pdfUrl} 
              download="HanJang_CV.pdf" // 다운로드될 때 파일명
              style={{ ...buttonStyle, backgroundColor: '#333', color: '#fff', border: '1px solid #333' }}
              title="Download PDF"
            >
              <span>↓ Download</span>
            </a>
          </div>
        </div>
        
        <hr style={{ borderColor: '#e0e0e0', opacity: '0.15', marginBottom: '20px', marginTop: '10px' }} />

        <div style={{ 
          width: '100%', 
          height: '1100px',
          border: '1px solid #e0e0e0', 
          borderRadius: '8px', 
          overflow: 'hidden',
        }}>
          <iframe
            src={`${pdfUrl}#toolbar=0&view=FitH`}
            title="CV Viewer"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>

      <div style={{ flex: 1 }} />
    </div>
  );
}

export default CV;