import React from 'react';
import { Dimensions } from 'react-native';

const{width, height} = Dimensions.get("screen");

export const Colors = {
    primary: "#1b9fe9",
    light: "#fbfcfc",
    lightPrimary: "#5866AE",
    dark: "gray",
    danger: "#b5536c",
    success: "green",
}

export const FontSizes = {
    small: width / 30,
    default: width / 24,
    medium: width / 15,
    large: width / 11
}

export const Spaces = {
    base_width: width / 80,
    base_height: height / 250,
    medium_width_space: width / 10,
    medium_height_space: height / 10,
    large_width_space: width / 4,
    large_height_space: height / 4,
}

