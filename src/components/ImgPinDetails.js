import React, { useContext } from 'react';
import {  } from './ImgPinDetails.style';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';

function ImgPinDetails({ match }) {
    // console.log(match.params.id);
    const [ boardsInfo, setBoardsInfo ] = useContext(BoardsInfoContext);


    return (
        // show full image
        <div style={{marginTop: "5rem"}}>
            pin detail
        </div>

        // other image pins

    )
}

export default ImgPinDetails
