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
          <p>Name: {poke.name}</p>

          <p>Abilities: {poke.abilities.map((ability) => ability.ability.name).join(', ')}</p>

          <p>Type: {poke.types.map((type) => type.type.name).join(', ')}</p>

          <ul>
            {poke.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;