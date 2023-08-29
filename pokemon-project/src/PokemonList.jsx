import React from 'react';
import './PokemonList.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function PokemonList({ pokemon }) {
  return (
    <ul className='pokemonList'>
      {pokemon.map((poke) => (
        <li key={poke.name} className='pokemonItem'>
          <div className='pokemonCard'>
            <img 
            src={poke.sprites.front_default} 
            alt={poke.name} 
            width='150'
            height='150'
            className='pokemonImage'
            />
            
            <p className='pokemonName'><strong>Name:</strong> {capitalizeFirstLetter(poke.name)}</p>
            
            <div className='pokemonDetail'>
              <p><strong>Abilities:</strong> {poke.abilities.map((ability) => ability.ability.name).join(', ')}</p>

              <p><strong>Type:</strong> {poke.types.map((type) => type.type.name).join(', ')}</p>
            </div>
          

            <ul className='pokemonStat'>
              {poke.stats.map((stat) => (
              <li key={stat.stat.name}><strong>{capitalizeFirstLetter(stat.stat.name)}:</strong>{' '}{stat.base_stat}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;