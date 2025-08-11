import React, { useState } from 'react'
import { Image, StyleSheet, Switch, TouchableOpacity, View } from 'react-native'

type headerProps = {
    cartCount: number
}

const Header = ({ cartCount }: headerProps) => {
    const [isEnabled, setIsEnabled] = useState<boolean>(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.headerContainer}>
            {/* Theme Switcher */}
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            {/* Cart */}
            <TouchableOpacity>
                <Image style={styles.imageStyle} source={require("../../assets/products/cart.png")} />
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
        width: 35,
        height: 45
    }
})
