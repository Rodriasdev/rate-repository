import React from "react"
import { View, StyleSheet } from "react-native"
import { StyledText } from "./StyledText.jsx"

export const RepositoryItems = (repo) => {
    return (
        <View key={repo.id} style={styles.container}>
            <StyledText fontSize='subheading' fontWeight='bold'>{repo.login}</StyledText>
            <StyledText>Biography: {repo.bio == null ? "sin biography" : repo.bio}</StyledText>
            <StyledText>Repositories publics:{repo.public_repos}</StyledText>
            <StyledText>Lenguage:{repo.lenguage}</StyledText>
            <StyledText>Followers: {repo.followers}</StyledText>
            <StyledText>Followings: {repo.following}</StyledText>
            <StyledText>Stars:{repo.stars}</StyledText>
            <StyledText>Review:{repo.reviewCount}</StyledText>
            <StyledText>Location: {repo.location  == null ? "sin location" : repo.location}</StyledText>
            <StyledText>Rating:{repo.rating}</StyledText>
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