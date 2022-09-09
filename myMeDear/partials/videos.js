import React, { useState } from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import { Paragraph } from '../components/texts';
import NetworkCard from '../components/network';
import styles from '../screens/styles';

const VideoHosting = () =>{
    return(
        <View style={styles.container}>
            <Paragraph text="Video Hostings" />
            <ScrollView style={styles.innerContainer} horizontal={true}>
                <NetworkCard title="Tiktok" img={require("../assets/images/social/Tiktok.png")}
                link='https://tiktok.com/@gameslot10' />
                <NetworkCard title="Vimeo" img={require("../assets/images/videos/Vimeo.png")}
                link='https://vimeo.com/nasdaily' />
                <NetworkCard title="Youtube" img={require("../assets/images/videos/Youtube.png")}
                link='https://youtube.com/nasdaily' />
            </ScrollView>
        </View>
    )
}

export default VideoHosting;
