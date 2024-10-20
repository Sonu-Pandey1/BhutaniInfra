
import "../ContactUs/Contact.scss"
import Form from "../Form/Form"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


export default function Contact() {
    return (
        <section className="contact-wrapper">
            <Header />
            <div className="whatsapplogo">
                <a aria-label="Chat on WhatsApp" href="https://wa.me/918766325423?text=I'm%20interested%20in%20your%20Propertys%20for%20Buy"> <img alt="Chat on WhatsApp" src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" width={50} />
                </a>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="img-wrapper">
                        <img loading="lazy" src="https://www.bhutanigroup.com/assets/images/pages/d8e51fbd9ff67cd7f982e313442138b1.jpg" alt="careerThumnail" />
                    </div>
                </div>
            </div>

            <div className="container  pt-5">
                <div className="row">
                    {/* form */}
                    <Form size={6} />
                    <div className="col address-detail  col-12 form-col2 col-sm-12 col-md-12 col-lg-6">

                        <div className="row form-col2row1">
                            <div className="col col-3">

                                <div className="iconWrapper text-center">
                                    <i className="fa fa-home"></i>
                                </div>

                            </div>

                            <div className="col col-9">
                                <h4>Registered Office</h4>
                                <p>505 5th Floor Tower-A Pioneer Urban Square Sector 62, Haryana 122102</p>
                            </div>

                        </div>

                        <div className="row   form-col2row2">

                            <div className="col col-3">

                                <div className="iconWrapper">
                                    <i className="fa fa-home"></i>
                                </div>

                            </div>

                            <div className="col col-9">
                                <h4>Marketing Office</h4>
                                <p>505 5th Floor Tower-A Pioneer Urban Square Sector 62, Haryana 122102</p>
                            </div>

                        </div>

                        <div className="row   form-col2row3">

                            <div className="col col-3">

                                <div className="iconWrapper ">
                                    <i className="fa fa-phone"></i>
                                </div>

                            </div>

                            <div className="col col-9">
                                <h4>Call us now</h4>
                                <p>Tel : +91 931 000 0053 </p>
                            </div>

                        </div>

                        <div className="row   form-col2row4">

                            <div className="col col-3">

                                <div className="iconWrapper ">
                                    <i className="fa fa-envelope"></i>
                                </div>

                            </div>

                            <div className="col col-9">
                                <h4>Email us</h4>
                                <p>info@turnkeyreality.com</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </section>
    )
}
