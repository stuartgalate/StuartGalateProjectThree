import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
