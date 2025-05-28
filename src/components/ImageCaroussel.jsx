import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({images}) => {

    return (
        <div className="">
            <Carousel showThumbs={false} centerMode={false} autoPlay={true} swipeable={true} infiniteLoop={true} transitionTime={1000} >
                {images.map((image, index) => (
                    <div key={index} className="max-h-[500px] flex justify-center items-center overflow-hidden">
                        <img src={image} className="max-h-[500px] object-contain mx-auto" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;