import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import SearchIcon from "../../assets/search-icon.svg";
import MovieIcon from "../../assets/movie-icon.svg";

import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearch = (event) => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <img className="movie" src={MovieIcon} />
        <input
          type="text"
          placeholder="Find Movie"
          //onChange={doSearch}
          value={state}
        />
        <img className="search" src={SearchIcon} />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
