function PhotoPreviews({ photo1, photo2 }) {
    return (
        <>
        <img src={photo1} alt="small preview" className="photo-preview photo-preview-1" />
        <img src={photo2} alt="small preview" className="photo-preview photo-preview-2" />
        </>
    )
}

export default PhotoPreviews;