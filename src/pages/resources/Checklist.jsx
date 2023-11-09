import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContentRenderer from "../../ContentRenderer";
import React, { useState, useEffect } from "react";

function Checklist () {

    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const markdownFilePath = "/content/pages/resources/clinic-trip-checklist.md";

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
            <img src="/images/resources/checklist-img.png" alt="people sitting around a table" className="header-img" />
        </div>
        <div className="page-content">
            <ContentRenderer content={markdownContent} />
        </div>        
        <Footer />
        </Container>
    )
}

export default Checklist;