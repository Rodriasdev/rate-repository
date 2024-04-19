
import { View,Text } from "react-native";
import repositories from "../data/repositories.js";

export const RepositoryList = () => {



    return(
        <View>
            {
                repositories.map((repo) => (
                    <View key={repo.id}>
                        <Text>Username: {repo.login}</Text>
                        <Text>Biography: {repo.bio == null ? "sin biography" : repo.bio}</Text>
                        <Text>Repositories publics:{repo.public_repos}</Text>
                        <Text>Lenguage:{repo.lenguage}</Text>
                        <Text>Followers: {repo.followers}</Text>
                        <Text>Followings: {repo.following}</Text>
                        <Text>Stars:{repo.stars}</Text>
                        <Text>Review:{repo.reviewCount}</Text>
                        <Text>Location: {repo.location  == null ? "sin location" : repo.location}</Text>
                        <Text>Rating:{repo.rating}</Text>
                    </View>
                ))
            }
        </View>
    )
}