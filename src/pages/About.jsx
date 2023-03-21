import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";
const About = () => {
    return (
        <Helmet title="About">
            <CommonSection title="About Us" />
            <AboutSection aboutClass="aboutPage" />

            <section className="about-page-section">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <div className="about-page-img">
                                <img
                                    src={driveImg}
                                    alt="drive image"
                                    className="w-100 rounded-3"
                                />
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="about-page-content">
                                <h2 className="section-title">
                                    We Are Committed to Provide Safe Ride
                                    Solutions
                                </h2>
                                <p className="section-description">
                                    We are committed to providing safe ride
                                    solutions to all customers. Our vehicles are
                                    regularly inspected and maintained to meet
                                    high safety standards, and our drivers are
                                    trained to prioritize safe driving
                                    practices.
                                </p>
                                <p className="section-description">
                                    At our website, safety is our top priority.
                                    Our drivers follow traffic rules, avoid
                                    distractions, and drive defensively, while
                                    our vehicles are equipped with a range of
                                    safety features. Choose our car rental
                                    services for a safe and enjoyable journey.
                                </p>
                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <span className="fs-4">
                                        <i className="ri-phone-line"></i>
                                    </span>
                                    <div>
                                        <h6 className="section-subtitle">
                                            Need Any Help
                                        </h6>
                                        <h4>+00123456789</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <BecomeDriverSection />

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section-subtitle">Experts</h6>
                            <h2 className="section-title">Our Members</h2>
                        </Col>

                        <OurMembers />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default About;
