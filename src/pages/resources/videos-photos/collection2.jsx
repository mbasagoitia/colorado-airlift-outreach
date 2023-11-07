import PhotoCollection from "../../../components/PhotoCollection";

// Colorado Team

const defaultImages = [
    "/images/resources/videos-photos/vp-img-8.jpg",
    "/images/resources/videos-photos/vp-img-10.jpg",
    "/images/resources/videos-photos/vp-img-38.jpg"
];

const collection = "collection2";

function Collection2() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection2;