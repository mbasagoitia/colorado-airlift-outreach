import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function Home () {
    return (
        <>
        <Container fluid>
            <Header />    
            <Navigation />
            <ImageSlider />
        <div className="page-content">
            <h1>Home</h1>
            <p className="hp-description mt-4"><strong>C</strong>olorado <strong>A</strong>ir<strong>L</strong>ift <strong>O</strong>utreach <strong>(CALO)</strong> has organized groups of volunteers who have served the needy in Baja, Mexico since 1999. Volunteers over the years have included optometrists, ophthalmologists, doctors, dentists, chiropractors, nurses, hygienists, interpreters, pilots, ministry teams, helpers, and just about anyone willing to serve others with a fun team having a common purpose of serving others and making a difference. The lives of patients and volunteers alike are changed from a single weekend of service.</p>
        </div>
        <hr></hr>
        <p className="hp-nonprofit-text">CALO is a Christian, faith-based 501(c)(3) non-profit organization.</p>
        </Container>
        <Footer />
        </>
    )
}

export default Home;