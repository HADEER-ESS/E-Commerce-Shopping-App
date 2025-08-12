import React from 'react'
import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLOR } from '../constant/Colors'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../provider/ThemeProvider'

type productProps = {
    id: number,
    name: string,
    image: ImageSourcePropType,
    price: number,
    description: string
}

const width = Dimensions.get('screen').width

const Card = ({ id, image, name, price, description }: productProps) => {
    const { theme } = useTheme()
    const navigation = useNavigation()


    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("details", { product_id: id })}
            style={[styles.container, { backgroundColor: theme.white, borderColor: theme.primary }]}
        >
            <Image style={styles.imageStyle} source={image} />
            <View style={styles.textContainer}>
                <Text style={[styles.mainTextStyle, { color: theme.black }]}>{name}</Text>
                <Text style={[styles.subTextStyle, { color: theme.secondry }]}>{price} - EGP</Text>
            </View>
            <Text style={[styles.subTextStyle, { color: theme.secondry }]}>
                {description}
            </Text>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: width * 0.1,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 2,
    },
    imageStyle: {
        width: "100%",
        height: width * 0.5,
        resizeMode: "contain",
        borderRadius: 8,
    },
    textContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12

    },
    mainTextStyle: {
        textAlign: 'center',
        fontSize: 24,
    },
    subTextStyle: {
        fontSize: 16,
        paddingStart: 12
    }
})
