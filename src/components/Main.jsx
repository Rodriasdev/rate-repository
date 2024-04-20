import React from "react";
import { View } from "react-native";
import { RepositoryList } from "./RepositoryList.jsx";
import { AppBar } from "./AppBar.jsx";

export const Main = () => {
    return(
        <View style={{flex: 1}}>
            <AppBar/>
            <RepositoryList/>
        </View>
    )
}