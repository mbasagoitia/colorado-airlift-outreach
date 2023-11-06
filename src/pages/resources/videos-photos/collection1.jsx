import PhotoCollection from "../../../components/PhotoCollection";

// Team of airplanes

const defaultImages = [];
const collection = "collection1";

function Collection1() {
    return <PhotoCollection defaultImages={defaultImages} collection={collection} />
}

export default Collection1;