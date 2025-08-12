/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/stacks/RootStack';
import { createContext } from 'react';
import ThemeProvider from './src/provider/ThemeProvider';
import CartProvider from './src/provider/CartProvider';

const ThemeContext = createContext("light")

function App() {

  return (
    <CartProvider>
      <ThemeProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </CartProvider>
  );
}
export default App;
