import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function Links () {
    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/resources/links-header-img.png" alt="airplane" className="header-img" />
        </div>
        <div className="page-content">
            <h1 className="mb-4">Links</h1>
            <p>AOPA - <a href="http://www.aopa.org/Flight-Planning/Mexico">http://www.aopa.org/Flight-Planning/Mexico</a></p>
            <p>EAPISfile.com (US and MX EAPIS filing service provider) - <a href="https://www.eapisfile.com">https://www.eapisfile.com</a></p>
            <p>U.S. Customs Stickers - <a href="https://dtops.cbp.dhs.gov">https://dtops.cbp.dhs.gov</a></p>
            <p>EAPIS – USA - <a href="https://eapis.cbp.dhs.gov">https://eapis.cbp.dhs.gov</a></p>
            <p>Liga - <a href="https://www.ligainternational.org/web/Liga/default.asp">https://www.ligainternational.org/web/Liga/default.asp</a></p>
            <p>Flying Samaritans - <a href="http://www.flyingsamaritans.com">http://www.flyingsamaritans.com</a></p>
            <p>Baja Bush Pilots Association - <a href="http://www.bajabushpilots.com">http://www.bajabushpilots.com</a></p>
        </div>
        <Footer />
        </Container>
    )
}

export default Links;