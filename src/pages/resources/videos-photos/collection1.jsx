import { Container } from "react-bootstrap";
import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import React, { useState, useEffect } from "react";
import grayMatter from "gray-matter";

function PhotoCollection1() {
    
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const markdownFilePath = "/content/pages/resources/videos-and-photos/collection1.md";

        fetch(markdownFilePath)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response error")
            }
            return res.text();
        })
        .then((data) => {
            setMarkdownContent(grayMatter(data));
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])


  // Extract image paths from the front matter
  const imagePaths = markdownContent.images.map((image) => image.image);

  return (
    <Container fluid>
        <Header />
            <Navigation />
            <div className="full-page-img">
                <img src="/images/resources/emergency-contacts-header.jpg" alt="CALO team" className="header-img" />
            </div>
            <div className="page-content">
                <div className="image-container">
                {/* Render images */}
                {imagePaths.map((imagePath, index) => (
                <img key={index} src={imagePath} alt={`Image ${index + 1}`} />
                ))}
                </div>
            </div>
        <Footer />
    </Container>
  );
}

export default PhotoCollection1;
