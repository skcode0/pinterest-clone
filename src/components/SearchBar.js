import React from 'react'

function SearchBar({ className }) {
    return (
        <form className={className}>
            <input type="text" placeholder="Search" />
            <button></button>
        </form>
    )
}

export default SearchBar
