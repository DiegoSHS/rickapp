import { CharacterResult } from "../entities/characterResult";

export abstract class CharactersDatasource {
  abstract getCharacters(page: number): Promise<CharacterResult>;
}