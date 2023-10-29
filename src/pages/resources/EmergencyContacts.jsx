import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import MyCustomRenderer from "../../CustomRenderer";
import React, { useState, useEffect } from "react";

function EmergencyContacts () {

    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const markdownFilePath = "/content/pages/resources/emergency-contacts.md";

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
            <img src="/images/resources/emergency-contacts-header.jpg" alt="CALO team" className="header-img" />
        </div>
        <div className="page-content">
            <MyCustomRenderer content={markdownContent} />
        </div>
        <Footer />
        </Container>
    )
}

export default EmergencyContacts;