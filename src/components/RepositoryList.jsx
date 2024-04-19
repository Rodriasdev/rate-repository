
import { Text, FlatList } from "react-native";
import repositories from "../data/repositories.js";
import { RepositoryItems } from "./RepositoryItems.jsx";
export const RepositoryList = () => {



    return(
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item:repo}) => (
                repositories.map((repo, index) => (
                    <RepositoryItems key={`${repo.id}-${index}`} {...repo}/>
                )
            )
         )}/>
    )
}