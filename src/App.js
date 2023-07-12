import React from 'react';
import { useState } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';

import "./App.css";

const API_URL = "https://pokeapi.co/api/v2/pokemon";


const App = () => {

    const [pokemon, setPokemon] = useState([]);

    axios.get(API_URL)
    .then(response => {
        setPokemon(response.data.results.map(p => p.name))
    })
    
  return (
    <div className='app'>
        <h1>Poke Api</h1>
        <div className='card'>
            <PokemonList pokemon={pokemon} />
        </div>  
    </div>
  )
}

export default App