import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import blogData from "../assets/data/blogData";
import Helmet from "../components/Helmet/Helmet";
import commentImg from "../assets/all-images/ava-1.jpg";
import "../styles/blog-details.css";

const BlogDetails = () => {
    const { slug } = useParams();
    const blog = blogData.find((blog) => blog.title === slug);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blog]);
    return (
        <Helmet title="Blog Post">
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="8">
                            <div className="blog-details">
                                <img
                                    src={blog.imgUrl}
                                    alt="image"
                                    className="w-100"
                                />
                                <h2 className="section-title">{blog.title}</h2>
                                <div className="blog-publisher d-flex align-items-center gap-4 mb-4">
                                    <span className="blog-author">
                                        <i className="ri-user-line"></i>
                                        {blog.author}
                                    </span>

                                    <span className="d-flex align-items-center gap-1 section-description">
                                        <i className="ri-calendar-line"></i>
                                        {blog.date}
                                    </span>

                                    <span className="d-flex gap-1 align-items-center search-description">
                                        <i className="ri-time-line"></i>
                                        {blog.time}
                                    </span>
                                </div>
                                <p className="section-description">
                                    {blog.description}
                                </p>
                                <h6 className="ps-5 fw-normal">
                                    <blockquote className="fs-4">
                                        {blog.quote}
                                    </blockquote>
                                </h6>
                                <p className="section-description">
                                    {blog.description}
                                </p>
                            </div>
                            <div className="comment-list mt-5">
                                <h4 className="mb-5">3 Comments </h4>
                                <div className="single-comment d-flex gap-3">
                                    <img src={commentImg} alt="commentor1" />
                                    <div className="comment-content ">
                                        <h6 className="fw-bold">David Visa</h6>
                                        <p className="section-description">
                                            14 July, 2023
                                        </p>
                                        <p className="section-description">
                                            It's always great to hear that. I
                                            have helped someone have a better
                                            experience. It's clear that this
                                            person put those tips into practice
                                            and saw positive results.
                                        </p>
                                        <span className="replay d-flex align-items-center gap-1">
                                            <i className="ri-reply-line"></i>
                                            Replay
                                        </span>
                                    </div>
                                </div>
                                {/* comment form */}
                                <div className="leave-comment-form mt-5">
                                    <h2>Leave a Comment</h2>
                                    <p className="section-description">
                                        You must sign in to make or comment a
                                        post
                                    </p>
                                    <Form>
                                        <FormGroup className="d-flex gap-3">
                                            <Input
                                                type="text"
                                                placeholder="Full Name"
                                            />
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <textarea
                                                rows="5"
                                                className="w-100 py-2 px-3"
                                                placeholder="Comment"
                                            ></textarea>
                                        </FormGroup>
                                        <button className="btn comment-btn mt-3">
                                            Post a Comment
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="4">
                            <div className="recent-post mb-4">
                                <h5 className="fw-bold">Recent Posts</h5>
                            </div>
                            {blogData.map((item) => (
                                <div
                                    className="recent-blog-post mb-4"
                                    key={item.id}
                                >
                                    <div className="recent-blog-item d-flex gap-3">
                                        <img
                                            src={item.imgUrl}
                                            alt={item.author}
                                            className="w-25 rounded-2"
                                        />
                                        <h6>
                                            <Link to={`/blogs/${item.title}`}>
                                                {blog.title}
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default BlogDetails;
