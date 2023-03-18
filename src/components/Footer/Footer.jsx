import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import "../../styles/footer.css";

const quickLinks = [
    { path: `/about`, display: `About` },
    { path: `#`, display: `Privacy Policy` },
    { path: `/cars`, display: `CarListing` },
    { path: `/blogs`, display: `Blog` },
    { path: `/contact`, display: `Contact` },
];

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="12">
                        <div className="logo footer-logo">
                            <h1>
                                <Link
                                    to="/home"
                                    className="d-flex align-items-center gap-2"
                                >
                                    <i className="ri-car-line"></i>
                                    <span>
                                        Rent Car <br /> Service
                                    </span>
                                </Link>
                            </h1>
                        </div>
                        <div className="footer-logo-content">
                            <p>
                                Rent a car from us and drive with confidence. We
                                have a range of vehicles, flexible rental terms,
                                and affordable rates to suit your needs. Our
                                friendly staff will help you choose the perfect
                                vehicle for your trip. Book today and hit the
                                road!
                            </p>
                        </div>
                    </Col>

                    <Col lg="2" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className="footer-link-title">Quick Links</h5>
                            <ListGroup>
                                {quickLinks.map((item, index) => (
                                    <ListGroupItem
                                        key={index}
                                        className="p-0 mt-3 quick-link"
                                    >
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className="footer-link-title mb-4">
                                Head Office
                            </h5>
                            <p className="office-info">
                                986 KT Remera, Kigali, Rwanda
                            </p>
                            <p className="office-info">
                                Phone: +250-794-587-5365
                            </p>
                            <p className="office-info">
                                Email: bruce111@gmail.com
                            </p>
                            <p className="office-info">
                                Office Time: 10am - 7pm
                            </p>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="12 ">
                        <div className="mb-4">
                            <h5 className="footer-link-title">Newsletter</h5>
                            <p className="section-description">
                                Subscribe our newsletter
                            </p>
                            <div className="newsletter">
                                <input type="text" placeholder="Email" />
                                <span>
                                    <i className="ri-send-plane-line"></i>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg="12">
                        <div className="footer-bottom">
                            <p className="section-description d-flex gap-1 justify-content-center align-items-center pt-4">
                                <i className="ri-copyright-line"></i>Copyright
                                {year}, Developed by Bruce Nkundabagenzi. All
                                Rights reserved
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
