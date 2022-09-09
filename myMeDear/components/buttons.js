import React from 'react';
import {
    Pressable,
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from '@svgr-iconkit/heroicons';

import { Colors, FontSizes } from '../constants/theme';
import styles from './styles';

export const FlatButton = ({title, handlePress}) =>{
    return(
    <Pressable onPress={handlePress}>
        <Text>{title}</Text>
    </Pressable>
    )
}

export const ElevatedButton = ({title, handlePress}) =>{
    return(
    <TouchableOpacity onPress={handlePress}>
        <Text>{title}</Text>
    </TouchableOpacity>
    )
}

export const IconButton = ({handlePress, icon_name}) =>{
    return(
    <Pressable onPress={handlePress}>
        <Icon name={icon_name} color={Colors.primary} size={FontSizes.medium} />
    </Pressable>
    )
}
