import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../provider/ThemeProvider'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../stacks/RootStack'
import { width } from '../constant/styles'

type productProps = {
    id: number,
    name: string,
    image: ImageSourcePropType,
    price: number,
    description: string
}

const ITEM_WIDTH = (width / 2) - 16
type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home_catalog'>

const Card = React.memo(({ id, image, name, price, description }: productProps) => {
    const { theme } = useTheme()
    const navigation = useNavigation<HomeNavigationProp>()


    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("details", { product_id: id })}
            style={[styles.container, { backgroundColor: theme.white, borderColor: theme.primary }]}
        >
            <Image style={styles.imageStyle} source={image} />
            <Text style={[styles.mainTextStyle, { color: theme.black }]}>{name}</Text>
            <Text style={[styles.subTextStyle, { color: theme.secondry }]}>{price} - EGP</Text>
            <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.subTextStyle, { color: theme.secondry }]}>
                {description}
            </Text>
        </TouchableOpacity>
    )
})

export default Card

const styles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH,
        padding: 10,
        borderRadius: 10,
        margin: 4,
        borderWidth: 2,
    },
    imageStyle: {
        width: width * 0.4,
        height: width * 0.4,
        resizeMode: "contain",
        borderRadius: 8,
        alignSelf: 'center'
    },
    mainTextStyle: {
        fontSize: 18,
        marginVertical: 4
    },
    subTextStyle: {
        fontSize: 16,
        marginVertical: 4
    }
})
