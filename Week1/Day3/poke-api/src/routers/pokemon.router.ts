import express from 'express';
import { pokemon } from '../data';
export const pokemonRouter = express.Router();

// Retrieve all pokemon
pokemonRouter.get('', (req, res) => {
    res.json(pokemon);
});

// Retrieve all pokemon of a specified type
pokemonRouter.get('/type/:type', (req, res) => {
    const pokemonByType = pokemon.filter(poke => poke.type === req.params);
    res.json(pokemonByType);
});

pokemonRouter.post('', (req, res) => {
    pokemon.push(req.body);
    res.status(201);
    res.send('Successfully Created Pokemon');
});