import React from 'react';

function PokemonList({ pokemon }) {
  return (
    <ul>
      {pokemon.map((poke) => (
        <li key={poke.name}>
          <img src={poke.sprites.front_default} alt={poke.name} />
          {poke.name}
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;