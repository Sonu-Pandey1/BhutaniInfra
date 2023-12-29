

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../ProjectSlider/Slider.scss"


const Slider = () => {

    return (
        <Carousel
            id="carousel"
            className='Carousel'
            fade
            indicators={false} // Remove the dots
            controls={false}   // Remove the arrows
            interval={3000}    // Disable automatic sliding
            pause={false} // Disable pause on hover
        >
            <Carousel.Item className='CarouselItem ' >
                <img loading="lazy"
                    className="d-block w-100"
                    src="https://www.bhutanigroup.com/assets/images/slider/02c8afeff3f9b44750b92bf597a20338.jpg"
                    alt="Slide 1"
                    style={{ maxHeight: '800px', width: '100%' }} // Adjust the size of the image
                />
            </Carousel.Item>

            <Carousel.Item className='CarouselItem'>
                <img loading="lazy"
                    className="d-block w-100 "
                    src="https://www.bhutanigroup.com/assets/images/slider/fb06429fbcdde7809c8a15e2da9ee6bd.webp"
                    alt="Slide 2"
                    style={{ maxHeight: '800px', width: '100%' }} // Adjust the size of the image
                />
            </Carousel.Item>

            <Carousel.Item className='CarouselItem'>
                <img loading="lazy"
                    className="d-block w-100"
                    src="https://www.bhutanigroup.com/assets/images/slider/4a3bb113091b5036bed928ca17a7e011.jpg"
                    alt="Slide 3"
                    style={{ maxHeight: '800px', width: '100%' }} // Adjust the size of the image
                />
            </Carousel.Item>
            
        </Carousel>
    );
};

export default Slider;

