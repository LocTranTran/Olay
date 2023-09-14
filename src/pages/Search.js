import React, { useState } from 'react';
import '../styles/Search.scss';
import Button from './Button';

const Search = () => {
  const [search, setSearch] = useState();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    setSearch('');
  };

  return (
    <div className="search">
      <input
        className="animated-input"
        onChange={handleInputChange}
        value={search}
      />
      <Button
        icon={<i className="fa-solid fa-magnifying-glass"></i>}
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default Search;