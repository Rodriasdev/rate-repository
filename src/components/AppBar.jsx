import React from "react";
import {View, StyleSheet, ScrollView} from 'react-native'
import { StyledText } from "./StyledText.jsx";
import Constants from 'expo-constants'
import { theme } from "./theme.js";
import {Link, useLocation} from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: 'row',
        textAlign: 'center'
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10,
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textSecondary
    }
})

const AppBarTab = ({active, children, to}) => {
    const textStyles = [
        styles.text,
        !active && styles.active
    ]

    return (

            <Link to={to}>
                <StyledText  fontWeight='bold' style={textStyles}>
                    {children}
                </StyledText>
            </Link>

    )
}

export const AppBar = () => {
    const { pathname } = useLocation()
    return (
        <View style={styles.container} >
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab active={pathname === '/'} to='/'>Repositories</AppBarTab>
                <AppBarTab active={pathname === '/signin'} to='/signin'>Sig In</AppBarTab>
            </ScrollView>
        </View>
    )
}