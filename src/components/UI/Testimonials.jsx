import Slider from "react-slick";
import React from "react";
import "../../styles/testimonial.css";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
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
                    I recently used a car rental website and I couldn't be more
                    satisfied with their service. The website was easy to
                    navigate. The rental process was smooth. I highly recommend
                    this website to anyone looking for a hassle-free car rental
                    experience.
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
                    Wow ! I was able to find a great car at a reasonable price,
                    and the process was quick and painless. The customer service
                    was also top-notch, as they were responsive and helpful when
                    I had a question. Definitely be using this website!
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img
                        src={ava02}
                        alt="ava1"
                        className="w-25 h-25 rounded-2"
                    />
                    <div>
                        <h6 className="mb-0 mt-3">Mary Jane</h6>
                        <p className="section-description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section-description">
                    I cannot recommend this car rental website enough! The
                    website was incredibly user-friendly and allowed me to
                    easily find the perfect car for my trip. The car was clean
                    and well-maintained. Overall, a fantastic experience that
                    exceeded my expectations.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img
                        src={ava03}
                        alt="ava1"
                        className="w-25 h-25 rounded-2"
                    />
                    <div>
                        <h6 className="mb-0 mt-3">Josh Renner</h6>
                        <p className="section-description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section-description">
                    I recently used this car rental website and I was blown away
                    by their service. The website was easy to navigate, and the
                    rental process was fast and efficient. I highly recommend
                    this website for anyone in need of a reliable car rental
                    service.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img
                        src={ava04}
                        alt="ava1"
                        className="w-25 h-25 rounded-2"
                    />
                    <div>
                        <h6 className="mb-0 mt-3">Bella Kaitlin</h6>
                        <p className="section-description">Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonials;
