
import Accordion from 'react-bootstrap/Accordion';
import "../Career/Career.scss"


export default function Career() {
    return (
        <section className="career-wrapper">

            <div className="container-fluid">
                <div className="row">
                    <div className="img-wrapper">
                        <img loading="lazy" src="https://www.bhutanigroup.com/assets/images/pages/e60330768bf8e53e0cfd5ecc36ef97cd.jpg" alt="careerThumnail" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row c-title">

                    <div className="careerTitle p-3">
                        <h3>Come, Grow With Us</h3>
                        <p>Join our dynamic and growing team at,TURNKEY REALITY Pvt. Ltd., where we are passionate about real estate and dedicated to delivering exceptional services to our clients. We believe that our success stems from the talent and commitment of our team members, and we are always looking for driven individuals who share our vision and values At,TURNKEY REALITY Pvt. Ltd., you`ll find a collaborative and supportive work environment that fosters professional growth and provides exciting opportunities for career advancement. We value diversity and inclusion, and we strive to create an inclusive workplace where everyone`s contributions are respected and celebrated. With a focus on innovation and a commitment to excellence, we offer great packages, comprehensive benefits, and a range of employee perks. Whether you`re an experienced professional or just starting your career. Join us in shaping the future of real estate </p>
                    </div>

                </div>

                <div className="row Accordion my-4 p-2">
                    <Accordion defaultActiveKey="0">

                        <Accordion.Item eventKey="0">
                            <Accordion.Header >Sales Executive Intern</Accordion.Header>
                            <Accordion.Body  >
                                Sales Executives are responsible for negotiating sales, costs, deliveries and specifications with buyers and business executives. When their customers make a purchase, they also liaise with shipping companies to track the progress of orders. Other duties and responsibilities of Sales Executives include:
                                Determine clients`needs and financials abilities to propose solutions that suit them.
                                Intermediate negotiation processes, consult clients on market conditions, prices, mortgages, legal requirements and related matters, ensuring a fair and honest dealing.
                                Acting as a point of contact between customers and companies .
                                Negotiating terms of sales and agreements and closing sales with customers.
                                Gathering market and customer information to figure out the customer needs.
                                Responding to customer queries and resolving their objections to get them to make a purchase.
                                Advising product developers on improvements to include in forthcoming product developments and discussing special promotions.
                                Creating proposal documents as part of the formal bidding procedure.
                                Inspecting inventory in stock and the quality of the product on display.
                                Providing customers with detailed and accurate quotations and cost calculations.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>React Developer Intern</Accordion.Header>
                            <Accordion.Body>
                                We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.
                                Responsibilities
                                Developing new user-facing features using React.js.
                                Building reusable components and front-end libraries for future use.
                                Translating designs and wireframes into high quality code.
                                Optimizing components for maximum performance across a vast array of web-capable devices and browsers.
                                Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.
                                Skills
                                Thorough understanding of React.js and its core principles.
                                Experience with popular React.js workflows (such as Flux or Redux).
                                Familiarity with newer specifications of EcmaScript.
                                Experience with data structure libraries (e.g., Immutable.js).
                                Knowledge of isomorphic React is a plus.
                                Familiarity with RESTful APIs.
                                Knowledge of modern authorization mechanisms, such as JSON Web Token.
                                Familiarity with modern front-end build pipelines and tools.
                                Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>

                <div className="intrestPara">
                    <p>Interested in Joining us? Send Your CV on <span>info@turnkeyreality.com</span></p>
                </div>

            </div>
        </section>
    )
}
