import React, { useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    ScrollView,
    View,
    Text,
    Animated,
    ActivityIndicator,
    StyleSheet
  } from 'react-native';

  import { Colors, FontSizes } from "../constants/theme";

const SplashScreen = () =>{
    const navigation = useNavigation();

    const checkLoginStatus = () =>{
        // try {
        //     const value = await AsyncStorage.getItem('widata')
        //     if(value !== null) {
        //         navigation.navigate("Home");
        //     } 
        //     else{
            navigation.navigate("TopTab");
            // }
            // } catch(err) {
            //     Alert.alert("Error", err.message)
            // }
    }

    const animation = useRef(
        new Animated.Value(0)
    ).current;


    Animated.timing(animation, {
        toValue: 500,
        duration: 1000,  
        useNativeDriver: true
        }).start();

    // const horizontalMovement = () =>{
    //     Animated.timing(animation, {
    //         toValue: 500,
    //         duration: 1000,  
    //         useNativeDriver: true
    //         }).start();
    // }

    const spin = animation.interpolate({
        inputRange: [0, 5],
        outputRange: ["0 deg", "360 deg"]
    })


    useEffect(() =>{
        // setTimeout(() => {
        //     spin
        // }, 1100
        // )

        setTimeout(() => {
            checkLoginStatus();
        }, 2000
        )
    })

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center",
            padding: 100
        }
    })

    return(
        <ScrollView>
                <View style={styles.container}>
                    <Text style={{color: Colors.primary, fontSize: FontSizes.large}}>
                        My Me Dear
                    </Text>
                </View>

                <ActivityIndicator size={FontSizes.large} color={Colors.primary}
                style={styles.container} />
        </ScrollView>
    )
}

export default SplashScreen;
