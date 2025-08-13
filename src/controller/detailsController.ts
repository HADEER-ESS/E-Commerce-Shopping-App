import { useEffect, useRef, useState } from "react";
import { FlatList, ImageSourcePropType } from "react-native";

export default function detailsController(images: ImageSourcePropType[]) {
    const carouselRef = useRef<FlatList>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    useEffect(() => {

        const intervalTimes = setInterval(() => {
            let nextIdx = (currentImageIndex + 1) % images.length


            carouselRef.current?.scrollToIndex({ index: nextIdx, animated: true })
            setCurrentImageIndex(nextIdx)

        }, 4000)

        return () => clearInterval(intervalTimes)
    }, [currentImageIndex, images.length])


    return {
        carouselRef,
        currentImageIndex
    }
}