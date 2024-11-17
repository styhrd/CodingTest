import React from 'react';
import SB from '../assets/SvgIcons/search.svg';
import '../styles/Searchbar.css';

const SearchBar = ({ showBar, handleClick }) => {
    return (
        <div onClick={handleClick} className={`searchbar ${showBar ? 'active' : ''}`}>
            <img src={SB} alt="Search Icon" />
            <p>SEARCH</p>
        </div>
    );
};

export default SearchBar;
