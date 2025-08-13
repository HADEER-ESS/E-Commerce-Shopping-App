import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createGlobalStyle, width } from '../constant/styles'
import { useTheme } from '../provider/ThemeProvider'

type props = {
    label: string,
    value: string
}

const numColumns = 2;
const itemMargin = 8;

const itemWidth = (width - itemMargin * (numColumns + 1)) / numColumns;
const SpicificationCard = ({ label, value }: props) => {
    const { theme } = useTheme()
    const MainStyles = createGlobalStyle(theme)

    return (
        <View style={[styles.cardView, { borderColor: theme.primary }]}>
            <Text style={MainStyles.SubTextStyle}>{label} :</Text>
            <Text style={MainStyles.SubTextStyle}>{value}</Text>
        </View>
    )
}

export default SpicificationCard

const styles = StyleSheet.create({
    cardView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: itemMargin / 2,
        borderRadius: 12,
        borderWidth: 2,
        padding: 6,
        width: itemWidth,
        alignSelf: 'center'
    }
})