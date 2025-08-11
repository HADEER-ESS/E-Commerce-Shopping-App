import React from 'react'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import Card from '../componant/Card'
import Header from '../componant/Header'
import homeController from '../controller/homeController'

const HomeScreen = () => {
    const { productArr, refreshing, pullToRefreshProducts } = homeController()
    return (
        <View style={styles.mainScreenView}>
            <Header cartCount={0} />
            <FlatList
                keyExtractor={(item) => `item no-${item.id}`}
                data={productArr}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={pullToRefreshProducts} />}
                renderItem={({ item }) => <Card image={item.images[0]} name={item.name} price={item.price} description={item.description} />}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainScreenView: {
        flex: 1,
        backgroundColor: "#ffffff"
    }
})
