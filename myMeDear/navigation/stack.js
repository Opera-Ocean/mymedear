import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopTab from './tab';
import SplashScreen from '../screens/splashScreen';
import Signup from '../screens/authentication/signup';
import Login from '../screens/authentication/login';

const Stack = createNativeStackNavigator(); 

const StackNavigate = () =>{

    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Splash Screen" component={SplashScreen} 
            options={{ drawerItemStyle: {height: 0}, headerShown: false }} />
            <Stack.Screen name='TopTab' component={TopTab}
            options={{ drawerItemStyle: {height: 0}, headerShown: false }} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
    
}

export default StackNavigate;

