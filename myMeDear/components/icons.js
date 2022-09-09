import React from 'react';
import Icon from '@svgr-iconkit/heroicons';

import { FontSizes, Colors } from '../constants/theme';
import styles from '../screens/styles';


export const BaseIcon = ({icon_name}) =>{
    return(
        <Icon name={icon_name} color={Colors.primary} size={FontSizes.medium} />
    )
}

export const SmallIcon = ({icon_name}) =>{
    return(
        <Icon name={icon_name} color={Colors.dark} size={FontSizes.small} />
    )
}

export const LargeIcon = ({icon_name}) =>{
    return(
        <Icon style={styles.centeredItem}
         name={icon_name} color={Colors.dark} size={FontSizes.large} />
    )
}
