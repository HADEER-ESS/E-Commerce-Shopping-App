import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../provider/ThemeProvider'
import { useNavigation } from '@react-navigation/native'
import { width } from '../constant/styles'

const HeaderBack = () => {
    const { theme } = useTheme()
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={[styles.goBackContainer, { backgroundColor: theme.basic, borderColor: theme.borderColor }]} onPress={() => navigation.goBack()}>
            <Text style={[styles.goBackText, { color: theme.primary }]}>{"<"}</Text>
        </TouchableOpacity>
    )
}

export default HeaderBack

const styles = StyleSheet.create({
    goBackContainer: {
        marginHorizontal: 12,
        marginTop: 12,
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 2,
        width: width * 0.14
    },
    goBackText: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})
