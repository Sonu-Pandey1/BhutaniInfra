
import "../ContactUs/Contact.scss"
import Form from "../Form/Form"


export default function Contact() {
    return (
        <section className="contact-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="img-wrapper">
                        <img loading="lazy" src="https://www.bhutanigroup.com/assets/images/pages/d8e51fbd9ff67cd7f982e313442138b1.jpg" alt="careerThumnail" />
                    </div>
                </div>
            </div>

            <div className="container  p-5">
                <div className="row">
                    {/* form */}
                    <Form size={6}/>
                    
                    <div className="col address-detail  col-12 form-col2 col-sm-12 col-md-12 col-lg-6 pt-4">
                        <div className="row form-col2row1">
                            <div className="col col-3">
                                <div className="iconWrapper">
                                    <i className="fa fa-home"></i>
                                </div>
                            </div>
                            <div className="col col-9">
                                <h4>Registered Office</h4>
                                <p>Plot No. 3 & 4, 2nd Floor, A Block Market, Savitri Bhawan, Preet Vihar, Delhi - 110092</p>
                            </div>
                        </div>

                        <div className="row form-col2row2">
                            <div className="col col-3">
                                <div className="iconWrapper">
                                <i className="fa fa-home"></i>
                                </div>
                            </div>
                            <div className="col col-9">
                                <h4>Marketing Office</h4>
                                <p>Plot 1, Sector - 90, Noida Expressway, <br />Noida, Uttar Pradesh - 201305</p>
                            </div>
                        </div>

                        <div className="row form-col2row3">
                            <div className="col col-3">
                               <div className="iconWrapper">
                               <i className="fa fa-phone"></i>
                               </div>
                            </div>
                            <div className="col col-9">
                                <h4>Call us now</h4>
                                <p>Tel : +91 2344 234 234 </p>
                            </div>
                        </div>

                        <div className="row form-col2row4">
                            <div className="col col-3">
                               <div className="iconWrapper">
                               <i className="fa fa-envelope"></i>
                               </div>
                            </div>
                            <div className="col col-9">
                                <h4>Email us</h4>
                                <p>info@bhutanigroup.com</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
