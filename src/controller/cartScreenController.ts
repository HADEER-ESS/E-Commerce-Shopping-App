import AsyncStorage from "@react-native-async-storage/async-storage"
import { Products } from "../data/products"
import { ImageSourcePropType } from "react-native"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export type CartProductItem = {
    id: number,
    image: ImageSourcePropType,
    name: string | undefined,
    price: number | undefined,
    quantity: number
}

export default function cartScreenController() {

    const [totalItemsCount, setTotalItemsCount] = useState<number>(0)
    const [totalItemsPrice, setTotalItemsPrice] = useState<number>(0)
    const [cartProductData, setCartProductData] = useState<CartProductItem[]>([])

    useEffect(() => { getCartScreenData() }, [])

    //fuction to get cart product data for Cart screen
    const getCartScreenData = async () => {
        console.warn("callllllllllllllled")
        const data = await AsyncStorage.getItem("cartItems")
        const cartMap = data ? new Map(JSON.parse(data)) : new Map()
        const arrayData: number[][] = Array.from(cartMap.entries()) //[[id, count]]
        let totalPrice = 0
        let totalCount = 0
        let products = []

        for (let [id, count] of arrayData) {
            let product = Products.find((pro) => pro.id === id)
            totalCount += count
            totalPrice += (product?.price!! * count)
            let cartItem = {
                id: id,
                image: product?.images[0],
                name: product?.name,
                price: product?.price,
                quantity: count
            }
            products.push(cartItem)
        }
        console.warn("new items count ", totalCount, "\n total price ", totalPrice)

        setTotalItemsCount(totalCount)
        setTotalItemsPrice(totalPrice)
        setCartProductData(products)
    }

    const resetAllCartData = async () => {
        await AsyncStorage.clear()
        setTotalItemsCount(0)
        setTotalItemsPrice(0)
    }

    return {
        getCartScreenData,
        resetAllCartData,
        cartProductData,
        totalItemsCount,
        totalItemsPrice
    }
}