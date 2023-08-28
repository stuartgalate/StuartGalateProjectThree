import React from 'react';

function SearchBar({ handleSearch }) {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
