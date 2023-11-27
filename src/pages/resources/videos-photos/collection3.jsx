import PhotoCollection from "../../../components/PhotoCollection";

// Flying to Mexico

const defaultImages = [
    "/images/resources/videos-photos/vp-img-59.jpg",
    "/images/resources/videos-photos/vp-img-60.jpg",
    "/images/resources/videos-photos/vp-img-61.jpg",
    "/images/resources/videos-photos/vp-img-67.jpg",
    "/images/resources/videos-photos/vp-img-73.mp4",
];
const collection = "collection3";

function Collection3() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection3;