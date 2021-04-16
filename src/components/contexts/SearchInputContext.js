import React, { useState, createContext } from 'react';

export const SearchInputContext = createContext();

export function SearchInputProvider({children}){
    const [input, setInput] = useState("");

    return (
        <SearchInputContext.Provider value={[input, setInput]}>
            {children}
        </SearchInputContext.Provider>
    )
}