import React, { useEffect } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Products } from '../data/products'
import { createGlobalStyle } from '../constant/styles'
import { COLOR } from '../constant/Colors'
import SpicificationCard from '../componant/SpicificationCard'
import UpdateCountBtn from '../componant/UpdateCountBtn'
import ActionBtn from '../componant/ActionBtn'
import { useCart } from '../provider/CartProvider'
import { useTheme } from '../provider/ThemeProvider'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../stacks/RootStack'

const width = Dimensions.get("screen").width
type DetailsRouteParam = RouteProp<RootStackParamList, 'details'>


type screenProps = {
    route: DetailsRouteParam
}

const DetailsScreen = ({ route }: screenProps) => {
    const { product_id } = route.params
    const product = Products.find((pro) => pro.id === product_id)
    const { isExistProduct, isProductExist, singleProductCount, incrementAddCartItem, decrementRemoveCartItem } = useCart()
    const { theme } = useTheme()
    const MainStyles = createGlobalStyle(theme)

    useEffect(() => { isExistProduct(product_id) }, [])

    return (
        <ScrollView style={MainStyles.screenContainer}>
            <FlatList
                horizontal={true}
                data={product?.images}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => `item num ${index}`}
                renderItem={({ item }) => <Image style={styles.imageStyle} source={item} />}
            />
            <View style={[styles.whiteDescContainer, { backgroundColor: theme.white }]}>
                <Text style={[MainStyles.MainTitleStle, { marginVertical: 16, width: '95%' }]}>{product?.name}</Text>
                <View style={{ flex: 1, }}>
                    <FlatList
                        data={product?.specifications}
                        numColumns={2}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        keyExtractor={(_, idx) => `no_ ${idx}`}
                        renderItem={({ item }) => <SpicificationCard label={item?.label} value={item?.value} />}
                    />
                </View>

                <Text style={[styles.descriptonStyle, { color: theme.primary }]}>{product?.details_desc}</Text>
                <View style={styles.priceAddConatinerView}>
                    <Text style={MainStyles.MainTitleStle}>Price : {product?.price} EGP</Text>
                    {
                        isProductExist ?
                            <UpdateCountBtn
                                count={singleProductCount}
                                increment={() => incrementAddCartItem(product_id)}
                                decrement={() => decrementRemoveCartItem(product_id)}
                            /> :
                            <ActionBtn text='Add To Cart' fun={() => incrementAddCartItem(product_id)} />
                    }

                </View>
            </View>

        </ScrollView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    whiteDescContainer: {
        paddingVertical: 12,
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
        alignItems: 'center',
        marginTop: -24,
    },
    imageStyle: {
        resizeMode: 'contain',
        width: width,
        height: width * 0.7,
    },
    descriptonStyle: {
        marginVertical: 16,
        fontSize: 16,
        lineHeight: 28,
        paddingHorizontal: 8
    },
    priceAddConatinerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
        width: '90%',
    },
})