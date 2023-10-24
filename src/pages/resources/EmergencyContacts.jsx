import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function EmergencyContacts () {
    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/resources/checklist-img.png" alt="people sitting around a table" className="header-img" />
        </div>
        <div className="page-content">
            <h1>Emergency Contacts</h1>
            <p className="mt-4"><strong>USA:</strong></p>
            <p>Bill Roesch, 970-901-9205 (cell and text), <a href="mailto:b_roesch@yahoo.com">b_roesch@yahoo.com</a></p>
            <p>USA-based Team Contact volunteers who can often be reached in Mexico during a Clinic weekend by dialing or texting directly (emails are unreliable while in MX):</p>
            <p>Rick Weaver, 970-209-8706, <a href="mailto:rickweaver21@gmail.com">rickweaver21@gmail.com</a></p>
            <p>Ed Greager, 909-354-7323, <a href="mailto:714pilot@gmail.com">714pilot@gmail.com</a></p>
            
            <p className="mt-4"><strong>La Villa de San Quintin Hotel:</strong></p>
            <p>O11-52 Country Code + 616-165-1800 office</p>
            <p>011-52 Country Code + 616-165-1415 FAX</p>
            <p><a href="http://www.hotellavilla.biz/sanquintin">http://www.hotellavilla.biz/sanquintin</a></p>
            
            <p className="mt-4"><strong>El Buen Pastor Hospital:</strong></p>
            <p>011-52 Country Code + 616-165-2653 or 616-165-3498</p>
        </div>
        <Footer />
        </Container>
    )
}

export default EmergencyContacts;