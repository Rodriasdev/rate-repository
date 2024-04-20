import React from "react"
import { View } from "react-native"
import { StyledText } from "./StyledText.jsx"

const parseThousands = value => {
    return value >= 1000 ?
        `${Math.round(value / 100) / 10}k`: String(value)
}

export const RepositoryStats = repo => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText align='center'  fontWeight='bold'>Stars:</StyledText>
                <StyledText align='center' >{parseThousands(repo.stars)}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Rating:</StyledText>
                <StyledText align='center' >{repo.rating}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Review:</StyledText>
                <StyledText align='center' >{repo.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Lenguage:</StyledText>
                <StyledText align='center' >{repo.lenguage}</StyledText>
            </View>
        </View>
    )
}