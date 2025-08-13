import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../provider/ThemeProvider'
import { width } from '../constant/styles'
import { RootStackParamList } from '../stacks/RootStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type headerProps = {
    cartCount: number
}

type CartNavigationProp = NativeStackNavigationProp<RootStackParamList, 'cart'>

const Header = ({ cartCount }: headerProps) => {
    const navigation = useNavigation<CartNavigationProp>()
    const { toggleTheme, mode, theme } = useTheme()
    return (
        <View style={styles.headerContainer}>
            <Switch
                trackColor={{ false: theme.borderColor, true: theme.borderColor }}
                thumbColor={theme.black}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleTheme}
                value={mode === 'light'}
            />
            {/* Cart  with badge to display the count of selected item*/}
            <TouchableOpacity onPress={() => navigation.navigate("cart")}>
                <Image style={styles.imageStyle} source={require("../../assets/cart.png")} />
                <View style={[styles.floatingCartCountView, { backgroundColor: theme.primary }]}>
                    <Text style={styles.cartCountText}>{cartCount}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 24,
        marginHorizontal: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    imageStyle: {
        resizeMode: 'contain',
        width: width * 0.1,
        height: width * 0.1
    },
    floatingCartCountView: {
        position: 'absolute',
        top: 30,
        right: -18,
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    cartCountText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold'
    }
})
