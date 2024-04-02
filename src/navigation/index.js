import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeTab from '../screens/BottomTabs/HomeTab'
import MyCampsTab from '../screens/BottomTabs/MyCampsTabs'
import ProfileTab from '../screens/BottomTabs/ProfileTabs'
import SavedTab from '../screens/BottomTabs/SavedTabs'
import Home from '../screens/Stacks/Home'
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import Camp from '../screens/Camp/Camp'
import Tour from '../screens/Tours/Tour'
import WishList from '../screens/WishList/WishList'
import SplashScreen from '../screens/Splash/Splash'
import Info from '../screens/Info/Info'
import FilterScreen from '../components/Home/Filter/Filter'
import Detail from '../screens/Detail/Detail'
import Profile from '../screens/Profile/Profile'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function AppNavigation() {

    function MyStack() {
        return (
                <Stack.Navigator initialRouteName='SplashScreen'>
                    <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />

                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} /> 
                     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> 
                     <Stack.Screen name="Camp" component={Camp} options={{ headerShown: false }} /> 
                     <Stack.Screen name="Tour" component={Tour} options={{ headerShown: false }} /> 
                     <Stack.Screen name="WishList" component={WishList} options={{ headerShown: false }} /> 
                     <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> 
                     <Stack.Screen name="Info" component={Info} options={{ headerShown: false }} /> 
                     <Stack.Screen name="FilterScreen" component={FilterScreen} options={{ headerShown: false }} /> 
                     <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

                </Stack.Navigator>
        );
    }


    function MyTabs() {
        return (
            <Tab.Navigator
            initialRouteName='HomeTabs'
            // screenOptions={({route})=({

            // })}
            >
                <Tab.Screen name="HomeTabs" component={HomeTab} options={{ headerShown: false }} />
                <Tab.Screen name="SavedTabs" component={SavedTab} options={{ headerShown: false }} />
                <Tab.Screen name="MyCampsTabs" component={MyCampsTab} options={{ headerShown: false }} />
                <Tab.Screen name="ProfileTabs" component={ProfileTab} options={{ headerShown: false }} />

            </Tab.Navigator>
        );
    }

    return <NavigationContainer>
        <MyStack />
    </NavigationContainer>


}