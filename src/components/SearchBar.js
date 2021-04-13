import React from 'react';
import { StyledSearchBar } from './Nav.style';

function SearchBar({ className, placeholder}) {
    return (
        <form className={className}>
            <input type="text" placeholder={placeholder} />
            <button></button>
        </form>
    )
}

export default SearchBar
