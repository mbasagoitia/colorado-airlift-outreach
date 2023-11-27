import PhotoCollection from "../../../components/PhotoCollection";

// Team of airplanes

const defaultImages = [
    "/images/resources/videos-photos/vp-img-11.jpg",
    "/images/resources/videos-photos/vp-img-51.jpg",
    "/images/resources/videos-photos/vp-img-50.mp4",
    "/images/resources/videos-photos/vp-img-62.jpg",
    "/images/resources/videos-photos/vp-img-66.jpg",
    "/images/resources/videos-photos/vp-img-68.jpg",
    "/images/resources/videos-photos/vp-img-72.jpg",
    "/images/resources/videos-photos/vp-img-74.jpg",
    "/images/resources/videos-photos/vp-img-75.jpg",
    "/images/resources/videos-photos/vp-img-76.jpg",
    "/images/resources/videos-photos/vp-img-77.jpg",
    "/images/resources/videos-photos/vp-img-78.jpg",
];

const collection = "collection1";

function Collection1() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection1;