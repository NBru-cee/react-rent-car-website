import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css"
const About = () => {
    return (
        <Helmet>
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Minus fugit sapiente quod
                                    ea vitae eaque architecto explicabo,
                                    mollitia animi, reprehenderit suscipit
                                    aliquam laborum sint voluptatibus dolor,
                                    consequatur totam nulla quam iste amet
                                    doloremque facilis dolorum vel fugiat.
                                </p>
                                <p className="section-description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Atque non unde, omnis
                                    veritatis praesentium consectetur alias
                                    voluptatum.
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
