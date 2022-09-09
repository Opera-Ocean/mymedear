import React from 'react';
import {
     View,
     TouchableOpacity 
} from 'react-native';

import { BadgeText } from './texts';
import styles from './styles';

export const Badge = ({style, text}) =>{
    return(
        <TouchableOpacity 
        style={style}>
            <BadgeText text={text} />
        </TouchableOpacity>
    )
}
