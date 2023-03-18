import "../../styles/become-driver-section.css";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../assets/all-images/cars-img/toyota-offer-2.png";
import React from "react";

const BecomeDriverSection = () => {
    return (
        <section className="become-driver">
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" className="become-driver-img">
                        <img
                            src={driverImg}
                            alt="driver img"
                            className="w-100"
                        />
                    </Col>

                    <Col lg="6" md="6" sm="12" >
                        <h2 className="section-title become-driver-title">
                            Do you want to earn with us? So don't be late
                        </h2>
                        <button className="btn become-driver-btn mt-4">Become a Driver</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BecomeDriverSection;
