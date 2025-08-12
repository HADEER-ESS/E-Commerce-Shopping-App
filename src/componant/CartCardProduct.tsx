import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import UpdateCountBtn from './UpdateCountBtn'
import { COLOR } from '../constant/Colors'
import { CartProductItem, useCart } from '../provider/CartProvider'

type CartCardProductProps = {
    product: CartProductItem
}


const CartCardProduct = ({ product }: CartCardProductProps) => {
    const { id, name, image, price, quantity } = product
    const { incrementAddCartItem, decrementRemoveCartItem, singleProductCount } = useCart()


    return (
        <View style={styles.cartCardContainer}>
            <Image style={styles.cartImage} source={image} />
            <View style={styles.cartTextContainer}>
                <Text style={styles.cartNameStyle}>{name}</Text>
                <Text style={styles.cartPriceStyle}>{price} EGP</Text>
            </View>
            <UpdateCountBtn
                count={quantity}
                increment={() =>
                    incrementAddCartItem(id)
                }
                decrement={() =>
                    decrementRemoveCartItem(id)
                }
            />
        </View>
    )
}

export default CartCardProduct

const styles = StyleSheet.create({
    cartCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: COLOR.light.background,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLOR.light.borderColor,
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginHorizontal: 8,
        marginVertical: 6
    },
    cartImage: {
        width: 85,
        height: 75,
        resizeMode: 'contain',
    },
    cartTextContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    cartNameStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLOR.light.mainText
    },
    cartPriceStyle: {
        fontSize: 16,
        color: COLOR.light.subText
    },
})
