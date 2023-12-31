import PhotoCollection from "../../../components/PhotoCollection";

// Spiritual Ministry

const defaultImages = [
    "/images/resources/videos-photos/vp-img-2.jpg",
    "/images/resources/videos-photos/vp-img-48.mp4",
    "/images/resources/videos-photos/vp-img-49.mp4"
];

const collection = "collection7";

function Collection7() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection7;