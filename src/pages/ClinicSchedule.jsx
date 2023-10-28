import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MyCustomRenderer from "../CustomRenderer";
import React, { useState, useEffect } from "react";

function ClinicSchedule () {
    
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const markdownFilePath = "/content/pages/clinic-schedule.md";

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
            <img src="/images/clinic-schedule/cs-header.jpg" alt="doctor with patient" className="header-img" />
        </div>
        <div className="page-content">
            <MyCustomRenderer content={markdownContent} />
        </div>        
        <Footer />
        </Container>
    )
}

export default ClinicSchedule;