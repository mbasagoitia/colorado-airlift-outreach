import React, { useEffect, useState } from 'react';

function PhotoCollection1() {
  const [userImages, setUserImages] = useState([]);
  
  const defaultImages = [
    { path: '/path/to/default-image-1.jpg', alt: 'Default Image 1' },
    { path: '/path/to/default-image-2.jpg', alt: 'Default Image 2' },
  ];

  // Fetch user-uploaded images from your custom endpoint
  useEffect(() => {
    fetch('https://harmonious-toffee-b74135.netlify.app/images')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserImages(data.userImages); // Assuming your data structure includes userImages
      });
  }, []);

  // Combine the default images with user-uploaded images
  const allImages = [...defaultImages, ...userImages];

  return (
    <div>
      <h1>Photo Collection</h1>
      <div className="image-container">
        {allImages.map((image, index) => (
          <img key={index} src={image.path} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default PhotoCollection1;

