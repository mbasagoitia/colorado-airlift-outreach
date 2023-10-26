import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Contact () {
    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/contact/contact-header.jpg" alt="CALO team and volunteers" className="header-img" />
        </div>
        <div className="page-content">
            <h1 className="mb-4">Contact</h1>
            <p><strong><u>By Email or Phone</u></strong></p>
            <p>Richard (Rick) Weaver, President</p>
            <p>Colorado AirLift Outreach</p>
            <p>rickweaver21@gmail.com</p>
            <p>970-209-8706</p>
            <hr />
            <p><strong><u>By Mail</u></strong></p>
            <p>Colorado AirLift Outreach</p>
            <p>P.O. Box 954</p>
            <p>Montrose, CO 81402</p>
            <hr />
            <p><strong><u>By Physical Address</u></strong></p>
            <p>Colorado AirLift Outreach</p>
            <p>C/O Vision Source, Attn. Dr. Wesley Cooper</p>
            <p>400 South Nevada</p>
            <p>Montrose, CO 81401</p>
            <p>Site Phone Number: 970-249-3914</p>
            <hr />
            <p><strong><u>CALO Board Members</u></strong></p>
            <p>Rick Weaver, President, <a href="mailto:rickweaver21@gmail.com">rickweaver21@gmail.com</a>, 970-209-8706</p>
            <p>Dr. Wesley Cooper, <a href="mailto:drcooper@montrose.net">drcooper@montrose.net</a>, 970-249-3914 (wk), 970-249-5823 (hm),  970-596-7378 (cell)</p>
            <p>Dr. Sandy Brownson, <a href="mailto:rsbod@hotmail.com">rsbod@hotmail.com</a>, 970-433-4246</p>
        </div>
        <Footer />
        </Container>
    )
}

export default Contact;