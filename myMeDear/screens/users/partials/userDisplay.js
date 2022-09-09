import React from 'react';
import { ScrollView, View } from 'react-native';

import { ProfileImage } from '../../../components/images';
import { Title, SubTitle, Paragraph } from '../../../components/texts';
import { LargeIcon } from '../../../components/icons';
import { ThinLine } from '../../../components/line';
import { Badge } from '../../../components/badge';
import { Spaces } from '../../../constants/theme';
import styles from '../../styles';
import comp from '../../../components/styles';

export const UserDisplay = () =>{
    return(
        <View style={styles.row}>
            <ProfileImage />
            <View style={styles.centeredItem}>
                <Title text="John Doe" />
                <SubTitle text="Content Creator" />
            </View>
            <LargeIcon icon_name="user-remove" />
        </View>
    )
}

export const UserStatus = () =>{
    return(
        <View style={styles.startContainer}>
            <Paragraph text="Status" />
            <ThinLine />
            <ScrollView horizontal={true}>
                <Badge text="Available" style={comp.successBadge} />
                <Badge text="Priority" style={comp.lightPrimaryBadge} />
                <Badge text="Business" style={comp.primaryBadge} />
                <Badge text="Busy" style={comp.dangerBadge} />
            </ScrollView>
        </View>
    )
}
