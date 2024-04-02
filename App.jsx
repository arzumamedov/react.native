/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AppNavigation from './src/navigation';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <AppNavigation />
  );
}



export default App;
