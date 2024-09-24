import { createContext, FC, ReactNode, useContext, useReducer } from "react";
import { Character } from "../../domain/entities/characters";
import { CharacterResult } from "../../domain/entities/characterResult";
import { CharacterDatasourceImp } from "../../infraestructure/datasources/characterDatasourceImp";
import { CharacterRepositoryImp } from "../../infraestructure/repositories/characterRepository";

interface ContextDefinition {
    loading: boolean;
    page: number;
    totalPages: number;
    count: number;
    characters: Character[];
    getCharacters: (page: number) => void;
}

const CharacterContext = createContext({} as ContextDefinition);

interface CharacterState {
    loading: boolean;
    page: number;
    totalPages: number;
    count: number;
    characters: Character[];
}

type CharacterActionType = {
    type: 'Set Loading', payload: boolean
} | { type: 'Set Data', payload: CharacterResult }

const initialState: CharacterState = {
    loading: true,
    page: 0,
    count: 0,
    totalPages: 0,
    characters: []
}

function CharactersReducer(state: CharacterState, action: CharacterActionType): CharacterState {
    switch (action.type) {
        case 'Set Loading':
            return { ...state, loading: action.payload }
        case 'Set Data':
            return {
                ...state,
                loading: false,
                totalPages: action.payload.pages,
                count: action.payload.count,
                characters: action.payload.characters
            }
        default:
            return state;
    }
}

type Props = {
    children?: ReactNode
}

export const CharactersProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(CharactersReducer, initialState);
    const getCharacters = async (page: number) => {
        const repository = new CharacterRepositoryImp(
            new CharacterDatasourceImp()
        );
        dispatch({ type: 'Set Loading', payload: true });
        const data = await repository.getCharacters(page);
        dispatch({ type: 'Set Data', payload: data });
    }
    return (
        <CharacterContext.Provider value={{
            ...state, getCharacters
        }}>
            {children}
        </CharacterContext.Provider>
    )
}

export function useCharactersState() {
    const context = useContext(CharacterContext);
    if (context === undefined) {
        throw new Error('useCharactersState must be used within a CharactersProvider');
    }
    return context;
}