import Carousel from 'react-bootstrap/Carousel';

function ImageSlider () {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-1.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-2.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-3.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-4.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-5.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-6.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/home/hp-image-7.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;