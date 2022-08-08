import React from 'react';
import { useNavigation } from '@react-navigation/native';
import WebView from 'react-native-webview';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from '../styles';

const PublicProfile = () =>{

    const navigation = useNavigation();

    return(
        <View style={{flex: 1}}>
            <Text style={styles.paragraph}>
                Public Profile
            </Text>

            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.paragraph}>
                    Go to Login
                </Text>
            </TouchableOpacity>

            <View style={[styles.summary, {flex: 1, width: 280, height: 480, alignSelf: "center"}]}>
                <WebView source={{ uri: 'https://facebook.com/ijimakin.samuel.3' }}
                />
            </View>
            
        </View>
    )
}

export default PublicProfile;
