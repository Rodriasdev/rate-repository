import React from "react";
import { View, Text } from "react-native";
import { RepositoryList } from "./RepositoryList";
import { AppBar } from "./AppBar";
import {  Route, Routes } from 'react-router-native';

export const Main = () => {
    return(
        <View style={{flex: 1}}>
            <AppBar />
            <Routes>
                <Route path="/" exact element={<RepositoryList/>}/>
                <Route path="/signin" exact element={<Text>a</Text>}/>
            </Routes>
        </View>
    )
}