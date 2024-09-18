import { Character } from "../entities/characters";

abstract class CharactersDatasource {
  abstract getCharacters(page: number): Promise<Character[]>;
}