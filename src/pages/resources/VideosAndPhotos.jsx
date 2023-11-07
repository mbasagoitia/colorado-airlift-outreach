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
                <Link to={"colorado-team"}><PhotoPreviews title={"Colorado Team"} photo1={firstPhotos[1]} photo2={secondPhotos[1]}/></Link>
                <Link to={"flying-to-mexico"}><PhotoPreviews title={"Flying to Mexico"} photo1={firstPhotos[2]} photo2={secondPhotos[2]}/></Link>
                <Link to={"patients-waiting-for-eye-clinic"}><PhotoPreviews title={"Patients Waiting for Eye Clinic"} photo1={firstPhotos[3]} photo2={secondPhotos[3]}/></Link>
                <Link to={"optometry-clinic"}><PhotoPreviews title={"Optometry Clinic"} photo1={firstPhotos[4]} photo2={secondPhotos[4]}/></Link>
                <Link to={"eye-surgery-clinic"}><PhotoPreviews title={"Eye Surgery Clinic"} photo1={firstPhotos[5]} photo2={secondPhotos[5]}/></Link>
                <Link to={"spiritual-ministry"}><PhotoPreviews title={"Spiritual Ministry"} photo1={firstPhotos[6]} photo2={secondPhotos[6]}/></Link>
                <Link to={"celebrating-a-successful-clinic"}><PhotoPreviews title={"Celebrating a Successful Clinic"} photo1={firstPhotos[7]} photo2={secondPhotos[7]}/></Link>
            </div>
        </div>
        <Footer />
        </Container>
    )
}

export default VideosAndPhotos;