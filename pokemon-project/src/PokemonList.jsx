import React from 'react';
import './PokemonList.css';

function PokemonList({ pokemon }) {
  return (
    <ul className='pokemonList'>
      {pokemon.map((poke) => (
        <li key={poke.name} className='pokemonItem'>
          <img src={poke.sprites.front_default} alt={poke.name} 
          width=
          '150'
          height='150'/>
          {poke.name}
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;