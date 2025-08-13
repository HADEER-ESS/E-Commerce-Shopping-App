import React from 'react'
import { Dimensions, FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import detailsController from '../controller/detailsController'
import { useTheme } from '../provider/ThemeProvider'

type CarouselProps = {
    imagesData: ImageSourcePropType[]
}

const width = Dimensions.get("screen").width

const ProductCarousel = ({ imagesData }: CarouselProps) => {
    const { carouselRef, currentImageIndex } = detailsController(imagesData)
    const { theme } = useTheme()
    return (
        <>
            <FlatList
                horizontal
                data={imagesData}
                ref={carouselRef}
                showsHorizontalScrollIndicator={false}
                decelerationRate={'fast'}
                pagingEnabled
                keyExtractor={(_, index) => `item num ${index}`}
                renderItem={({ item }) => <Image style={styles.imageStyle} source={item} />}
            />
            <View style={[styles.carouselIndicatorContainer, { backgroundColor: theme.white, borderColor: theme.primary }]}>
                <Text style={[styles.carouselTextStyle, { color: theme.black }]}>{currentImageIndex + 1} / {imagesData.length}</Text>
            </View>
        </>
    )
}

export default ProductCarousel




const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'contain',
        width: width,
        height: width * 0.7,
    },
    carouselIndicatorContainer: {
        position: 'absolute',
        top: width / 1.8,
        left: width * 0.45,
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 14,
        borderWidth: 2,
    },
    carouselTextStyle: {
        fontSize: 14
    }
})
