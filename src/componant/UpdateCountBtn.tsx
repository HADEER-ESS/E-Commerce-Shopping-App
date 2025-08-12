import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLOR } from '../constant/Colors'
import { useTheme } from '../provider/ThemeProvider'


type props = {
    increment: () => void,
    decrement: () => void,
    count: number
}


const UpdateCountBtn = ({ count, increment, decrement }: props) => {
    const { theme } = useTheme()

    return (
        <View style={[styles.dynamicBtnContainer, { backgroundColor: theme.white, borderColor: theme.primary }]}>
            <Text
                onPress={decrement}
                style={[styles.actionTextStyle, { color: theme.primary }]}
            >-</Text>
            <Text style={[styles.displayTextStyle, { color: theme.primary }]}>{count}</Text>
            <Text
                style={[styles.actionTextStyle, { color: theme.primary }]}
                onPress={increment}
            >+</Text>
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
        width: '35%'
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