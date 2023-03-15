import React from 'react';
import '../styles/Home.css';

const Search = () => (
  <form>
    <input type="text" id="search" name="search" placeholder="Search for city" />
    <button type="submit" className="btn-search">Go</button>
  </form>
);

export default Search;
