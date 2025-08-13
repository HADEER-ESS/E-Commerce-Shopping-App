import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../provider/ThemeProvider'
import ActionBtn from './ActionBtn'
import { useNavigation } from '@react-navigation/native'

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
        width: '45%',
        height: '50%',
    },
    emptyText: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    }
})