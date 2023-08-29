import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className='searchBarContainer'>
      <input
        className='searchInput'
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
