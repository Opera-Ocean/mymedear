import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from '@svgr-iconkit/heroicons';

import Index from '../screens';
import Profile from '../screens/users/profile';
import Notifications from '../screens/users/notifications';
import PublicProfile from '../screens/users/public';

import { Colors, FontSizes } from '../constants/theme';


const Tab = createMaterialTopTabNavigator();

const TopTab = () =>{
    return(
        <View style={{flex: 1}}>
            <Text style={{color: "gray", textAlign: "center"}}>Something above the Top Tab </Text>
            <Tab.Navigator 
             screenOptions={{
                    tabBarActiveTintColor: Colors.primary,
                    tabBarInactiveTintColor: Colors.dark,
                    swipeEnabled: false,
                    tabBarLabelStyle: {
                        textTransform: 'none',
                        fontSize: FontSizes.small
                      }
                }}>
                <Tab.Screen name="Home" component={Index}
                options={{
                    tabBarIcon: () => <Icon name='home' color={Colors.primary} size={FontSizes.medium} />
                  }} />
                <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: () => <Icon name='user' color={Colors.primary} size={FontSizes.medium} />
                  }}
                 />
                <Tab.Screen name="Notifications" component={Notifications}
                options={{
                    tabBarIcon: () => <Icon name='cog' color={Colors.primary} size={FontSizes.medium} />
                  }} />
                <Tab.Screen name="Public" component={PublicProfile}
                options={{
                    tabBarIcon: () => <Icon name='globe' color={Colors.primary} size={FontSizes.medium} />
                  }} />
            </Tab.Navigator>
        </View>
    )
}

export default TopTab;
