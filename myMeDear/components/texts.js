import React from 'react';
import { Text } from 'react-native';

import { Colors } from '../constants/theme';
import styles from './styles';

export const BaseText = ({text}) =>{
    return(
        <Text style={styles.baseText}>
            {text}
        </Text>
    )
}

export const Paragraph = ({text}) =>{
    return(
        <Text style={styles.paragraph}>
            {text}
        </Text>
    )
}

export const Title = ({text}) =>{
    return(
        <Text style={styles.titleText}>
            {text}
        </Text>
    )
}

export const SubTitle = ({text}) =>{
    return(
        <Text style={styles.subTitleText}>
            {text}
        </Text>
    )
}

export const BadgeText = ({text}) =>{
    return(
        <Text style={styles.badgeText}>
            {text}
        </Text>
    )
}
