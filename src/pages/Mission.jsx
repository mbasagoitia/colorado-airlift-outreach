import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContentRenderer from "../ContentRenderer";
import React, { useState, useEffect } from "react";

function Mission () {
        const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const markdownFilePath = "/content/pages/mission.md";

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
            <img src="/images/mission/mp-header-img.jpg" alt="row of airplanes" className="header-img" />
        </div>
        <div className="page-content mission">
            <ContentRenderer content={markdownContent} />
        </div>
        <Footer />
        </Container>
    )
}

export default Mission;