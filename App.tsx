/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/stacks/RootStack';

function App() {

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>

  );
}
export default App;
