import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import MyCustomRenderer from "../CustomRenderer";
import React, { useState, useEffect } from "react";

function Home () {
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const markdownFilePath = "/content/pages/home.md";

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
        <>
        <Container fluid>
            <Header />    
            <Navigation />
            <ImageSlider />
            <div className="page-content">
                <MyCustomRenderer content={markdownContent} />
            </div>
            <hr></hr>
            <p className="hp-nonprofit-text">CALO is a Christian, faith-based 501(c)(3) non-profit organization.</p>
        </Container>
        <Footer />
        </>
    )
}

export default Home;