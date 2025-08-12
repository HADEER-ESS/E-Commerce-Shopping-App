import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLOR } from '../constant/Colors'
import { useTheme } from '../provider/ThemeProvider'

type ActionBtnProp = {
    text: string,
    fun: () => void
}

const ActionBtn = ({ text, fun }: ActionBtnProp) => {
    const { theme } = useTheme()

    return (
        <TouchableOpacity style={[styles.actionBtnStyle, { backgroundColor: theme.primary }]} onPress={fun}>
            <Text style={[styles.actionTextStyle, { color: theme.white }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ActionBtn

const styles = StyleSheet.create({
    actionBtnStyle: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 24,
        width: '35%'
    },
    actionTextStyle: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})