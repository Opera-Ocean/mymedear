import React, {useState, useEffect} from "react";
import {
    ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserDisplay, UserStatus } from "./partials/userDisplay";
import { Settings } from "./partials/settings";

const Profile = () =>{
    const[myMeDear, setMyMeDearData] = useState({});

    const getUserData = async () =>{
        try {
          var userData =  await AsyncStorage.getItem('meDearData')
          setMyMeDearData(JSON.parse(userData));
          console.log(userData);
          } catch (error) {
            console.log("Error, could not fetch user data");
          }
    }

    useEffect(() =>{
        getUserData();
        
    },[])

    return(
        <ScrollView>
            <UserDisplay />
            <UserStatus />
            <Settings />
        </ScrollView>
    )
}

export default Profile;
