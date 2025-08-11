import React from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Products } from '../data/products'
import MainStyles from '../constant/styles'

const width = Dimensions.get("screen").width

const DetailsScreen = ({ route }) => {
    const { product_id } = route.params
    const product = Products.find((pro) => pro.id === product_id)
    return (
        <ScrollView style={MainStyles.screenContainer}>
            <FlatList
                horizontal={true}
                data={product?.images}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => `item num ${index}`}
                renderItem={({ item }) => <Image style={styles.imageStyle} source={item} />}
            />
            {/* white layer with border radius in top left and right */}
            <View>
                <Text>{product?.name}</Text>
                {/* specification */}
                <FlatList
                    data={product?.specifications}
                    keyExtractor={(_, idx) => `no_ ${idx}`}
                    renderItem={({ item }) =>
                        <View>
                            <Text>{item?.label}</Text>
                            <Text>{item?.value}</Text>
                        </View>
                    } />
                <Text>{product?.details_desc}</Text>
                {/* Horizontal item with (PRICE) (Add To Cart) */}
                <View>
                    <Text>Price {product?.price} EGP</Text>
                    {/* if first time selected => BTN (Add to cart) */}
                    {/* else => BTN (-   1   +) */}
                    <TouchableOpacity>
                        <Text>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'contain',
        width: width * 0.9,
        height: width * 0.6,
        marginRight: 10
    }
})