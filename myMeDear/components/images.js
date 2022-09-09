import React from 'react';
import { Image } from 'react-native';

import comp from './styles';

export const ProfileImage = () =>{
    return(
        <Image style={comp.profileImage}
        source={{uri: "https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397_960_720.jpg"}} />
    )
}

export const NetworkImage = ({source}) =>{
    return(
        <Image style={comp.networkImage}
        source={source} />
    )
}
