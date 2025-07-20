import { useEffect, useRef } from "react";
import Slider from "react-slick";

const ImageCarousel = ({ images }) => {
  const containerRef = useRef(null);

  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0, // Start with first slide (empty)
    autoplay: false, // Disable autoplay since we start with no image
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
    afterChange: (currentIndex) => {
      // Scroll to the top of the dots when changing slides
      const container = containerRef.current;
      if (container) {
        const dots = container.querySelector('.slick-dots');
        if (dots) {
          dots.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };



  return (
    <div ref={containerRef} className="max-w-[800px] ml-0 relative pt-12">
      <Slider {...settings}>
        {/* Empty first slide */}
        <div key="empty" className="h-[500px] flex items-start">
          <div className="max-h-[500px] max-w-[800px] w-auto h-auto"></div>
        </div>
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