
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdCall } from "react-icons/md";
import { NavLink } from "react-router-dom"
import "../Footer/Footer.scss"


export default function Footer() {
    return (
        <>
            <footer className="footer pt-4 mt-5">
                <div className="container-fulid">
                    <div className="container">
                        <div className="row row1">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-2 col1  ">
                                <div className="innercol1">
                                    <img loading="lazy" src="https://www.bhutanigroup.com/front/img/logo2.png" alt="img" />
                                </div>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col2">
                                <div className="innercol2">
                                    <h4>Important</h4>
                                    <div className="impLinks">
                                        <ul>
                                            <NavLink to={"/"} className={"navlink"}><li>Media</li></NavLink>
                                            <NavLink to={"/blogs"} className={"navlink"}><li>Blogs</li></NavLink>
                                            <NavLink className={"navlink"}><li>Bhutani Care</li></NavLink>
                                            <NavLink to={"/contact"} className={"navlink"}><li>Contact Us</li></NavLink>
                                            <NavLink to={"/career"} className={"navlink"}><li>Work With Us</li></NavLink>
                                            <NavLink to={"/privacy&policy"} className={"navlink"}> <li>Privacy & Policy</li></NavLink>
                                            <NavLink to={"/term-and-condition"} className={"navlink"}><li>Terms & Conditions</li></NavLink>
                                            <NavLink to={"/sitemap"} className={"navlink"}> <li>Sitemap</li></NavLink>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-12 col-sm-10 col-md-6 col-lg-4 col3 ">
                                <div className="innercol3">
                                    <h4>Latest Projects</h4>
                                    <div className="f-projects1 d-flex mb-4">
                                        <div className="f-imgwrapper">
                                            <img loading="lazy" className=" img-fluid img-thumbnail" src="https://www.bhutanigroup.com/assets/images/projects/sm-62avenue.jpg" alt="" />
                                        </div>
                                        <div className="f-contentwrapper">
                                            <h6>Avenue 62</h6>
                                            <p>Avenue 62 is the perfect amalgamation of an architectural form and a work of art.</p>
                                        </div>
                                    </div>

                                    <div className="f-projects2 d-flex justify-content-around mb-4">
                                        <div className="f-imgwrapper">
                                            <img loading="lazy" className=" img-fluid img-thumbnail" src="https://www.bhutanigroup.com/assets/images/projects/sm-62avenue.jpg" alt="" />
                                        </div>
                                        <div className="f-contentwrapper">
                                            <h6>Cyberthum</h6>
                                            <p>Cyberthum stands at the cutting edge of technology that drives tomorrow.</p>
                                        </div>
                                    </div>

                                    <div className="f-projects3 d-flex  justify-content-around mb-4">
                                        <div className="f-imgwrapper">
                                            <img loading="lazy" className=" img-fluid img-thumbnail" src="https://www.bhutanigroup.com/assets/images/projects/sm-alpha.png" alt="" />
                                        </div>
                                        <div className="f-contentwrapper">
                                            <h6>Alphathum</h6>
                                            <p> Noidas First 25 Acres Integrated Development.Noidas First 25 Acres</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-3  col4 ">
                                <div className="innercol4">
                                    <h6>Contact</h6>
                                    <p>Plot 1, Sector - 90, Noida Expressway <br />Noida, Uttar Pradesh - 201305 </p>
                                    <p><HiOutlineEnvelope className="ficon" /> +91 982-182-8429</p>
                                    <p><MdCall className="ficon" /> info@bhutanigroup.com</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <hr className="hr" />
                    <div className="container">
                        <div className="row row2 ">
                            <div className="col innerrow2col1">
                                <h6 className="text-center">DISCLAIMER</h6>
                                <p className="row2para1">The Pictures and details are tentative depictions only. This is not a legal offer. Mentioned features are indicative and are subject to change without any prior notice as may be decided by the company or competent authority. Terms and Conditions Apply. Special Scheme by the developer.1Sq Mtr =10.764 Sq. Ft & 1Sq. Yd. = 0.83 Sq. Mtr.</p>

                                <p className="row2para2">© Copyright Bhutani Infra. Design & Development By Bhutani Group </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
