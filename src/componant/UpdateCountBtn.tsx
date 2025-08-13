import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../provider/ThemeProvider'
import { width } from '../constant/styles'


type props = {
    increment: () => void,
    decrement: () => void,
    count: number
}


const UpdateCountBtn = ({ count, increment, decrement }: props) => {
    const { theme } = useTheme()

    return (
        <View style={[styles.dynamicBtnContainer, { backgroundColor: theme.white, borderColor: theme.primary }]}>
            <TouchableOpacity style={{ paddingHorizontal: 6 }} onPress={decrement}>
                <Text
                    style={[styles.actionTextStyle, { color: theme.primary }]}
                >-</Text>
            </TouchableOpacity>

            <Text style={[styles.displayTextStyle, { color: theme.primary }]}>{count}</Text>
            <TouchableOpacity style={{ paddingHorizontal: 6 }} onPress={increment}>
                <Text
                    style={[styles.actionTextStyle, { color: theme.primary }]}
                >+</Text>
            </TouchableOpacity>

        </View>
    )
}

export default UpdateCountBtn

const styles = StyleSheet.create({
    dynamicBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 14,
        borderWidth: 1.5,
        width: width * 0.35
    },
    actionTextStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    displayTextStyle: {
        fontSize: 16,
        textAlign: 'center'
    }
})