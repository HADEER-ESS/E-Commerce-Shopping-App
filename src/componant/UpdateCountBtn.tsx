import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLOR } from '../constant/Colors'


type props = {
    increment: () => void,
    decrement: () => void,
    count: number
}


const UpdateCountBtn = ({ count, increment, decrement }: props) => {


    return (
        <View style={styles.dynamicBtnContainer}>
            <Text
                onPress={decrement}
                style={styles.actionTextStyle}
            >-</Text>
            <Text style={styles.displayTextStyle}>{count}</Text>
            <Text
                style={styles.actionTextStyle}
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
        backgroundColor: COLOR.light.background,
        borderWidth: 1.5,
        borderColor: COLOR.light.borderColor,
        width: '35%'
    },
    actionTextStyle: {
        color: COLOR.light.borderColor,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    displayTextStyle: {
        color: COLOR.light.borderColor,
        fontSize: 16,
        textAlign: 'center'
    }
})