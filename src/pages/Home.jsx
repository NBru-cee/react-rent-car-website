import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import "../styles/find-cart-form.css";
import AboutSection from "../components/UI/AboutSection";
const Home = () => {
    return (
        <Helmet title="Home">
            {/* hero section */}
            <section className="p-0 hero-slider-section">
                <HeroSlider />
                <div className="hero-form">
                    <Container>
                        <Row className="form-row">
                            <Col lg="4" md="4">
                                <div className="find-cars-left">
                                    <h2>Find your best car here</h2>
                                </div>
                            </Col>

                            <Col lg="8" md="8" sm="12">
                                <FindCarForm />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* about section */}
            <AboutSection/>
        </Helmet>
    );
};

export default Home;
