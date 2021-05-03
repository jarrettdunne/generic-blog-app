import React from "react";

import searchImg from '../assests/search_black_48dp.svg'
import "./styles/Search.css"

const Search = (props) => {
  return (
    <form className="search-form home-post" onSubmit={(e) => props.handleSearchSubmit(e)}>
      <img className="search-img" src={searchImg} alt="seach" />
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="Search"
        placeholder=""
        type="text"
      />
    </form>
  );
};

export default Search;
