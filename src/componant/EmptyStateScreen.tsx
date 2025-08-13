import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../provider/ThemeProvider'
import ActionBtn from './ActionBtn'
import { useNavigation } from '@react-navigation/native'
import { width } from '../constant/styles'

const EmptyStateScreen = () => {
    const { theme } = useTheme()
    const navigation = useNavigation()
    return (
        <View style={styles.viewContainer}>
            <Image style={styles.imageStyle} source={require("../../assets/empty_state.png")} />
            <Text style={[styles.emptyText, { color: theme.black }]}>
                Your Cart is Empty
            </Text>
            <ActionBtn text={"Add items"} fun={() => navigation.goBack()} />
        </View>
    )
}

export default EmptyStateScreen

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        resizeMode: 'contain',
        width: width * 0.45,
        height: width * 0.5,
    },
    emptyText: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    }
})