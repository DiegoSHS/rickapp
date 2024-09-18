import { CharacterResult } from "../entities/characterResult";

export abstract class CharacterRepository {
  abstract getCharacters(page: number): Promise<CharacterResult[]>;
}