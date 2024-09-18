import { CharactersDatasource } from "../../domain/datasource/characterDatasource";
import { Character } from "../../domain/entities/characters";

const API_URL = ''

export class CharacterDatasourceImp extends CharactersDatasource {
    async getCharacters(page: number) {
        const response = await fetch(`${API_URL}/character/?page=${page}`);
        const data = await response.json();
        return data.results.map((character: any) => new Character(
            character.id,
            character.name,
            character.status,
            character.gender,
            character.image,
            character.location,
        ));
    }
}