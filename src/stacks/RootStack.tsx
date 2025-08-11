import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import CartScreen from '../screens/CartScreen'


const Stack = createNativeStackNavigator()

const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='home_catalog'
                component={HomeScreen}
            />
            <Stack.Screen
                name='details'
                component={DetailsScreen}
            />
            <Stack.Screen
                name='cart'
                component={CartScreen}
            />
        </Stack.Navigator>
    )
}

export default RootStack
