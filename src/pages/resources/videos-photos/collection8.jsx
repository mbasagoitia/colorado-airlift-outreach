import PhotoCollection from "../../../components/PhotoCollection";

// Celebrating a Successful Clinic

const defaultImages = [
    "/images/resources/videos-photos/vp-img-1.jpg",
    "/images/resources/videos-photos/vp-img-23.jpg",
    "/images/resources/videos-photos/vp-img-43.jpg"
];

const collection = "collection8";

function Collection8() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection8;