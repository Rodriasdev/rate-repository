import { StyleSheet, View,Image, Platform } from "react-native"
import { StyledText } from "./StyledText.jsx"
import { theme } from "./theme.js"
 
export const RepositoryItemHeader = (repo) => {
    return (
        <View style={{flexDirection: 'row', paddingBottom: 2}}>
            <View style={{paddingRight: 10}}>
                <Image style={styles.image} source={{uri: repo.avatar_url}}/>
            </View>
            <View style={{flex: 1}}>
                <StyledText fontSize='subheading' fontWeight='bold'>{repo.login}</StyledText>
                <StyledText color='secondary'>Biography: {repo.bio == null ? "sin biography" : repo.bio}</StyledText>
                <StyledText color='secondary'>Repositories publics:{repo.public_repos}</StyledText>
                <StyledText color='secondary'>Followings: {repo.following}</StyledText>
                <StyledText style={styles.Language}>Lenguage: {repo.lenguage}</StyledText>
            </View>
        </View>        
    )
}

const styles = StyleSheet.create({
    Language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: 'red',
            ios: 'blue',
            default: 'white'
        }),
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4
    },
    image: {
        width: 48,
        height: 40,
        margin: 'auto',
        borderRadius: 4
    }
})
