import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import { Products } from '../data/products'

export type CartProductItem = {
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
    const [cartMap, setCartMap] = useState<Map<number, number>>(new Map())
    const [isProductExist, setIsProductExist] = useState<boolean>(false)
    const [singleProductCount, setSingleProductCount] = useState<number>(0)
    const [totalProductCount, setTotalProductCount] = useState<number>(0)
    const [totalProductPrice, setTotalProductPrice] = useState<number>(0)

    const productsMap = useMemo(() => new Map(Products.map(pro => [pro.id, pro])), [])

    useEffect(() => {
        loadProductData().then(product => {
            setCartMap(product)
            getCartScreenData(product)
        })
    }, [])

    //fuction to get cart product data to be display in Cart screen
    // update TOTAL (count, price) for products
    const getCartScreenData = (cartData: Map<number, number>) => {
        let totalPrice = 0
        let totalCount = 0
        let products: CartProductItem[] = []

        for (let [id, count] of cartData.entries()) {
            const product = productsMap.get(id)
            if (!product) continue

            totalCount += count
            totalPrice += product.price * count
            products.push({
                id,
                image: product.images[0],
                name: product.name,
                price: product.price,
                quantity: count
            })
        }

        setTotalProductCount(totalCount)
        setTotalProductPrice(totalPrice)
        setCartData(products)
    }


    // Helper functions (1,2) interact directly with AsyncStorage

    //function that save data in AsyncStorage as 2D array form from Map
    //saved data (id, quantity) to minimalize state, and keep it up to date when dispatch remains later.
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

    //get data from Storage in Map form
    const saveItemToCart = async (cartMap: Map<number, number>) => {
        try {
            const cartArray = Array.from(cartMap.entries())

            await AsyncStorage.setItem("cartItems", JSON.stringify(cartArray))
        } catch (error) {
            console.error("Error saving cart:", error)
        }
    };

    const isExistProduct = async (id: number) => {
        setIsProductExist(cartMap.has(id))
        setSingleProductCount(cartMap.get(id) || 0)
    }

    //function to check if item is already exist in Cart or not
    //if YES => increment count
    //if NO => set new item with quantity 1
    const incrementAddCartItem = async (productId: number) => {
        const cart = new Map(cartMap)
        // cart.set(productId, (cart.get(productId) || 0) + 1)
        if (!cart.has(productId)) {
            cart.set(productId, 1)
        }
        else {
            cart.set(productId, cart.get(productId)! + 1)
        }

        setCartMap(cart)
        getCartScreenData(cart)
        setIsProductExist(true)
        setSingleProductCount(cart.get(productId)!!)
        await saveItemToCart(cart)
    };


    //function to check if item is already exist in Cart or not
    //if YES => decrement count or delete
    const decrementRemoveCartItem = async (productId: number) => {
        const cart = new Map(cartMap)

        if ((cart.get(productId) || 0) > 1) {
            cart.set(productId, cart.get(productId)! - 1)
        }
        else {
            console.warn("delete is called")
            cart.delete(productId)
        }

        setCartMap(cart)
        getCartScreenData(cart)
        setIsProductExist(cart.has(productId))
        setSingleProductCount(cart.get(productId)!!)
        await saveItemToCart(cart)
    }

    //Act in Buy behavior 
    //Show Toast for Success (TODO)
    const clearCartData = async () => {
        const emptyCart = new Map()
        setCartMap(emptyCart)
        getCartScreenData(emptyCart)
        await AsyncStorage.removeItem("cartItems")
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

    if (!context) throw new Error("useCart must be used within a CartProvider")
    return context
}
