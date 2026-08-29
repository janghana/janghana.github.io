import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Lightbox({ src, alt, onClose }) {
  const handleKey = useCallback(
    (event) => {
      if (event.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [handleKey]);

  return createPortal(
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        &times;
      </button>
      <img
        className="lightbox-img"
        src={src}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
      />
    </div>,
    document.body
  );
}

export default Lightbox;
