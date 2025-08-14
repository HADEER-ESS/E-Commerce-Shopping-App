import React from 'react'
import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native'
import Card from '../componant/Card'
import Header from '../componant/Header'
import homeController from '../controller/homeController'
import { createGlobalStyle, width } from '../constant/styles'
import { useTheme } from '../provider/ThemeProvider'

const HomeScreen = () => {
    const { productArr, refreshing, pullToRefreshProducts, isloading } = homeController()
    const { theme } = useTheme()
    const MainStyles = createGlobalStyle(theme)

    return (
        <View style={MainStyles.screenContainer}>
            <Header />
            {
                isloading ?
                    <ActivityIndicator style={{ flex: 1, alignSelf: 'center' }} size={'large'} color={theme.primary} /> :
                    <FlatList
                        keyExtractor={(item) => `item no-${item.id}`}
                        data={productArr}
                        initialNumToRender={6}
                        numColumns={2}
                        contentContainerStyle={{ padding: 8 }}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={pullToRefreshProducts} />}
                        renderItem={({ item }) => <Card id={item.id} image={item.images[0]} name={item.name} price={item.price} description={item.description} />}
                    />
            }

        </View>
    )
}

export default HomeScreen

