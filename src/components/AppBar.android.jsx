import React from "react";
import {View, StyleSheet, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import { theme } from "./theme.js";
import { AppBarTab } from "./AppBarTab.jsx";

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



const AppBar = () => {

    return (
        <View style={styles.container} >
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab styles={styles} to='/'>Repositories</AppBarTab>
                <AppBarTab styles={styles} to='/signin'>Sig In</AppBarTab>
            </ScrollView>
        </View>
    )
};

export default AppBar