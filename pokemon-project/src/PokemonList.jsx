import React from 'react';

function PokemonList({ pokemon }) {
  return (
    <ul>
      {pokemon.map((pokemon, index) => (
        <li key={index}>{pokemon}</li>
      ))}
    </ul>
  );
}

export default PokemonList;