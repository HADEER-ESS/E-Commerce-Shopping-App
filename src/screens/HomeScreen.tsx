import React from 'react'
import { FlatList, RefreshControl, View } from 'react-native'
import Card from '../componant/Card'
import Header from '../componant/Header'
import homeController from '../controller/homeController'
import { createGlobalStyle } from '../constant/styles'
import { useTheme } from '../provider/ThemeProvider'
import { useCart } from '../provider/CartProvider'

const HomeScreen = () => {
    const { productArr, refreshing, pullToRefreshProducts } = homeController()
    const { totalProductCount } = useCart()
    const { theme } = useTheme()
    const MainStyles = createGlobalStyle(theme)

    return (
        <View style={MainStyles.screenContainer}>
            <Header cartCount={totalProductCount} />
            <FlatList
                keyExtractor={(item) => `item no-${item.id}`}
                data={productArr}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={pullToRefreshProducts} />}
                renderItem={({ item }) => <Card id={item.id} image={item.images[0]} name={item.name} price={item.price} description={item.description} />}
            />
        </View>
    )
}

export default HomeScreen

