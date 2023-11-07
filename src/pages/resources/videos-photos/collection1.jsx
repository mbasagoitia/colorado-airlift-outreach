import PhotoCollection from "../../../components/PhotoCollection";

// Team of airplanes

const defaultImages = [
    "/images/resources/videos-photos/vp-img-11.jpg",
    "/images/resources/videos-photos/vp-img-51.jpg",
    "/images/resources/videos-photos/vp-img-50.mp4"
];

const collection = "collection1";

function Collection1() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection1;