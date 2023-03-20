import React from "react";
import "../../styles/our-members.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
const OUR_MEMBERS = [
    {
        name: "Jhon Doe",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava01,
    },
    {
        name: "Bella Kaitlin",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava02,
    },
    {
        name: "Josh Renner",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava03,
    },
    {
        name: "Mary Jane",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava04,
    },
];

const OurMembers = () => {
    return (
        <>
            {OUR_MEMBERS.map((item, index) => (
                <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
                    <div className="single-member">
                        <div className="single-member-img">
                            <img
                                src={item.imgUrl}
                                alt="avatar"
                                className="w-100"
                            />
                            <div className="single-member-social">
                                <Link to={item.fbUrl}>
                                    <i className="ri-facebook-line"></i>
                                </Link>
                                <Link to={item.instUrl}>
                                    <i className="ri-instagram-line"></i>
                                </Link>
                                <Link to={item.twitUrl}>
                                    <i className="ri-twitter-line"></i>
                                </Link>
                                <Link to={item.linkedinUrl}>
                                    <i className="ri-linkedin-line"></i>
                                </Link>
                            </div>
                        </div>
                        <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                        <p className="section-description text-center">
                            {item.experience}
                        </p>
                    </div>
                </Col>
            ))}
        </>
    );
};

export default OurMembers;
