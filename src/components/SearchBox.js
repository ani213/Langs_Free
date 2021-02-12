import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div class="search-container">
    <form action="/">
      <input type="text" placeholder="Search.." name="search" onChange={searchChange} />
      <button type="submit"><i class="fa fa-search"></i></button>
    
    </form>
  </div>
  );
}

export default SearchBox;