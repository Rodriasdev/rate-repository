import React from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import { StyledText } from "./StyledText.jsx";
import Constants from 'expo-constants'
import { theme } from "./theme.js";
import {Link} from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        textAlign: 'center'
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10,
    },
})

const AppBarTab = ({active, children, to}) => {
    return (

            <Link to={to}>
                <StyledText  fontWeight='bold' style={styles.text}>
                    {children}
                </StyledText>
            </Link>

    )
}

export const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab active to='/'>Repositories</AppBarTab>
            <AppBarTab active to='/signin'>Sig In</AppBarTab>
        </View>
    )
}