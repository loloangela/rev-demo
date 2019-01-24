import { User } from './user';
import { PokemonMove } from './pokemon-move';

export class Pokemon {
    id: number;
    name: string;
    level: number;
    type: string[];
    moves: PokemonMove[];
    trainer: User;

    constructor(id = 0, name = '', lvl = 0, type: string[] = [], moves: PokemonMove[], trainer?: User) {
        this.name = name;
        this.level = lvl;
        this.type = type;
        this.moves = moves;
        this.trainer = trainer;
    }
}