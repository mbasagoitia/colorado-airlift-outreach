import { Container } from "react-bootstrap";
import { Link } from "react-bootstrap/lib/Navbar";
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
            <Link to={"resources/videos-and-photos/team-of-airplanes"}>Team of Airplanes</Link>
            <Link to={"resources/videos-and-photos/colorado-team"}>Colorado Team</Link>
            <Link to={"resources/videos-and-photos/flying-to-mexico"}>Flying to Mexico</Link>
            <Link to={"resources/videos-and-photos/patients-waiting-for-eye-clinic"}>Patients Waiting for Eye Clinic</Link>
            <Link to={"resources/videos-and-photos/optometry-clinic"}>Optometry Clinic</Link>
            <Link to={"resources/videos-and-photos/eye-surgery-clinic"}>Eye Surgery Clinic</Link>
            <Link to={"resources/videos-and-photos/spiritual-ministry"}>Spiritual Ministry</Link>
            <Link to={"resources/videos-and-photos/celebrating-a-successful-clinic"}>Celebrating a Successful Clinic</Link>
        </div>
        <Footer />
        </Container>
    )
}

export default VideosAndPhotos;