import React from 'react';

function PhotoPreviews({ title, photo1, photo2 }) {
  return (
    <div className="photo-previews-container">
      <div className="photo-preview photo-preview-1">
        <img src={photo1} alt="Small Preview 1" />
      </div>
      <div className="photo-preview photo-preview-2">
        <img src={photo2} alt="Small Preview 2" />
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default PhotoPreviews;
