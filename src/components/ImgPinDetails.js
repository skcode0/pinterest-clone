import React, { useContext, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { StyledImgPinDetailsWrapper, StyledImg, StyledOtherImgs } from './ImgPinDetails.style';
import { CachedImgsContext } from './contexts/CachedImgsContext';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';
import ImgPinBoardList from './ImgPinBoardList';
import HomeBoard from './HomeBoard';

function ImgPinDetails({ match }) {
    const [cachedImages, setCachedImages] = useContext(CachedImgsContext);
    const [boardsInfo, setBoardsInfo] = useContext(BoardsInfoContext);

    let filteredPin = cachedImages.filter(img => img.id === match.params.id)[0];

    // make the page scroll to top when another image clicked
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {
                filteredPin &&
                <StyledImgPinDetailsWrapper>
                    <StyledImg>
                        <a className="img-container" href={filteredPin.links.html} target="_blank" rel="noreferrer">
                            <img src={filteredPin.urls.regular} alt={filteredPin.alt_description} />
                        </a>

                        <div className="pin-board-list">
                            <h1>Add to board</h1>
                            <div className="board-list-container">
                                {
                                    boardsInfo.map(board =>
                                        <ImgPinBoardList boardProps={board} imgInfo={filteredPin} key={board.boardId}/>
                                    )
                                }
                            </div>
                        </div>
                    </StyledImg>

                    <StyledOtherImgs>
                        <h3 className="other-imgs-title">Other Images</h3>
                        <HomeBoard randomizeImgs={true}/>
                    </StyledOtherImgs>
                </StyledImgPinDetailsWrapper>
            }
        </>
    )
}

export default ImgPinDetails
