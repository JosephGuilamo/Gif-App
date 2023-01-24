import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";


export const useFetchGif = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading,setLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGif(category);
        setImages(newImages);
        setLoading(false)
    };

    useEffect(() => {
        getImages();
        // .then(newImages => setImages(newImages));
    }, []);
        
    return {
        images,
        isLoading,
    }
}