import React from 'react';
import {
    ScrollView
} from 'react-native';

import SocialNetworks from '../../partials/social_networks';
import VideoHosting from '../../partials/videos';

const PublicProfile = () =>{

    return(
        <ScrollView>
            <SocialNetworks />
            <VideoHosting />
        </ScrollView>
    )
}

export default PublicProfile;


