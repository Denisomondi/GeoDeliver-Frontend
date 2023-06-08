import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <>
      <h2 className="h2app">Search in over 2 Million Products:</h2>
      <div className="search-container">
        <input
          type="text"
          name="text"
          className="input"
          placeholder="Search here..."
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </>
  );
};

export default SearchBar;
