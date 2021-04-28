import React, { useContext, useEffect } from 'react';
import { Main, ImgWrapper } from './HomeBoard.style';
import ImgPin from './ImgPin';
import { ImagePinsContext } from './contexts/ImagePinsContext';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import { CachedImgsContext } from './contexts/CachedImgsContext';
require('dotenv').config();


function HomeBoard(props) {
    let {forBoard, filteredboardImgs, randomizeImgs} = props;
    const [images, setImages] = useContext(ImagePinsContext);
    const [cachedImages, setCachedImages] = useContext(CachedImgsContext);


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
            if(!props.location.fromSearch){
                getDefaultImgs();
            }
        }
    }, []);


    images.forEach(img => {
        // if cachedImages doesn't have image, add it
        let cachedIds = cachedImages.map(cachedImg => cachedImg.id);
        if(!cachedIds.includes(img.id)){
            setCachedImages(cachedImages.concat(img));
        }
    })
    
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
                        images.map(image => <ImgPin imgInfo={image} key={image.id} shuffle={shuffle} randomizeImgs={randomizeImgs} images={images} setImages={setImages}/>)
                    }
                </Masonry>
            </ImgWrapper>
        </Main>
    )
}

HomeBoard.defaultProps = {
    location: {
        fromSearch: false
    }
}

export default HomeBoard
