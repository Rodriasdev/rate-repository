import React from "react"
import { View, StyleSheet } from "react-native"
import { RepositoryItemHeader } from "./RepositoryItemHeader.jsx"
import { RepositoryStats } from "./RepositoryStats.jsx"



export const RepositoryItems = (repo) => {
    return (
        <View key={repo.id} style={styles.container}>
            <RepositoryItemHeader {...repo}/>
            <RepositoryStats {...repo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    strong: {
        color: 'skyblue',
        fontWeight: 'bold',
        marginBottom: 5
    }
})