import PhotoCollection from "../../../components/PhotoCollection";

// Optometry Clinic

const defaultImages = [
    "/images/resources/videos-photos/vp-img-5.jpg",
    "/images/resources/videos-photos/vp-img-7.jpg",
    "/images/resources/videos-photos/vp-img-9.jpeg",
    "/images/resources/videos-photos/vp-img-17.jpg",
    "/images/resources/videos-photos/vp-img-18.jpg",
    "/images/resources/videos-photos/vp-img-19.jpg",
    "/images/resources/videos-photos/vp-img-20.jpg",
    "/images/resources/videos-photos/vp-img-21.jpg",
    "/images/resources/videos-photos/vp-img-27.jpg",
    "/images/resources/videos-photos/vp-img-29.jpg",
    "/images/resources/videos-photos/vp-img-30.jpg",
    "/images/resources/videos-photos/vp-img-31.jpg",
    "/images/resources/videos-photos/vp-img-37.jpg",
    "/images/resources/videos-photos/vp-img-40.jpg",
    "/images/resources/videos-photos/vp-img-41.jpg",
    "/images/resources/videos-photos/vp-img-44.jpg",
    "/images/resources/videos-photos/vp-img-45.jpeg",
    "/images/resources/videos-photos/vp-img-46.jpeg",
    "/images/resources/videos-photos/vp-img-47.jpeg",
    "/images/resources/videos-photos/vp-img-57.mp4",
    "/images/resources/videos-photos/vp-img-58.jpg",
    "/images/resources/videos-photos/vp-img-59.jpeg"
];

const collection = "collection5";

function Collection5() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection5;