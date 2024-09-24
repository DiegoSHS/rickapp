import { CharactersDatasource } from "../../domain/datasource/characterDatasource";
import { CharacterResult } from "../../domain/entities/characterResult";
import { Character } from "../../domain/entities/characters";

const API_URL = ''

export class CharacterDatasourceImp extends CharactersDatasource {
    async getCharacters(page: number): Promise<CharacterResult> {
        const response = await fetch(`${API_URL}/character/?page=${page}`);
        const data = await response.json();
        const characters = data.results.map((character: any) => new Character(
            character.id,
            character.name,
            character.status,
            character.gender,
            character.image,
            character.location,
        ));
        return new CharacterResult(
            data.info.count,
            data.info.pages,
            characters,
            data.info.next,
            data.info.prev
        )
    }
}