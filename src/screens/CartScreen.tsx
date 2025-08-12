import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { createGlobalStyle } from '../constant/styles'
import CartCardProduct from '../componant/CartCardProduct'
import ActionBtn from '../componant/ActionBtn'
import { useNavigation } from '@react-navigation/native'
import { useCart } from '../provider/CartProvider'
import { useTheme } from '../provider/ThemeProvider'

const CartScreen = () => {

    const { clearCartData, cartData, totalProductCount, totalProductPrice } = useCart()
    const navigation = useNavigation()
    const { theme } = useTheme()
    const MainStyles = createGlobalStyle(theme)

    function handleClearCart() {
        clearCartData()
        navigation.goBack()
    }
    console.warn("cart display data ", cartData)

    return (
        <View style={MainStyles.screenContainer}>
            <FlatList
                data={cartData}
                keyExtractor={(item) => `${item?.name} ${item?.id}`}
                renderItem={({ item, index }) => <CartCardProduct product={item} />}
            />
            <View style={styles.staticSectionContainer}>
                <Text style={MainStyles.MainTitleStle}>Total Items : {totalProductCount}</Text>
                <Text style={MainStyles.MainTitleStle}>Total Price : {totalProductPrice} EGP</Text>
                <View style={styles.actionBtnContainer}>
                    <ActionBtn text={"Add items"} fun={() => navigation.goBack()} />
                    <ActionBtn text={"Buy now"} fun={handleClearCart} />
                </View>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    staticSectionContainer: {
        marginVertical: 12,
        paddingHorizontal: 24
    },
    actionBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    }
})
