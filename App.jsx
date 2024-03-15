/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Camp from './src/screens/Camp/Camp';
import Tour from './src/screens/Tours/Tour';
import WishList from './src/screens/WishList/WishList';
import SplashScreen from './src/screens/Splash/Splash';
import Info from './src/screens/Info/Info';
import Filter from './src/components/Home/Filter/Filter';
import FilterScreen from './src/components/Home/Filter/Filter';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FilterScreen'>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Camp" component={Camp} options={{ headerShown: false }} />
        <Stack.Screen name="Tour" component={Tour} options={{ headerShown: false }} />
        <Stack.Screen name="WishList" component={WishList} options={{ headerShown: false }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={Info} options={{ headerShown: false }} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
