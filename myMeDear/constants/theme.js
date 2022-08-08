import React from 'react';
import { Dimensions } from 'react-native';

const{width, height} = Dimensions.get("screen");

export const Colors = {
    primary: "blue",
    secondary: "orange"
}

export const fontSizes = {
    small: width / 30,
    default: width / 24,
    medium: width / 19,
    large: width / 15
}