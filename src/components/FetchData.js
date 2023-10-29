import { useState, useEffect } from "react";

function FetchData() {

    const defaultImages = [
        { image: "/images/clinic-schedule/cs-header.jpg" }
    ]

    const [photoData, setPhotoData] = useState({
        title: "Photo Collection 1",
        description: "Collection Description",
        images: defaultImages
    });

    useEffect(() => {
        const fetchUserImages = async () => {
            try {
                const res = await fetch("https://harmonious-toffee-b74135.netlify.app/api/images/uploads");
                if (!res.ok) {
                    throw new Error('Failed to fetch user images');
                }
                const userUploadedImages = await res.json();
                setPhotoData((prevData) => ({
                    ...prevData,
                    images: [...defaultImages, ...userUploadedImages]
                }))
            } catch (err) {
                console.error(err);
            }
        }
        fetchUserImages();
    }, [])

    return (
        <>
        <h2>{photoData.title}</h2>
        <p>{photoData.description}</p>
        <div className="image-list">
            {photoData.images.map((image, idx) => {
                return <img src={image.image} alt={`Image ${idx}`} key={idx} />
            })}
        </div>
        </>
    )
}

export default FetchData;