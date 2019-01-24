import { Pokemon } from './models/pokemon';
import { User } from './models/user';
import { PokemonMove } from './models/pokemon-move';

const peter = new User(1, 'peter', 'whatup', 'Peter');
const kyle = new User(2, 'kylekills', 'kpassword', 'Kyle');

const slash = new PokemonMove(1, 'slash', 'normal', 25, 10);
const hyperBeam = new PokemonMove(2, 'hyper beam', 'normal', 10, 100);
const blastBurn = new PokemonMove(3, 'blast burn', 'fire', 10, 30);
const surf = new PokemonMove(4, 'surf', 'water', 20, 75);

export let pokemon: Pokemon[] = [
    new Pokemon(4, 'Charmander', 5, ['fire'], [slash, blastBurn], peter),
    new Pokemon(7, 'Squirtle', 5, ['water'], [hyperBeam, surf], kyle)
];

console.log(pokemon[0]);