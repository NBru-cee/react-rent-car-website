import Slider from "react-slick";
import React from "react";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        auotoplay: true,
        speed: 1000,
        swipeToSlide: true,
        auotoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p className="section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque blanditiis quod amet recusandae dolores
                    provident, molestias enim. Rem earum consequuntur rerum quos
                    iusto saepe quae? Dolor recusandae vitae nulla, est quasi
                    cumque architecto minus! Iure voluptates facilis doloribus
                    recusandae beatae.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img
                        src={ava01}
                        alt="ava1"
                        className="w-25 h-25 rounded-2"
                    />
                    <div>
                        <h6 className="mb-0 mt-3">Jhon Doe</h6>
                        <p className="section-description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque blanditiis quod amet recusandae dolores
                    provident, molestias enim. Rem earum consequuntur rerum quos
                    iusto saepe quae? Dolor recusandae vitae nulla, est quasi
                    cumque architecto minus! Iure voluptates facilis doloribus
                    recusandae beatae.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img
                        src={ava02}
                        alt="ava1"
                        className="w-25 h-25 rounded-2"
                    />
                    <div>
                        <h6 className="mb-0 mt-3">Jhon Doe</h6>
                        <p className="section-description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque blanditiis quod amet recusandae dolores
                    provident, molestias enim. Rem earum consequuntur rerum quos
                    iusto saepe quae? Dolor recusandae vitae nulla, est quasi
                    cumque architecto minus! Iure voluptates facilis doloribus
                    recusandae beatae.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img
                        src={ava03}
                        alt="ava1"
                        className="w-25 h-25 rounded-2"
                    />
                    <div>
                        <h6 className="mb-0 mt-3">Jhon Doe</h6>
                        <p className="section-description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque blanditiis quod amet recusandae dolores
                    provident, molestias enim. Rem earum consequuntur rerum quos
                    iusto saepe quae? Dolor recusandae vitae nulla, est quasi
                    cumque architecto minus! Iure voluptates facilis doloribus
                    recusandae beatae.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img
                        src={ava04}
                        alt="ava1"
                        className="w-25 h-25 rounded-2"
                    />
                    <div>
                        <h6 className="mb-0 mt-3">Jhon Doe</h6>
                        <p className="section-description">Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonials;
