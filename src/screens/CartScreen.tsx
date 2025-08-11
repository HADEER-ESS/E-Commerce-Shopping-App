import React from 'react'
import { View } from 'react-native'
import MainStyles from '../constant/styles'

const CartScreen = () => {
    return (
        <View style={MainStyles.screenContainer}>
            {/* Card with
            image       name / price        - 1 + (btn)
            */}
            {/* 
            Payment Details
            total items : 
            total amound : 
            */}

            {/* Two Buttons options render horizontally */}
            {/* Add items  => navigate to home screen*/}
            {/* checkout => reset the sored data and show toast for success */}
        </View>
    )
}

export default CartScreen
