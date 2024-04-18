import React, { useState,useEffect } from "react";
import { View,Text } from "react-native";
import repositories from "../data/repositories.js";
import { getOneUsers } from "../api/GitHubApi.js";

export const RepositoryList = () => {
    const [stateRepositories, setStateRepositories] = useState([]) 

    useEffect(() => { 
        ( 
            async () => {
                const userData = await Promise.all(repositories.map(async (repo) => {
                    return await getOneUsers(repo)
                }))
                setStateRepositories(userData)
            }
        )()
    },[])

    return(
        <View>
            {
                stateRepositories.map((repo) => (
                    <View key={repo.id}>
                        <Text>{repo.login}</Text>
                        <Text>{repo.bio == null ? "Sin biografía" : repo.bio}</Text>
                        <Text>{repo.public_repos}</Text>
                        <Text>{repo.public_gists}</Text>
                        <Text>{repo.followers}</Text>
                        <Text>{repo.following}</Text>
                    </View>
                ))
            }
        </View>
    )
}