import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";
import { Products } from "../data/products";



export default function handleCartController() {

    const [isExist, setIsExist] = useState<boolean>(false)
    const [productCount, setProductCount] = useState<number>(0)





    //function that save data in AsyncStorage as 2D array form from Map
    //use AsyncStorage to save data
    //saved data (id, quantity) to minimalize state, and keep it up to date when dispatch remains later.
    const saveCart = async (cartMap: Map<number, number>) => {
        try {
            const cartArray = Array.from(cartMap.entries())

            await AsyncStorage.setItem("cartItems", JSON.stringify(cartArray))
        } catch (error) {
            console.error("Error saving cart:", error)
        }
    };

    //get data from Storage in Map form
    const loadCart = async (): Promise<Map<number, number>> => {
        try {
            const data = await AsyncStorage.getItem("cartItems")

            if (data) {
                return new Map(JSON.parse(data))
            }
            else {
                return new Map()
            }
        } catch (error) {
            console.error("Error loading cart:", error)
            return new Map()
        }
    };

    //function to check if item is already exist in Cart or not
    //if YES => increment count
    //if NO => set new item with quantity 1
    const handleCartFunctionalityIncrement = async (productId: number) => {
        const cart = await loadCart()

        if (!cart.has(productId)) {
            cart.set(productId, 1)
        } else {
            cart.set(productId, cart.get(productId)! + 1)
        }

        await saveCart(cart)
        await isProductExist(productId)
    };

    //function to check if item is already exist in Cart or not
    //if YES => decrement count or delete
    const handleCartFunctionalityDecrement = async (productId: number) => {
        const cart = await loadCart()

        if (cart.get(productId)!! > 1) {
            cart.set(productId, cart.get(productId)! - 1)
        }
        else {
            console.warn("delete is called")
            cart.delete(productId)
        }

        await saveCart(cart)
        await isProductExist(productId)
    }

    const isProductExist = async (id: number) => {
        const cart = await loadCart()
        setIsExist(cart.has(id))
        setProductCount(cart.get(id) || 0)
    }




    return {
        handleCartFunctionalityIncrement,
        handleCartFunctionalityDecrement,
        isProductExist,
        productCount,
        isExist,
    }
}