import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar'; 
import './App.css';

function App() {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [pokemonName, setPokemonName] = useState('null');
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonList, setPokemonList] = useState([]);

  const evolutionChainId = 1;

  useEffect(() => {
    fetchEvolutionChainData();
    fetchPokemonData();
  }, []);

  const fetchEvolutionChainData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}/`);
      setEvolutionChain(response.data);
      const newName = response.data.chain.species.name;
      setPokemonName(newName);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/', {
        params: {
          limit: 100, 
          offset: 0, 
        },
      });

      const pokemonDataPromises = response.data.results.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        return pokemonResponse.data;
      });
      
      const pokemonData = await Promise.all(pokemonDataPromises);
      setPokemonList(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.startsWith(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
    setSearchTerm(searchTerm);
  };
  

  return (
    <div className='appContainer'>
      <h1 className='appTitle'>Pokémon React App</h1>
      <SearchBar handleSearch={handleSearch} /> 
      <div className='pokemonListContainer'>
        <PokemonList pokemon={filteredPokemon.length > 0 ? filteredPokemon : pokemonList} />
      </div>
      
    </div>
  );
}

export default App
