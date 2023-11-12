import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContentRenderer from "../ContentRenderer";
import React, { useState, useEffect } from "react";

function PilotInformation () {

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
        const markdownFilePath = "/content/pages/pilot-information.md";

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
            <img src="/images/resources/pilot-header-img.png" alt="airplane" className="header-img" />
        </div>
        <div className="page-content">
            <ContentRenderer content={markdownContent} />
        </div>
        <Footer />
        </Container>
    )
}

export default PilotInformation;