
import "../Hero/Hero.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListingCard from "../ListingCard/ListingCard"
import Slider from "../ProjectSlider/Slider";
import ImageSlider from "../Slider/Slider";
// import { useNavigate } from "react-router-dom";



// slider function for responsiveness .
export default function Hero() {
    // const navigate = useNavigate()
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className="home">
            <section className="h-wrapper ">
                <Slider />
            </section>
            <div className="section SliderSection ">
                <div className="col-12 minislider  p-4">
                <h1 className="text-center">A+ Developers</h1>
                    <ImageSlider />
                </div>
            </div>


            <section className="h-containt-wrapper p-2">
                {/*https://www.extramarks.com/static/media/line-orange.6f221145.webp 
                  https://masaischool.com/images/new-homepage/yellow-vector.svg
                   */}
                <div className="h-container z-3   ">
                    <h6>EXPERIENCE LUXURY WITH</h6>
                    <h1>BHUTANI INFRA   </h1>
                    <img loading="lazy" src="data:image/png;base64,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" alt="" />
                    {/* <div className="search-bar ">
                        <select id="citys" className="shadow">
                            <option value="All">All</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Gurugram">Gurugram</option>
                            <option value="Manesar">Noida</option>
                        </select>
                        <input className=" shadow" type="search" name="#" id="search-field" placeholder="Search Projects.." />
                    </div> */}
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
                {/* <div className="properties-btns text-center py-3 ">
                    <button className="btn btn-outline-dark me-1">Residential</button>
                    <button className="btn btn-outline-dark ms-1">Commercial</button>
                </div> */}
            </section>

            {/* poster is end here */}


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
                                <p className="mt-4 Para">Get Your Property from top-notch locations.</p>
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
            {/* Builders section is ends here ------>>>> */}

           

            {/*Projects sections starts here -------->>>>> */}
            <section className="p-wrapper">
                <div className="container">

                    {/* ongoing projects ======>>> */}
                    <div className="row p-slider pt-4">
                        <div className="slider-title ">
                            <h5>Ongoing Projects</h5>
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

                            <div ><ListingCard onClick={"/ourproject/alphathum"} title={"Alphathum"} about={"Standing at the cutting edge of technology, Cyberthum is spreaded in 26-acre .Cyberthum offers commercial property in Noida."} style={true} imgUrl={"alphatthum.webp"} /></div>

                            <div ><ListingCard onClick={"/ourproject/cyberthum"} title={"CyberThum"} about={"Standing at the cutting edge of technology, Cyberthum is spreaded in 26-acre .Cyberthum offers commercial property in Noida."} style={true} imgUrl={"cyberThum.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/bhutanicitycenter150"} title={"Bhutani City Center 150"} about={"City Center 150 is the new address for experiential retail. It offers a glimpse into the future of lifestyle leisure and retail areas."} style={true} imgUrl={"bhutaniCityCenter150.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/avenue62avenue133"} title={"Avenue 62"} about={"The future-ready retail space will offer a wider experience than just physical shops, but rather places in which to meet and engage ."} style={true} imgUrl={"avenue62.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/avenue133"} title={"Avenue 133"} about={"Avenue 133 is a luxurious project meticulously crafted to set a new standard for the future of retail. Its modern, elegant, and balanc."} style={true} imgUrl={"avenue133.jpg"} /></div>



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

                            <div><ListingCard onClick={"/ourproject/cyberpark"} title={"Cyber Park"} about={"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sint Labore Cupiditate Dolore Expedita, Esse Ipsam Molestias ."} style={true} imgUrl={"cyberPark.jpg"} /></div>

                            <div><ListingCard onClick={"/ourproject/citycentergzb"} title={"City Center GZB"} about={"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sint Labore Cupiditate Dolore Expedita, Esse Ipsam Molestias ."} style={true} imgUrl={"cityCenterGZB.jpg"} /></div>

                            <div><ListingCard onClick={"/ourproject/365office"} title={"365 Office"} about={"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sint Labore Cupiditate Dolore Expedita, Esse Ipsam Molestias ."} style={true} imgUrl={"365Office.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/ithum"} title={"iThum"} about={"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sint Labore Cupiditate Dolore Expedita, Esse Ipsam Molestias ."} style={true} imgUrl={"iThum.webp"} /></div>

                            <div><ListingCard onClick={"/ourproject/bhutanitechnopark"} title={"Bhutani Technopark"} about={"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sint Labore Cupiditate Dolore Expedita, Esse Ipsam Molestias ."} style={true} imgUrl={"bhutaniTechnoPark.jpg"} /></div>


                        </Carousel>
                        {/* delivered Projects slider end ======>>>> */}
                    </div>
                </div>
            </section>
            {/*Projects sections ends here -------->>>>> */}
        </div>
        // Home page is ends is here---->
    )
}

