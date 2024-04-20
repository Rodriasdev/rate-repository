import React from "react"
import { Image,View, StyleSheet } from "react-native"
import { StyledText } from "./StyledText.jsx"
import { RepositoryStats } from "./RepositoryStats.jsx"
import { theme } from "./theme.js"


export const RepositoryItems = (repo) => {
    return (
        <View key={repo.id} style={styles.container}>
            <Image style={styles.image} source={{uri: repo.avatar_url}}/>
            <StyledText fontSize='subheading' fontWeight='bold'>{repo.login}</StyledText>
            <StyledText>Biography: {repo.bio == null ? "sin biography" : repo.bio}</StyledText>
            <StyledText>Repositories publics:{repo.public_repos}</StyledText>
            <StyledText>Followings: {repo.following}</StyledText>
            <StyledText>Location: {repo.location  == null ? "sin location" : repo.location}</StyledText>
            <StyledText style={styles.Language}>Lenguage: {repo.lenguage}</StyledText>
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
    },
    Language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 40,
        margin: 'auto',
        borderRadius: 4
    }
})