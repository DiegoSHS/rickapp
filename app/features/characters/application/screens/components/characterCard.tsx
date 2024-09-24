import { Image, Text, View } from "react-native";
import { Character } from "../../../domain/entities/characters";

interface Props {
    character: Character;
}

export const CharacterCard = ({ character }: Props) => {
    return (
        <View>
            <Text>{character.name}</Text>
            <Text>{character.status}</Text>
            <Text>{character.gender}</Text>
            <Image source={{ uri: character.image }} />
        </View>
    )
}