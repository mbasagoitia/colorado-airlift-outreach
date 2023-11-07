import { useState } from "react";

function PhotoGrid({ images }) {
  
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIsOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const prevImage = () => {
    setLightboxIndex((lightboxIndex + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  return (
    <div className="photo-grid">
      {images.map((image, index) => {
      const fileExtension = image.split('.').pop().toLowerCase();

      if (['mov', 'mp4'].includes(fileExtension)) {
        return (
          <div
            className="photo-grid-item"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <video controls>
              <source src={image} type={`video/${fileExtension}`} />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      } else {
        return (
          <div
            className="photo-grid-item"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <img src={image} alt={`Image ${index}`} />
          </div>
        );
      }
    })}

      {lightboxIsOpen && (
        <div className="lightbox">
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>
          <img src={images[lightboxIndex]} alt={`Image ${images[lightboxIndex]}`} />
          <a className="prev" onClick={prevImage}>
            &#8249;
          </a>
          <a className="next" onClick={nextImage}>
            &#8250;
          </a>
          <div className="progress-bar">
            {images.map((_, index) => (
              <span
                key={index}
                className={`progress-dot ${index === lightboxIndex ? 'active' : ''}`}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGrid;

