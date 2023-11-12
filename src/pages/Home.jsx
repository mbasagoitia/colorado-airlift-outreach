import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import ContentRenderer from "../ContentRenderer";
import React, { useState, useEffect } from "react";

function Home () {
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const scrollToNavigation = () => {
          if (window.innerWidth > 400) {
            const navigationBar = document.querySelector("#navigation-bar");
    
            if (navigationBar) {
              window.scrollTo(0, navigationBar.offsetTop);
            }
          }
        };

        const scrollTimeout = setTimeout(scrollToNavigation, 100);
    
        return () => clearTimeout(scrollTimeout);
    
      }, []);

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
                <ContentRenderer content={markdownContent} />
                <hr></hr>
                <p className="hp-nonprofit-text">CALO is a Christian, faith-based 501(c)(3) non-profit organization.</p>
            </div>
        </Container>
        <Footer />
        </>
    )
}

export default Home;