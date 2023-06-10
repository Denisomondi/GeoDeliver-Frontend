import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:4567/products?query=${searchText}`);
      const data = await response.json();
      console.log('Search results:', data); 
      onSearch(data);
      setSearchText(''); // Clear the search bar
    } catch (error) {
      console.error('Error while fetching search results:', error);
    }
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h2 className="h2app">Search in over 2 Million Products:</h2>
      <div className="search-container">
        <input
          type="text"
          name="text"
          className="input"
          placeholder="Search here..."
          value={searchText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
