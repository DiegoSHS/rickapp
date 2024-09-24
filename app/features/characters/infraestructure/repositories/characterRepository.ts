import { CharactersDatasource } from "../../domain/datasource/characterDatasource";
import { CharacterResult } from "../../domain/entities/characterResult";
import { CharacterRepository } from "../../domain/repositories/charactersRepository";

export class CharacterRepositoryImp extends CharacterRepository {
    dataSource: CharactersDatasource;
    constructor(dataSource: CharactersDatasource) {
        super();
        this.dataSource = dataSource;
    }
    getCharacters(page: number): Promise<CharacterResult> {
        return this.dataSource.getCharacters(page);
    }
}