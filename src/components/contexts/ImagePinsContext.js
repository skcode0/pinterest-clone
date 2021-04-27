import React, { useState, createContext } from 'react';

export const ImagePinsContext = createContext();

export function ImagePinsProvider({children}){
    const [images, setImages] = useState([]);

    return (
        <ImagePinsContext.Provider value={[images, setImages]}>
            {children}
        </ImagePinsContext.Provider>
    )
}