
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Slider/Slider.scss"


const ImageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }


        ]

    };

    return (
        <div className="slider-container">

            <Slider className='slider  text-center' {...settings}>

                <div className='imgWrapperrr'>
                    <img className='shadow' src={"/logos/365Officelogo.png"} alt="img" />
                </div>

                <div className='imgWrapperrr'>
                    <img className='shadow' src={"/logos/alphathumlogo.png"} alt="img" />
                </div>

                <div className='imgWrapperrr '>
                    <img className='shadow' src={"/logos/avenue62Logo.png"} alt="img" />
                </div>

                <div className='imgWrapperrr'>
                    <img className='shadow' src={"/logos/cityCenter150Logo.png"} alt="img" />
                </div>

                <div className='imgWrapperrr'>
                    <img className='shadow' src={"/logos/citycentergzblogo.png"} alt="img" />
                </div>

                <div className='imgWrapperrr'>
                    <img className='shadow' src={"/logos/cyberparklogo.png"} alt="img" />
                </div>

                <div className='imgWrapperrr'>
                    <img className='shadow' src={"/logos/cyberThumlogo.png"} alt="img" />
                </div>

                <div className='imgWrapperrr'>
                    <img className='shadow' src={"/logos/iThumlogo.png"} alt="img" />
                </div>

                <div className='imgWrapperrr'>
                    <img className='shadow' src={"/logos/technoparklogo.png"} alt="img" />
                </div>

            </Slider>
        </div>
    );
};

export default ImageSlider;


