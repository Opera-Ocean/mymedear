import React from 'react';
import {StyleSheet} from 'react-native';

import {
     Colors, 
     Spaces, 
     FontSizes 
} from '../constants/theme';

const comp = StyleSheet.create({
    card: {
        flex: 1,
        height: Spaces.medium_height_space * 1.5,
        width: Spaces.large_width_space * 1.25,
        alignItems: "center",
        marginRight: Spaces.medium_width_space * 0.40,
        borderRadius: Spaces.base_width,
        borderColor: Colors.dark,
        borderWidth: 0.5
    },

    titleText: {
        fontSize: FontSizes.large,
        color: Colors.dark
    },

    subTitleText: {
        fontSize: FontSizes.medium * 0.8,
        color: Colors.primary
    },

    baseText: {
        fontSize: FontSizes.default * 1.5,
        color: "black",
        marginLeft: Spaces.base_width * 4
    },

    paragraph: {
        fontSize: FontSizes.default * 1.25,
        color: Colors.dark
    },

    badgeText: {
        fontSize: FontSizes.medium,
        color: Colors.light
    },

    profileImage: {
        width: Spaces.large_width_space,
        height: Spaces.medium_height_space,
        borderRadius: Spaces.medium_width_space * 2,
        marginTop: Spaces.base_height * 5
    },

    networkImage: {
        alignSelf: "center",
        height: Spaces.medium_height_space / 1.5,
        width: Spaces.medium_width_space * 1.5,
        marginTop: Spaces.base_height * 2    
    },

    modal: {
        
    },

    line: {
        height: FontSizes.small / 10,
        width: "95%",
        backgroundColor: Colors.dark
    },

    successBadge: {
        flex: 1,
        alignItems: "center",
        height: Spaces.medium_height_space / 1.8,
        width: Spaces.large_width_space * 1.8,
        borderRadius: Spaces.base_width * 5,
        marginRight: Spaces.base_width * 2,
        marginTop: Spaces.base_height * 4,
        backgroundColor: Colors.success
    },

    primaryBadge: {
        flex: 1,
        alignItems: "center",
        height: Spaces.medium_height_space / 1.8,
        width: Spaces.large_width_space * 1.8,
        borderRadius: Spaces.base_width * 5,
        marginRight: Spaces.base_width * 2,
        marginTop: Spaces.base_height * 4,
        backgroundColor: Colors.primary
    },

    lightPrimaryBadge: {
        flex: 1,
        alignItems: "center",
        height: Spaces.medium_height_space / 1.8,
        width: Spaces.large_width_space * 1.8,
        borderRadius: Spaces.base_width * 5,
        marginRight: Spaces.base_width * 2,
        marginTop: Spaces.base_height * 4,
        backgroundColor: Colors.lightPrimary
    },

    dangerBadge: {
        flex: 1,
        alignItems: "center",
        height: Spaces.medium_height_space / 1.8,
        width: Spaces.large_width_space * 1.8,
        borderRadius: Spaces.base_width * 5,
        marginRight: Spaces.base_width * 2,
        marginTop: Spaces.base_height * 4,
        backgroundColor: Colors.danger
    }


})

export default comp;
