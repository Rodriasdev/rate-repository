import React from "react"
import { View, StyleSheet } from "react-native"
import { StyledText } from "./StyledText.jsx"
import { RepositoryStats } from "./RepositoryStats.jsx"

export const RepositoryItems = (repo) => {
    return (
        <View key={repo.id} style={styles.container}>
            <StyledText fontSize='subheading' fontWeight='bold'>{repo.login}</StyledText>
            <StyledText>Biography: {repo.bio == null ? "sin biography" : repo.bio}</StyledText>
            <StyledText>Repositories publics:{repo.public_repos}</StyledText>
            <StyledText>Followers: {repo.followers}</StyledText>
            <StyledText>Followings: {repo.following}</StyledText>
            <StyledText>Location: {repo.location  == null ? "sin location" : repo.location}</StyledText>
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