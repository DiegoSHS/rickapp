import { Character } from "./characters";

export class CharacterResult {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
    characters: Character[];

    constructor(
        count: number,
        pages: number,
        characters: Character[],
        next?: string,
        prev?: string,
    ) {
        this.count = count;
        this.pages = pages;
        this.characters = characters;
        this.next = next;
        this.prev = prev;
    }
}