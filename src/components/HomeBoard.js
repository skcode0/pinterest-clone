import React, { useContext, useEffect } from 'react';
import { Main, ImgWrapper } from './HomeBoard.style';
import ImgPin from './ImgPin';
import { ImagePinsContext } from './contexts/ImagePinsContext';
import axios from 'axios';
import Masonry from 'react-masonry-css';
require('dotenv').config();


function HomeBoard({forBoard, filteredboardImgs, randomizeImgs}) {
    const [images, setImages] = useContext(ImagePinsContext);

    //ES6 ver. of Durstenfeld shuffle (optimized version of Fisher-Yates)
    function shuffle(arr){
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    useEffect(() =>{
        async function getDefaultImgs(){
            // get default images when page opened
            const response = await axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_API_KEY}&per_page=30`);
            // return array of 30 images 
            setImages(shuffle(response.data));
        }

        if(!forBoard){
            getDefaultImgs();
        }
    }, [])

    if(randomizeImgs){
        setImages(shuffle(images));
    }

    const breakpointColumnsObj = {
        default: 7,
        1440: 5,
        1024: 4,
        768: 3,
        420: 2,
    };

    return (
        <Main>
            <ImgWrapper>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                        forBoard ? 
                        filteredboardImgs.map(pin => <ImgPin forBoard={true} imgInfo={pin} key={pin.id}/>) :
                        images.map(image => <ImgPin imgInfo={image} key={image.id} />)
                    }
                </Masonry>
            </ImgWrapper>
        </Main>
    )
}

export default HomeBoard
