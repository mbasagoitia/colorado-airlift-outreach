import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PhotoPreviews from "../../components/PhotoPreviews";

function VideosAndPhotos () {

    const firstPhotos = ["/images/resources/videos-photos/vp-img-11.jpg", "/images/resources/videos-photos/vp-img-8.jpg", "/images/resources/videos-photos/vp-img-12.jpg", "/images/resources/videos-photos/vp-img-13.jpg", "/images/resources/videos-photos/vp-img-5.jpg", "/images/resources/videos-photos/vp-img-3.jpg", "/images/resources/videos-photos/vp-img-2.jpg", "/images/resources/videos-photos/vp-img-1.jpg"];
    const secondPhotos = ["/images/resources/videos-photos/vp-img-51.jpg", "/images/resources/videos-photos/vp-img-10.jpg", null, "/images/resources/videos-photos/vp-img-15.jpg", "/images/resources/videos-photos/vp-img-7.jpg", "/images/resources/videos-photos/vp-img-4.jpg", "/images/resources/videos-photos/vp-img-48.mp4", "/images/resources/videos-photos/vp-img-23.jpg"];

    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/resources/videos-photos/videos-photos-header.png" alt="outreach program" className="header-img" />
        </div>
        <div className="page-content">
            <h1>Videos and Photos</h1>
            <div className="collection-link-container d-flex">
                <Link to={"team-of-airplanes"}><PhotoPreviews title={"Team of Airplanes"} photo1={firstPhotos[0]} photo2={secondPhotos[0]}/></Link>
                <Link to={"colorado-team"}>Colorado Team</Link>
                <Link to={"flying-to-mexico"}>Flying to Mexico</Link>
                <Link to={"patients-waiting-for-eye-clinic"}>Patients Waiting for Eye Clinic</Link>
                <Link to={"optometry-clinic"}>Optometry Clinic</Link>
                <Link to={"eye-surgery-clinic"}>Eye Surgery Clinic</Link>
                <Link to={"spiritual-ministry"}>Spiritual Ministry</Link>
                <Link to={"celebrating-a-successful-clinic"}>Celebrating a Successful Clinic</Link>
            </div>
        </div>
        <Footer />
        </Container>
    )
}

export default VideosAndPhotos;