import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/moovietime-logo.svg'
import gridlogo from '../../assets/grid-icon.svg'
import '../elements/Searchbar.css'
import SearchIcon from "../../assets/search-icon.svg";
import MovieIcon from "../../assets/movie-icon.svg";

 
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from '../styles/StyledSearchBar';

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  const timeOut = useRef(null);

  const doSearch = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    
    <div className="navbar">
    <div className="logo">
        <img src={logo}></img>
    </div>
    <div className="searchbar" style={{height:"20px"}}>
    <StyledSearchBar>
      <StyledSearchBarContent>
      <img className="movie" src={MovieIcon} />
        <input
          type="text"
          placeholder="Find Movie"
          onChange={doSearch}
          value={state}
        />
        <img className="search" src={SearchIcon} />
      </StyledSearchBarContent>
    </StyledSearchBar>
    </div>
    <div className="navbar-list content">
        <ul>
            <li><img className="gridlogo" src={gridlogo}></img>CATEGORIES</li>
            <li>MOVIES</li>
            <li>TV SHOWS</li>
            <li>LOGIN</li>
        </ul>
    </div>
</div>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
