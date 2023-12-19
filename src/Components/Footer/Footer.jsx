
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
                                            <NavLink to={"/"} className={"navlink"}><li>Home</li></NavLink>
                                            <NavLink to={"/blog"} className={"navlink"}><li>Blogs</li></NavLink>
                                            <NavLink to={"/about"} className={"navlink"}><li>About Us</li></NavLink>
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
                                <div className="innercol3 ">
                                    <h4>Latest Projects</h4>
                                    <div className="f-projects1 d-flex mb-4">
                                        <div className="f-imgwrapper">
                                            <img loading="lazy" className=" img-fluid img-thumbnail" src="https://www.bhutanigroup.com/assets/images/projects/sm-62avenue.jpg" alt="" />
                                        </div>
                                        <div className="f-contentwrapper">
                                            <h6>Avenue 62</h6>
                                            <p>Avenue 62 is the ideal combination of artwork and architectural form.</p>
                                        </div>
                                    </div>

                                    <div className="f-projects2 d-flex justify-content-around mb-4">
                                        <div className="f-imgwrapper">
                                            <img loading="lazy" className=" img-fluid img-thumbnail" src="https://www.bhutanigroup.com/assets/images/projects/sm-62avenue.jpg" alt="" />
                                        </div>
                                        <div className="f-contentwrapper">
                                            <h6>Cyberthum</h6>
                                            <p>Cyberthum is at the forefront of the technologies of the future.</p>
                                        </div>
                                    </div>

                                    <div className="f-projects3 d-flex  justify-content-around mb-4">
                                        <div className="f-imgwrapper">
                                            <img loading="lazy" className=" img-fluid img-thumbnail" src="https://www.bhutanigroup.com/assets/images/projects/sm-alpha.png" alt="" />
                                        </div>
                                        <div className="f-contentwrapper">
                                            <h6>Alphathum</h6>
                                            <p>First 25 Acres of Noidas Development Integrated.First 25 Acres of Noidas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-3  col4 ">
                                <div className="innercol4">
                                    <h6>Contact</h6>
                                    <p>505 5th Floor Tower-A Pioneer Urban Square Sector 62, Haryana 122102 </p>
                                    <p><HiOutlineEnvelope className="ficon" /> +91 931-000-0053</p>
                                    <p><MdCall className="ficon" /> info@turnkeyreality.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className="hr" />
                    <div className="container">
                        <div className="row row2 ">
                            <div className="col innerrow2col1">
                                <h6 className="text-center">DISCLAIMER</h6>
                                <p className="row2para1">Only approximate portrayals are made in the pictures and information. This offer is not legitimate. The features listed are illustrative and could change at any time without notice at the company`s or an appropriate authority`s discretion. There are terms and conditions. Unique Plan from the creator.One square yard is equal to 0.83 square meters and one square mile is equal to 10.764 square feet.</p>

                                <p className="row2para2">@ TURNKEY REALITY Pvt. Ltd, All right reserverd. Design & Development By SONU PANDEY For TURNKEY REALITY . </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}