import PhotoCollection from "../../../components/PhotoCollection";

// Eye Surgery Clinic

const defaultImages = [
    "/images/resources/videos-photos/vp-img-3.jpg",
    "/images/resources/videos-photos/vp-img-4.jpg",
    "/images/resources/videos-photos/vp-img-6.jpg",
    "/images/resources/videos-photos/vp-img-14.jpg",
    "/images/resources/videos-photos/vp-img-22.jpg",
    "/images/resources/videos-photos/vp-img-24.jpg",
    "/images/resources/videos-photos/vp-img-26.jpg",
    "/images/resources/videos-photos/vp-img-28.jpg",
    "/images/resources/videos-photos/vp-img-32.jpg",
    "/images/resources/videos-photos/vp-img-33.jpg",
    "/images/resources/videos-photos/vp-img-34.jpg",
    "/images/resources/videos-photos/vp-img-35.jpg",
    "/images/resources/videos-photos/vp-img-42.jpg",
    "/images/resources/videos-photos/vp-img-52.jpg",
    "/images/resources/videos-photos/vp-img-53.jpg",
    "/images/resources/videos-photos/vp-img-54.jpg",
    "/images/resources/videos-photos/vp-img-55.jpg",
    "/images/resources/videos-photos/vp-img-56.mp4"
];

const collection = "collection6";

function Collection6() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection6;