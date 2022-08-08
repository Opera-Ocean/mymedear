import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Index from '../screens';
import Signup from '../screens/authentication/signup';
import Login from '../screens/authentication/login';
import Profile from '../screens/users/profile';
import Settings from '../screens/users/settings';
import PublicProfile from '../screens/users/public';


const Tab = createMaterialTopTabNavigator();

const TopTab = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Index" component={Index} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Public" component={PublicProfile} />
        </Tab.Navigator>
    )
}

export default TopTab;
