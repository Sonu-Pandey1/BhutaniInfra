
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
                        <p>Join Bhutani Group for an exciting career exploration where your ambitions meet limitless opportunities to achieve your full potential. At Bhutani Infra, we value your success and offer unlimited prospects for your professional growth. Let`s navigate the path to your desired career, uncover your genuine capabilities, and build your future together. Begin your journey with us and discover the vast possibilities that lie ahead.</p>
                    </div>
                </div>

                <div className="row Accordion my-4 p-2">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >Sales Executive Intern</Accordion.Header>
                            <Accordion.Body  >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>React Developer Intern</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                
                <div className="intrestPara">
                    <p>Interested in Joining us? Send Your CV on <span>hr@butanigroup.com</span></p>
                </div>

            </div>
        </section>
    )
}
