import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function VideosAndPhotos () {
    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/resources/videos-photos/videos-photos-header.png" alt="outreach program" className="header-img" />
        </div>
        <div className="page-content">
            <h1>Videos and Photos</h1>
            <Link to={"team-of-airplanes"}>Team of Airplanes</Link>
            <Link to={"colorado-team"}>Colorado Team</Link>
            <Link to={"flying-to-mexico"}>Flying to Mexico</Link>
            <Link to={"patients-waiting-for-eye-clinic"}>Patients Waiting for Eye Clinic</Link>
            <Link to={"optometry-clinic"}>Optometry Clinic</Link>
            <Link to={"eye-surgery-clinic"}>Eye Surgery Clinic</Link>
            <Link to={"spiritual-ministry"}>Spiritual Ministry</Link>
            <Link to={"celebrating-a-successful-clinic"}>Celebrating a Successful Clinic</Link>
        </div>
        <Footer />
        </Container>
    )
}

export default VideosAndPhotos;