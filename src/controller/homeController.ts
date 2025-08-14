import { useCallback, useEffect, useState } from "react";
import { Products } from "../data/products";
import { ProductsType } from "../data/productType";

export default function homeController() {
    const [productArr, setProductArr] = useState<ProductsType[]>([])
    const [isloading, setIsLoading] = useState<boolean>(false)
    const [refreshing, setRefreshing] = useState<boolean>(false)

    const randomProductsOrder = useCallback(() => {
        let normalArr: ProductsType[] = [...Products]
        for (let i = normalArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = normalArr[i];
            normalArr[i] = normalArr[j];
            normalArr[j] = temp;
        }

        setProductArr(normalArr)
    }, [])

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
            randomProductsOrder()
        }, 500)

        return () => clearTimeout(timer)
    }, [randomProductsOrder])

    const pullToRefreshProducts = useCallback(() => {
        setRefreshing(true)

        setTimeout(() => {
            randomProductsOrder()
            setRefreshing(false)
        }, 1000)
    }, [randomProductsOrder])


    return {
        productArr,
        refreshing,
        isloading,
        pullToRefreshProducts
    }
}