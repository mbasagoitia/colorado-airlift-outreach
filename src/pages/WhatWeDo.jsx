import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function WhatWeDo () {
    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/what-we-do/wwd-header-img.png" alt="palm trees" className="header-img" />
        </div>
        <div className="page-content">
            <h1 className="mb-4">What We Do</h1>
            <div className="img-text-container">
                <img src="/images/what-we-do/wwd-optometrist-img.jpg" alt="optometrist" className="float-img right optometrist-img"/>
                <p>Our current mission emphasis includes Optometry and Ophthalmology Clinic weekends typically held from Thursday through Sunday on the fourth weekend in April and the third weekend in September, subject to weather and other unforeseen circumstances, at the El Buen Pastor Hospital, San Quintin, Baja, Mexico. See “Clinic Schedule” on this website for exact dates. During those weekends between 200 to 300 patients receive eye exams and glasses as needed, and many patients benefit from cataract removal and replacement lens implants. While patients and their children are waiting to be served, ministry teams comprised of CALO volunteers, joined with local church members, present Christian-based testimonials and teachings in a respectful and non-pressured manner to offer enduring hope and encouragement beyond the physical help that the clinic may provide.</p>
            </div>
            <p>Consideration is being given to conducting clinics in other areas of Baja in the future as resources allow.</p>
            <p>Transportation is typically provided by volunteer pilots departing from airports in Southern California and Western Colorado in privately-owned small aircraft for our four-day clinic weekends. Most of the day on Thursday and Sunday is needed to travel to and from the clinic which is located about one hour airtime south of the border. Accommodations include comfortable, clean, modern hotels, and team members enjoy meals at trusted local restaurants. Volunteers’ total costs for meals, accommodations, border crossing fees, and shared fuel are typically less than $500 for the weekend, depending on personal preferences, the point of departure, and the aircraft available.</p>
            <div className="img-wrapper my-4">
                <img src="/images/what-we-do/wwd-cliffs-img.jpg" alt="cliffs" className="cliffs-img"/>
            </div>
            <p>We encourage you to browse our website for more information and welcome you to apply to join our next trip. Volunteers are encouraged to register for a specific clinic at least 60 days before the scheduled clinic date. However, departing on a specific clinic trip is dependent on receiving the necessary combination of team members to support the clinic, as well as favorable weather forecasts for the weekend. Trip cancelations are uncommon, but possible.</p>
        </div>        
        <Footer />
        </Container>
    )
}

export default WhatWeDo;