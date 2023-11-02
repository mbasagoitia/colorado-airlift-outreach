function PhotoCollection1(props) {
  const { title, images } = props;
  console.log(props);

  // Default images
  const defaultImages = [
    { path: '/path/to/default-image-1.jpg', alt: 'Default Image 1' },
    { path: '/path/to/default-image-2.jpg', alt: 'Default Image 2' },
  ];

  // Combine the default images with user-uploaded images
  const allImages = [...defaultImages, ...images];

  return (
    <div>
      <h1>{title}</h1>
      <div className="image-container">
        {defaultImages.map((image, index) => (
          <img key={index} src={image.path} alt={image.alt} />
        ))}
      </div>
    </div>
  );

}

export default PhotoCollection1;