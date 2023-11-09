import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContentRenderer from "../ContentRenderer";
import React, { useState, useEffect } from "react";

function WhatWeDo () {

    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const markdownFilePath = "/content/pages/what-we-do.md";

        fetch(markdownFilePath)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response error")
            }
            return res.text();
        })
        .then((data) => {
            setMarkdownContent(data);
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])

    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/what-we-do/wwd-header.jpg" alt="CALO team standing near airplane" className="header-img" />
        </div>
        <div className="page-content wwd mb-4">
            <ContentRenderer content={markdownContent} />
        </div>        
        <Footer />
        </Container>
    )
}

export default WhatWeDo;