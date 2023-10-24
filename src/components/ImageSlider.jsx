import Carousel from 'react-bootstrap/Carousel';

function ImageSlider () {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-1.jpg" alt="cliffs" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-2.jpg" alt="airplane" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-3.jpg" alt="people sitting outside" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-4.jpg" alt="children" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-5.jpg" alt="group of volunteers" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-6.jpg" alt="optometrists working with a patient" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-7.jpg" alt="CALO team standing in front of airplane" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;