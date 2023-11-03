import React from 'react';

function PhotoCollection1(data) {
    console.log(data);
  // Extract image paths from the front matter
//   const defaultImages = [
//     data.image1,
//     data.image2,
//     // Add more default image paths here
//   ];

  return (
    <div>
    <p>Collection 1 p tag</p>
      {/* <h1>{data.title}</h1> */}
      <div className="image-container">
        {/* Render default images
        {defaultImages.map((imagePath, index) => (
          <img key={index} src={imagePath} alt={`Default Image ${index + 1}`} />
        ))} */}

        {/* Render user-uploaded images */}
        {data.images.map((imagePath, index) => (
          <img key={index} src={imagePath} alt={`User Image ${index + 1}`} />
        ))}
                    {/* key={index + defaultImages.length} */}
      </div>
    </div>
  );
}

export default PhotoCollection1;
