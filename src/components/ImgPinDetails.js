import React, { useContext } from 'react';
import { StyledImgPinDetailsWrapper, StyledImg, StyledOtherImgs } from './ImgPinDetails.style';
import { ImagePinsContext } from './contexts/ImagePinsContext';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';
import ImgPinBoardList from './ImgPinBoardList';
import HomeBoard from './HomeBoard';

function ImgPinDetails({ match }) {
    const [ images, setImages ] = useContext(ImagePinsContext);
    const [boardsInfo, setBoardsInfo] = useContext(BoardsInfoContext);

    let filteredPin = images.filter(img => img.id === match.params.id)[0];

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
