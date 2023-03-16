import { Col } from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cart-item.css"
const CartItem = (props) => {
    const {imgUrl, model, carName, automatic, speed, price } = props.item;
    return (
        <Col lg="4" md="4" sm="6" className="mb-5">
            <div className="car-item">
                <div className="car-img">
                    <img src={imgUrl} alt={carName} />
                </div>

                <div className="car-item-content mt-4">
                    <h4 className="section-title text-center">{carName}</h4>
                    <h6 className="rent-price text-center">
                        ${price}.00 <span>/Day</span>
                    </h6>
                    <div className="car-item-info d-flex-align-iems-center justify-content-between mt-3 mb-4">
                        <span className="d-flex align-iems  gap-1">
                            <i className="ri-car-line"></i>
                            {model}
                        </span>
                        <span className="d-flex align-iems  gap-1">
                            <i className="ri-settings-2-line"></i>
                            {automatic}
                        </span>
                        <span className="d-flex align-iems  gap-1">
                            <i className="ri-timer-flash-line"></i>
                            {speed}
                        </span>
                    </div>
                    <button className="car-item-btn car-btn-rent w-50">
                        <Link to={`/cars/${carName}`}>Rent</Link>
                    </button>
                    <button className="car-item-btn car-btn-details w-50">
                        <Link to={`/cars/${carName}`}>Details</Link>
                    </button>
                </div>
            </div>
        </Col>
    );
};

export default CartItem;
