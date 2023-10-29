import FetchData from "../../../components/FetchData";

function PhotoCollection1({ title, description, images }) {
    return (
        <>
        <h1>Collection 1</h1>
        {/* Will need to specify props to know which collection to fetch from */}
        <FetchData />
        </>
    )
}

export default PhotoCollection1;