import React from "react";
import { Text, StyleSheet } from "react-native";
import { theme } from "./theme.js";

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subHeading: {
        fontSize: theme.fontSizes.subheading
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    TextAlignCenter: {
        textAlign: theme.AlignItems.center
    }
});

export function StyledText({align,children, color, fontSize, fontWeight, 
    style, ...restOfProps}) {
    const textStyles = [ 
        styles.text,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecondary,
        fontSize == 'subheading' && styles.subHeading,
        fontWeight == 'bold' && styles.bold,
        align == 'center' && styles.TextAlignCenter
    ];

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    );
};