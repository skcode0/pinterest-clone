import React, { useContext } from 'react';
import { StyledSearchBar } from './Nav.style';
import { SearchInputContext } from './contexts/SearchInputContext';
import { ImagePinsContext } from './contexts/ImagePinsContext';
import axios from 'axios';
require('dotenv').config();

function SearchBar({ className, placeholder}) {
    const [input, setInput] = useContext(SearchInputContext);
    const [images, setImages] = useContext(ImagePinsContext);

    //ES6 ver. of Durstenfeld shuffle (optimized version of Fisher-Yates)
    function shuffle(arr){
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    async function getImages(term){
        const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${term}&per_page=30`);
        // return array of 30 searched images
        setImages(shuffle(response.data.results));
    }

    function handleSubmit(e){
        e.preventDefault();
        getImages(input);
        setInput("");
    }

    return (
        <form className={className} onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder} value={input} onChange={e => setInput(e.target.value)}/>
        </form>
    )
}

export default SearchBar
