import React from "react";
import "../../styles/find-cart-form.css";
import { Form, FormGroup } from "reactstrap";
const FindCarForm = () => {
    return (
        <Form className="form">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                <FormGroup className="form-group">
                    <input type="text" placeholder="From address" required />
                </FormGroup>
                <FormGroup className="form-group">
                    <input type="text" placeholder="To address" required />
                </FormGroup>
                <FormGroup className="form-group">
                    <input type="date" placeholder="Journey date" required />
                </FormGroup>
                <FormGroup className="form-group">
                    <input type="time" placeholder="Journey time " required className="journey-time"/>
                </FormGroup>
                <FormGroup className="select-group">
                    <select>
                        <option value="ac">AC Car</option>
                        <option value="non-ac">Non AC Car</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <button className="btn find-car-btn">Find Car</button>
                </FormGroup>
            </div>
        </Form>
    );
};

export default FindCarForm;
