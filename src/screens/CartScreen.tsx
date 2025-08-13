import React from 'react'
import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { createGlobalStyle } from '../constant/styles'
import CartCardProduct from '../componant/CartCardProduct'
import ActionBtn from '../componant/ActionBtn'
import { useNavigation } from '@react-navigation/native'
import { useCart } from '../provider/CartProvider'
import { useTheme } from '../provider/ThemeProvider'
import EmptyStateScreen from '../componant/EmptyStateScreen'

const CartScreen = () => {

    const { clearCartData, cartData, totalProductCount, totalProductPrice } = useCart()
    const navigation = useNavigation()
    const { theme } = useTheme()
    const MainStyles = createGlobalStyle(theme)

    function handleClearCart() {
        clearCartData()
        ToastAndroid.show("Thanks for choosing us", ToastAndroid.SHORT)
        setTimeout(() => {
            navigation.goBack()
        }, 300)

    }

    return (
        <View style={MainStyles.screenContainer}>
            {
                cartData.length > 0 ?
                    <>
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
                    </>
                    :
                    <EmptyStateScreen />
            }

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
