import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar'; 
import './App.css';

// Use the useEffect hook to fetch Pokemon data from API
// Use AXIOS to perform API call
// Store Data in state

// Create the search bar
// Initialize state variable 'searchTerm' to store user input
// Implement the 'handleChange' function to update the 'searchTerm' state
// Add the following: <h1> Header Pokémon React App" as the title, searchBar component with the 'handleSearch' function as a prop, a PokemonList component with the `filteredPokemon` as a prop

// Create the SearhBar Component
// Initialize state variable `searchTerm` to store user input
// Implement the `handleChange` function to update the `searchTerm` state
// Render an input element

// Create the PokemonList Component
// Receive the 'pokemon' prop
// Render a <ul> element containing a list of <li> elements for each Pokemon in the 'pokemon' prop


function App() {
  
  const [filteredPokemon, setFilteredPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [pokemonName, setPokemonName] = useState('Stuart');
  const evolutionChainId = 1;

  useEffect(() => {
    fetchEvolutionChainData();
  }, []);

  const fetchEvolutionChainData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}/`);
      console.log(response)
      setEvolutionChain(response.data);
      const newName = response.data.chain.species.name;
      setPokemonName(newName)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log()
  };

  const handleSearch = (searchTerm) => {
    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };
  

  return (
    <>
      <h1>Pokémon Evolution Chain</h1>
      {evolutionChain ? (
        <div>
          {pokemonName}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
