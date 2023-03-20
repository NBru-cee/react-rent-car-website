import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Contact = () => {
    return (
        <Helmet title="Contact">
            <CommonSection title="Contact" />
            <section>
                <Container>
                    <Row>
                        <Col lg="7" md="7">
                            <h6 className="fw-bold"></h6>
                            <Form>
                                <FormGroup className="contact-form">
                                    <input placeholder="Your Name" />
                                </FormGroup>
                                <FormGroup className="contact-form">
                                    <input placeholder=" Email" />
                                </FormGroup>

                                <FormGroup className="contact-form">
                                    <textarea
                                        rows="5"
                                        placeholder="Message"
                                        className="textarea"
                                    ></textarea>
                                </FormGroup>
                                <button
                                    className="btn, contact-btn btn"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;
