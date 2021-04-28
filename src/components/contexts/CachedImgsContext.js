import React, { useState, createContext } from 'react';

export const CachedImgsContext = createContext();

export function CachedImgsProvider({children}){
    const [cachedImages, setCachedImages] = useState([]);

    return (
        <CachedImgsContext.Provider value={[cachedImages, setCachedImages]}>
            {children}
        </CachedImgsContext.Provider>
    )
}