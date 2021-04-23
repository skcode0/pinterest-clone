import React, { useState, createContext } from 'react';
import testImg from '../vincent-ledvina-CJrYFOQCT8w-unsplash.jpg';

export const ImagePinsContext = createContext();

export function ImagePinsProvider({children}){
    const [images, setImages] = useState([]);

    return (
        <ImagePinsContext.Provider value={[images, setImages]}>
            {children}
        </ImagePinsContext.Provider>
    )
}