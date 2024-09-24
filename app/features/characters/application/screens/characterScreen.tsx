import { useEffect } from "react"
import { CharactersProvider, useCharactersState } from "../providers/charactersProvider"
import { View } from "react-native"
import { CharacterCard } from "./components/characterCard"

const RenderCharacters = ({ characters }: any) => {
    return (
        characters.map((character: any) => <CharacterCard key={character.id} character={character} />)
    )
}

const CharactersView = () => {
    const { loading, characters, getCharacters } = useCharactersState()
    useEffect(() => {
        getCharacters(1)
    }, [])
    if (loading) return (
        <View>
            loading...
        </View>
    )
    return (
        <View>
            <RenderCharacters characters={characters} />
        </View>
    )
}

export const CharactersScreen = () => {
    <CharactersProvider>
        <CharactersView />
    </CharactersProvider>
}