import PhotoCollection from "../../../components/PhotoCollection";

// Patients Waiting for Eye Clinic

const defaultImages = [
"/images/resources/videos-photos/vp-img-13.jpg",
"/images/resources/videos-photos/vp-img-15.jpg", 
"/images/resources/videos-photos/vp-img-16.jpg",
"/images/resources/videos-photos/vp-img-25.jpg",
"/images/resources/videos-photos/vp-img-36.jpg",
"/images/resources/videos-photos/vp-img-39.jpg"
];

const collection = "collection4";

function Collection4() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection4;