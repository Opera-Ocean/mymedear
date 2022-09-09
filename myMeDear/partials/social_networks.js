import React, { useState } from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import NetworkCard from '../components/network';
import { Paragraph } from '../components/texts';
import styles from '../screens/styles';

const SocialNetworks = () =>{
    return(
        <View style={styles.container}>
            <Paragraph text="Social Networks" />
            <ScrollView style={styles.innerContainer} horizontal={true}>
                <NetworkCard title="Facebook" img={require("../assets/images/social/Facebook.png")}
                link='https://facebook.com/nasdaily' />
                <NetworkCard title="Instagram" img={require("../assets/images/social/Instagram.png")}
                link='https://instagram.com/nasdaily?igshid=YmMyMTA2M2Y=' />
                <NetworkCard title="LinkedIn" img={require("../assets/images/social/LinkedIn.png")}
                link='https://www.linkedin.com/in/oceanman' />
                <NetworkCard title="Snapchat" img={require("../assets/images/social/Snapchat.png")}
                link='https://www.snapchat.com/add/toluijimakin?share_id=Ifq3gSL5AQI&locale=en-GB
                ' />
                <NetworkCard title="Telegram" img={require("../assets/images/social/Telegram.png")}
                link='https://t.me/trustwallet' />
                <NetworkCard title="Twitter" img={require("../assets/images/social/Twitter.png")}
                link='https://twitter.com/nasdaily?s=20&t=BgT4E1mRtwdlJdeuTUZZcQ' />
                <NetworkCard title="Whatsapp" img={require("../assets/images/social/Whatsapp.png")}
                link='https://chat.whatsapp.com/JNg3zNyiKfTKWVW3eZAcIY' />
            </ScrollView>
        </View>
    )
}

export default SocialNetworks;
