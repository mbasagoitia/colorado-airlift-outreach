import PhotoCollection from "../../../components/PhotoCollection";

// Flying to Mexico

const defaultImages = ["/images/resources/videos-photos/vp-img-12.jpg"];
const collection = "collection3";

function Collection3() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection3;