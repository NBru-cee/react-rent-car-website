import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import BlogLIst from "../components/UI/BlogList"

const Blog = () => {
    return <Helmet title="Blogs">
        <CommonSection title="Blogs" />
        
        <section>
            <Container>
                <Row>
                    <BlogLIst/>
                    <BlogLIst/>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Blog;
