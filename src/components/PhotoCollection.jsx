import React, { useState, useEffect } from "react";
import frontMatter from "front-matter";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import PhotoGrid from "./PhotoGrid";

function PhotoCollection({ defaultImages, collection }) {
    
    const [title, setTitle] = useState("");
    const [imagePaths, setImagePaths] = useState("");

    // Fetch and display images from the corresponding markdown file, which is updated every time a user uploads an image
    
    useEffect(() => {
        const markdownFilePath = `/content/pages/resources/videos-and-photos/${collection}.md`;

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
            setTitle(frontMatter.attributes.title);
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])

    const allImages = [...defaultImages, ...imagePaths];

    return (
        <Container fluid>
            <Header />
            <Navigation />
            <div className="full-page-img">
                <img src="/images/resources/emergency-contacts-header.jpg" alt="CALO team" className="header-img" />
            </div>
            <div className="page-content">
                <h1>{title}</h1>
                <p className="text-muted">Click on any photo to enlarge</p>
                <PhotoGrid images={allImages} />
            </div>
            <Footer />
        </Container>
    );
}

export default PhotoCollection;