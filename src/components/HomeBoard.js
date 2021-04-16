import React, { useContext, useEffect } from 'react';
import { Main, ImgWrapper } from './HomeBoard.style';
import ImgPin from './ImgPin';
import { ImagePinsContext } from './contexts/ImagePinsContext';
import axios from 'axios';
require('dotenv').config();

function HomeBoard() {
    const [images, setImages] = useContext(ImagePinsContext);

    //ES6 ver. of Durstenfeld shuffle (optimized version of Fisher-Yates)
    function shuffle(arr){
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function chooseOrderBy(){
        let randomNum = Math.floor(Math.random() * 3);
        switch(randomNum){
            case 2: 
                return "popular";
            case 1:
                return "oldest";
            case 0:
            default:
                return "latest"
        }
    }

    useEffect(() =>{
        async function getDefaultImgs(){
            const response = await axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_API_KEY}&per_page=30&order_by=${chooseOrderBy()}`);
            // return array of 30 images 
            setImages(shuffle(response.data));
        }
        getDefaultImgs();
    }, [])

    return (
        <Main>
            <ImgWrapper>
                {
                    images.map(image => <ImgPin imgInfo={image} key={image.id} />)
                }
            </ImgWrapper>
            
        </Main>
    )
}

export default HomeBoard
