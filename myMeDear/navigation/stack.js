import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from '../screens';
import Signup from '../screens/authentication/signup';
import Login from '../screens/authentication/login';

const Stack = createNativeStackNavigator(); 

const StackNavigate = () =>{

    return(
        <Stack.Navigator>
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
    
}

export default StackNavigate;

