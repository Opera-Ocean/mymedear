import React from 'react';
import {
    View, 
    Pressable 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Title, SubTitle, Paragraph, BaseText } from '../../../components/texts';
import { BaseIcon } from '../../../components/icons';
import { ThinLine } from '../../../components/line';
import styles from '../../styles';
import comp from '../../../components/styles';

export const SettingsItem = ({icon, title, handlePress}) =>{
    return(
        <Pressable onPress={handlePress}
         style={styles.row}>
            <View style={styles.innerRow}>
                <BaseIcon icon_name={icon} />
                <BaseText text={title} />
            </View>
            <View style={styles.endContainer}>
                <BaseIcon icon_name="chevron-right" />
            </View>
        </Pressable>
    )
}

export const Settings = () =>{
    const navigation = useNavigation();

    return(
        <View>
            <View style={styles.startContainer}>
                <Paragraph text="Settings" />
                <ThinLine />
            </View>
            <View style={styles.column}>
                <SettingsItem handlePress={()=>navigation.navigate("Public")}
                 icon="globe" title="Edit Public Profile" />
                <SettingsItem icon="chart-square-bar" title="Your Analytics" />
                <SettingsItem icon="user-circle" title="Privacy" />
                <SettingsItem icon="cash" title="Billing" />
            </View>
        </View>
    )
}
