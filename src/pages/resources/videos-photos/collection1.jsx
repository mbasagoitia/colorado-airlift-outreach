import { Container } from "react-bootstrap";
import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import React, { useState, useEffect } from "react";
import frontMatter from "front-matter";

function PhotoCollection1() {
    
    const [imagePaths, setImagePaths] = useState("");

    const defaultImages = ["/images/home/hp-img-1.JPG"];

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
            let frontMatterData = frontMatter(data);
            setImagePaths(frontMatterData.attributes.images.map((image) => image.image));
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
                <div className="image-container">
                {defaultImages.length > 0 ? defaultImages.map((imagePath, index) => (
                <img key={index} src={imagePath} alt={`Image ${index + 1}`} />
                )): null}
                {imagePaths ? imagePaths.map((imagePath, index) => (
                <img key={index} src={imagePath} alt={`Image ${index + 1}`} />
                )): null}
                </div>
            </div>
        <Footer />
    </Container>
  );
}

export default PhotoCollection1;
