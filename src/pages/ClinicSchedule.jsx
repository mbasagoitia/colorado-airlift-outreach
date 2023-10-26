import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function ClinicSchedule () {
    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/clinic-schedule/cs-header.jpg" alt="doctor with patient" className="header-img" />
        </div>
        <div className="page-content">
            <h1>Clinic Schedule</h1>
            <p className="mt-4">We are currently directing our resources in support of spring and fall four-day weekend flights at the El Buen Pastor Hospital, San Quintin, Baja, Mexico. The general schedule is for Thursday through Sunday clinics the fourth weekend in April and the third weekend in September.</p>
            <p>For <strong>2022</strong>, the clinic dates are:</p>
            <p><strong>SPRING CLINIC</strong></p>
            <p>Thursday, April 28 – Sunday, May 1</p>
            <p><strong>FALL CLINIC</strong></p>
            <p>Thursday, September 15 – Sunday, September 18 </p>
        </div>        
        <Footer />
        </Container>
    )
}

export default ClinicSchedule;