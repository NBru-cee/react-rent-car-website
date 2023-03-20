import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
const AboutSection = ({ aboutClass }) => {
    return (
        <section
            className="about-section"
            style={
                aboutClass === "aboutPage"
                    ? { marginTop: "0px" }
                    : { marginTop: "280px" }
            }
        >
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about-section-content">
                            <h4 className="section-subtitle">About us</h4>
                            <h2 className="section-title">
                                Welcome to our rent service
                            </h2>
                            <p className="section-description">
                                We offer a convenient and affordable way to
                                explore new places and travel with ease. Thank
                                you for choosing us for your rental car needs!
                            </p>
                            <div className="about-section-item d-flex align-items-center">
                                <p className="section-description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i>
                                    Explore with confidence .
                                </p>
                                <p className="section-description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i>
                                    Explore with confidence .
                                </p>
                            </div>
                            <div className="about-section-item d-flex align-items-center">
                                <p className="section-description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i>
                                    Explore with confidence .
                                </p>
                                <p className="section-description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i>
                                    Explore with confidence .
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="about-img">
                            <img
                                src={aboutImg}
                                alt="bmw-offer"
                                className="w-100"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;
