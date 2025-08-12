import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, ReactNode, useContext, useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import { Products } from '../data/products'

type CartProductItem = {
    id: number,
    image: ImageSourcePropType,
    name: string | undefined,
    price: number | undefined,
    quantity: number
}

type cartContextDataType = {
    cartData: CartProductItem[],
    isProductExist: boolean,
    totalProductCount: number,
    totalProductPrice: number,
    singleProductCount: number,
    incrementAddCartItem: (product_id: number) => void,
    decrementRemoveCartItem: (product_id: number) => void,
    isExistProduct: (pro_id: number) => void,
    clearCartData: () => void
}


const CartContext = createContext<cartContextDataType | undefined>(undefined)

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartData, setCartData] = useState<CartProductItem[]>([])
    const [isProductExist, setIsProductExist] = useState<boolean>(false)
    const [singleProductCount, setSingleProductCount] = useState<number>(0)
    const [totalProductCount, setTotalProductCount] = useState<number>(0)
    const [totalProductPrice, setTotalProductPrice] = useState<number>(0)


    // Helper functions interact directly with AsyncStorage
    const loadProductData = async (): Promise<Map<number, number>> => {
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
    }

    const saveItemToCart = async (cartMap: Map<number, number>) => {
        try {
            const cartArray = Array.from(cartMap.entries())

            await AsyncStorage.setItem("cartItems", JSON.stringify(cartArray))
        } catch (error) {
            console.error("Error saving cart:", error)
        }
    };

    const isExistProduct = async (id: number) => {
        const cart = await loadProductData()
        setIsProductExist(cart.has(id))
        setSingleProductCount(cart.get(id) || 0)
    }

    const getCartScreenData = async () => {
        const cartMap = await loadProductData()
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

        setTotalProductCount(totalCount)
        setTotalProductPrice(totalPrice)
        setCartData(products)
    }

    const incrementAddCartItem = async (productId: number) => {
        const cart = await loadProductData()

        if (!cart.has(productId)) {
            cart.set(productId, 1)
        } else {
            cart.set(productId, cart.get(productId)! + 1)
        }

        await saveItemToCart(cart)
        await getCartScreenData()
        await isExistProduct(productId)
    };

    const decrementRemoveCartItem = async (productId: number) => {
        const cart = await loadProductData()

        if (cart.get(productId)!! > 1) {
            cart.set(productId, cart.get(productId)! - 1)
        }
        else {
            console.warn("delete is called")
            cart.delete(productId)
        }

        await saveItemToCart(cart)
        await getCartScreenData()
        await isExistProduct(productId)
    }

    const clearCartData = async () => {
        await AsyncStorage.removeItem("cartItems")
        await getCartScreenData()
        setTotalProductCount(0)
        setTotalProductPrice(0)
    }


    return (
        <CartContext value={{ singleProductCount, isProductExist, isExistProduct, totalProductCount, totalProductPrice, cartData, clearCartData, decrementRemoveCartItem, incrementAddCartItem }}>
            {children}
        </CartContext>
    )
}

export default CartProvider


//create context Hook

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
}
