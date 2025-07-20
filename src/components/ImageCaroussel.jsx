import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const ImageCarousel = ({ images }) => {
  const [dotMargin, setDotMargin] = useState(0);
  const containerRef = useRef(null);

  const calculateDotMargin = () => {
    const container = containerRef.current;
    if (container) {
      const currentSlide = container.querySelector('.slick-current img');
      if (currentSlide) {
        const containerWidth = 800; // max-w-[800px]
        const imageWidth = currentSlide.offsetWidth;
        const margin = (containerWidth - imageWidth) / 2;
        setDotMargin(margin);
      }
    }
  };

  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
    beforeChange: (oldIndex, newIndex) => {
      setTimeout(calculateDotMargin, 100);
    },
    afterChange: (currentIndex) => {
      setTimeout(calculateDotMargin, 100);
    }
  };

  useEffect(() => {
    // Calculate initial margin
    setTimeout(calculateDotMargin, 100);
  }, []);

  useEffect(() => {
    // Update CSS custom property when dotMargin changes
    const container = containerRef.current;
    if (container) {
      const dots = container.querySelector('.slick-dots');
      if (dots) {
        dots.style.marginLeft = `${dotMargin}px`;
      }
    }
  }, [dotMargin]);

  return (
    <div ref={containerRef} className="mt-8 max-w-[800px] ml-0">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-[500px] flex items-start">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="max-h-[500px] max-w-[800px] w-auto h-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;