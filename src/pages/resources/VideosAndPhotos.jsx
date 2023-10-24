import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function VideosAndPhotos () {
    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/resources/videos-photos/videos-photos-header.png" alt="outreach program volunteers" className="header-img" />
        </div>
        <div className="page-content">
            <h1>Videos and Photos</h1>
            <div className="video-photo-wrapper d-flex flex-column justify-content-center mt-5">
                <img src="/images/resources/videos-photos/vp-img-1.jpg" alt="volunteers sitting around a table" className="vp-img" />
                <img src="/images/resources/videos-photos/vp-img-2.jpg" alt="volunteers and CALO members" className="vp-img" />
                <img src="/images/resources/videos-photos/vp-img-3.jpg" alt="volunteers and CALO members" className="vp-img" />
                <img src="/images/resources/videos-photos/vp-img-4.jpg" alt="volunteers and CALO members" className="vp-img" />
                <img src="/images/resources/videos-photos/vp-img-5.jpg" alt="volunteers and CALO members" className="vp-img" />
                <img src="/images/resources/videos-photos/vp-img-6.jpg" alt="volunteers and CALO members" className="vp-img" />
                <img src="/images/resources/videos-photos/vp-img-7.jpg" alt="aerial view of Mexico" className="vp-img" />
                <img src="/images/resources/videos-photos/vp-img-8.jpg" alt="volunteers and CALO members" className="vp-img" />
            </div>
        </div>
        <Footer />
        </Container>
    )
}

export default VideosAndPhotos;