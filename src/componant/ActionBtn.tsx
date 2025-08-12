import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLOR } from '../constant/Colors'

type ActionBtnProp = {
    text: string,
    fun: () => void
}

const ActionBtn = ({ text, fun }: ActionBtnProp) => {
    return (
        <TouchableOpacity style={styles.actionBtnStyle} onPress={fun}>
            <Text style={styles.actionTextStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ActionBtn

const styles = StyleSheet.create({
    actionBtnStyle: {
        backgroundColor: COLOR.light.borderColor,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 24,
        width: '35%'
    },
    actionTextStyle: {
        color: COLOR.light.background,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})