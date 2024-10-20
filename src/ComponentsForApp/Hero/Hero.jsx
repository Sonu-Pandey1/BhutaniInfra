
import "../Hero/Hero.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListingCard from "../ListingCard/ListingCard"
import Slider from "../ProjectSlider/Slider";
import ImageSlider from "../Slider/Slider";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function Hero() {

    // slider function for responsiveness .
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (

        <div className="home">
            <Header />
            <div className="whatsapplogo">
                <a aria-label="Chat on WhatsApp" href="https://wa.me/918766325423?text=I'm%20interested%20in%20your%20Propertys%20for%20Buy"> <img alt="Chat on WhatsApp" src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" width={50} />
                </a>
            </div>



            <section className="h-wrapper  ">
                <Slider />
            </section>

            <section className="h-containt-wrapper p-2">

                {/*https://www.extramarks.com/static/media/line-orange.6f221145.webp 
                  https://masaischool.com/images/new-homepage/yellow-vector.svg
                   */}

                <div className="h-container z-3   ">
                    <h6>EXPERIENCE LUXURY WITH</h6>
                    <h1>BHUTANI INFRA   </h1>
                    <img loading="lazy" src="data:image/png;base64,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" alt="" />

                </div>

            </section>


            {/* poster is start here */}
            <section className="poster-wrapper ">
                <div className="container-fluid ">
                    <div className="container">

                        <div className="row properties-section text-center py-5">
                            <h1>THE <span className="properties-title">BHUTANI INFRA</span> COLLECTIONS</h1>
                            <h4>WHAT ARE YOU LOOKING FOR?</h4>
                            <p className="Para">We deliver effortless luxury living at your doorstep with our exceptional contemporary properties one-of-a-kind.</p>
                            <p className="Para">Stay up-to-date on new property options, best investment opportunities, and whats coming next.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* poster is end here */}


            <div className="section SliderSection ">

                <div className="col-12 minislider  p-4">
                    <h1 className="text-center">A+ Developers</h1>
                    <ImageSlider />
                </div>

            </div>

            <section>
                <div className="container-fluid b-wrapper ">
                    <div className="container  pb-5">

                        <div className="row  ">
                            <div className="col b-col1 col-12 col-sm-12 col-md-12 col-lg-6 ">
                                <h5>OUR PROJECTS</h5>
                                <h1>Get Offers from Top Projects</h1>
                                <div className="col-12-lg">
                                    <img src="https://masaischool.com/images/new-homepage/yellow-vector.svg" alt="" />
                                </div>
                                <p className="mt-4 Para">Get Your Property from top-notch locations. Turnkey Reality Pvt. Ltd.is one of India`s leading tech-enabled real estate aggregator platforms. Established in January 2021, Turnkey Reality is experiencing rapid growth and has quickly become the top revenue-generating distributor for primary residential real estate in the Delhi-NCR region. Additionally, the company has established a dominant position in high-end commercial sales, enjoying exclusivity in this market segment.</p>
                            </div>

                            {/* round bulders animation starts here==========>>>>>>  */}
                            <div className="col b-col2 col-12 col-sm-12 col-md-12 col-lg-6 mt-5">
                                <div className="maincontainer">
                                    <div className="outerdiv">
                                        <img loading="lazy" className="cyberparklogo" src="/logos/cyberparklogo.png" alt="img" />

                                        <img loading="lazy" className="cityCenter150Logo" src="/logos/cityCenter150Logo.png" alt="img" />

                                        <img loading="lazy" className="citycentergzblogo" src="/logos/iThumlogo.png" alt="img" />

                                        <img loading="lazy" className="cyberThumlogo" src="/logos/cyberThumlogo.png" alt="img" />

                                        <img loading="lazy" className="Office365logo" src="/logos/365Officelogo.png" alt="img" />

                                        <img loading="lazy" className="technoparklogo" src="/logos/technoparklogo.png" alt="img" />

                                        <div className="innerdiv">
                                            <div className="innerdiv2">
                                                <img loading="lazy" className="alphathumlogo" src="/logos/avenue133Logo.png" alt="img" />
                                                <img loading="lazy" className="iThumlogo" src="/logos/citycentergzblogo.png" alt="img" />
                                                <img loading="lazy" className="avenue133Logo" src="/logos/alphathumlogo.png" alt="img" />
                                                <img loading="lazy" className="avenue62Logo" src="/logos/avenue62Logo.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* round bulders animation ends here=======>>>>>>>  */}
                        </div>
                    </div>
                </div>
            </section>

            {/*Projects sections starts here -------->>>>> */}
            <section className="p-wrapper">
                <div className="container">

                    {/* ongoing projects ======>>> */}
                    <div className="row p-slider pt-4">

                        <div className="slider-title ">
                            <h5>OnGoing Projects</h5>
                        </div>

                        {/* ongoing Projects slider ======>>>> */}
                        <Carousel className="carousel-wrapper"
                            // renderButtonGroupOutside={true}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            arrows={false}
                            focusOnSelect={true}
                            autoPlay={true}
                            swipeable={true}
                            draggable={true}
                            transitionDuration={900}
                            autoPlaySpeed={3000}
                            interval={3000}
                            transitionTime={12}
                            infinite={true}
                            keyBoardControl={true}
                            showDots={false}
                            // stopOnHover={false} // Disable pause on hover
                            emulateTouch={true} // Enable smooth scrolling
                            responsive={responsive} >

                            <div ><ListingCard onClick={"/ourproject/alphathum"} title={"Alphathum"} about={"Situated on a 26-acre plot, Cyberthum is at the forefront of technology.Cyberthum provides Noida with commercial real estate.."} style={true} imgUrl={"alphatthum.webp"} /></div>

                            <div ><ListingCard onClick={"/ourproject/cyberthum"} title={"CyberThum"} about={"Situated on a 26-acre plot, Cyberthum is at the forefront of technology.Cyberthum provides Noida with commercial real estate.."} style={true} imgUrl={"cyberThum.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/bhutanicitycenter150"} title={"Bhutani City Center 150"} about={"The new address for experiential shopping is 150 City Center. It provides a look into how retail and lifestyle areas may develop in the future."} style={true} imgUrl={"bhutaniCityCenter150.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/avenue62avenue133"} title={"Avenue 62"} about={"Future-ready retail spaces will provide more than just physical stores; they'll be gathering and interaction areas. ."} style={true} imgUrl={"avenue62.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/avenue133"} title={"Avenue 133"} about={"Bhutani TechnoPark in Noida offers well-designed, roomy office spaces for rent. Every benefit is present in the plan... "} style={true} imgUrl={"avenue133.jpg"} /></div>

                        </Carousel>
                        {/* ongoing Projects slider end ======>>>> */}
                    </div>

                    {/* Delivered projects slider */}
                    <div className="row p-slider pt-5">

                        <div className="slider-title ">
                            <h5>Delivered Projects</h5>
                        </div>

                        <Carousel className="carousel-wrapper"
                            renderButtonGroupOutside={true}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            arrows={false}
                            focusOnSelect={true}
                            autoPlay={true}
                            swipeable={true}
                            draggable={true}
                            transitionDuration={900}
                            autoPlaySpeed={3000}
                            infinite={true}
                            keyBoardControl={true}
                            showDots={false}
                            responsive={responsive} >

                            <div><ListingCard onClick={"/ourproject/cyberpark"} title={"Cyber Park"} about={"The construction and design of Cyber Park Office Spaces centers on IT infrastructure services. From setting up IT to supplying the necessary infrastructure...    "} style={true} imgUrl={"cyberPark.jpg"} /></div>

                            <div><ListingCard onClick={"/ourproject/citycentergzb"} title={"City Center GZB"} about={"For the past ten years, CITY CENTER GZB has proudly stood as Mohan Nagar, Ghaziabad's lone mall and top attraction. More than... "} style={true} imgUrl={"cityCenterGZB.jpg"} /></div>

                            <div><ListingCard onClick={"/ourproject/365office"} title={"365 Office"} about={"We came to the realization that workspaces serve more purposes than only work after going through the bizarre work-from-home era. It is an environment for knowledge.  "} style={true} imgUrl={"365Office.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/ithum"} title={"iThum"} about={"On its 5-acre site, Bhutani Group provides commercial office spaces in Noida. After it's finished, I-Thum will get an extra 5-acre or so."} style={true} imgUrl={"iThum.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/bhutanitechnopark"} title={"Bhutani Technopark"} about={"Office spaces in Noida that are well-designed and spacious are available at Bhutani TechnoPark. The proposal has all of the advantages... "} style={true} imgUrl={"bhutaniTechnoPark.jpg"} /></div>

                        </Carousel>
                        {/* delivered Projects slider end ======>>>> */}
                    </div>
                </div>
            </section>
            {/*Projects sections ends here -------->>>>> */}
            <Footer />

        </div>
        // Home page is ends is here---->
    )
}

