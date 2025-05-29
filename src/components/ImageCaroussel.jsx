import Slider from "react-slick";

const ImageCarousel = ({ images }) => {
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
  };

  return (
    <div className="mt-8  max-w-[800px] ml-0">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="h-[500px] w-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;