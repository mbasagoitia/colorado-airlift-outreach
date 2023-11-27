import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PhotoPreviews from "../../components/PhotoPreviews";

function VideosAndPhotos () {

    useEffect(() => {
        const scrollToNavigation = () => {
          if (window.innerWidth > 400) {
            const navigationBar = document.querySelector("#navigation-bar");
    
            if (navigationBar) {
              window.scrollTo(0, navigationBar.offsetTop);
            }
          }
        };

        const scrollTimeout = setTimeout(scrollToNavigation, 100);
    
        return () => clearTimeout(scrollTimeout);
    
      }, []);

    const linkInfo = [
        {
            title: "Team of Airplanes",
            photo1: "/images/resources/videos-photos/vp-img-11.jpg",
            photo2: "/images/resources/videos-photos/vp-img-51.jpg"
        },
        {
            title: "Colorado Team",
            photo1: "/images/resources/videos-photos/vp-img-8.jpg",
            photo2: "/images/resources/videos-photos/vp-img-10.jpg"
        },
        {
            title: "Flying to Mexico",
            photo1: "/images/resources/videos-photos/vp-img-59.jpg",
            photo2: "/images/resources/videos-photos/vp-img-60.jpg",
        },
        {
            title: "Patients Waiting for Eye Clinic",
            photo1: "/images/resources/videos-photos/vp-img-13.jpg",
            photo2: "/images/resources/videos-photos/vp-img-15.jpg"
        },
        {
            title: "Optometry Clinic",
            photo1: "/images/resources/videos-photos/vp-img-5.jpg",
            photo2: "/images/resources/videos-photos/vp-img-7.jpg"
        },
        {
            title: "Eye Surgery Clinic",
            photo1: "/images/resources/videos-photos/vp-img-3.jpg",
            photo2: "/images/resources/videos-photos/vp-img-4.jpg"
        },
        {
            title: "Spiritual Ministry",
            photo1: "/images/resources/videos-photos/vp-img-2.jpg",
            photo2: "/images/resources/videos-photos/vp-img-1.jpg"
        },
        {
            title: "Celebrating a Successful Clinic",
            photo1: "/images/resources/videos-photos/vp-img-1.jpg",
            photo2: "/images/resources/videos-photos/vp-img-23.jpg"
        }
    ];

    return (
        <Container fluid>
            <Header />
            <Navigation />
        <div className="full-page-img">
            <img src="/images/resources/videos-photos/videos-photos-header.png" alt="outreach program" className="header-img" />
        </div>
        <div className="page-content">
            <h1>Videos and Photos</h1>
            <div className="collection-link-container mt-5">
                {linkInfo.map((obj) => {
                    return <PhotoPreviews title={obj.title} link={obj.title.toLowerCase().split(" ").join("-")} photo1={obj.photo1} photo2={obj.photo2}/>
                })}
            </div>
        </div>
        <Footer />
        </Container>
    )
}

export default VideosAndPhotos;