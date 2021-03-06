import React, { useContext, useState } from 'react';
import { StyledPin } from './ImgPin.style';
import ImgPinBoardList from './ImgPinBoardList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';
import { Link } from 'react-router-dom';

function ImgPin({imgInfo, randomizeImgs, shuffle, images, setImages}){
    const [boardsInfo, setBoardsInfo] = useContext(BoardsInfoContext);
    const [showModal, setShowModal] = useState(false);

    // show modal
    function toggleBoardList(){
        setShowModal(!showModal);
    }

    // in imgpindetails, shuffle img when other pins clicked
    function shuffleImgPins(){
        if(randomizeImgs){
            setImages(shuffle(images));
        }
    }

    return (
        <StyledPin>
            <Link className="img-link" to={`/pinterest-clone/pin/${imgInfo.id}`} onClick={shuffleImgPins}>
                <img src={imgInfo.urls.regular} alt={imgInfo.alt_description} />
            </Link>

            {/* hover modal */}
            <div className="add-to-board-container">
                <div className="add-to-board" onClick={toggleBoardList}>
                    <div className="board-drop-down" >
                        <h1>Add To Board</h1>
                        <ExpandMoreIcon />
                    </div>
                </div>

                {/* board list modal */}
                <div className="modal-board-list-container" style={{display: showModal ? "block" : "none"}}>
                    <div className="modal-list-size">
                        <h3>Save to board</h3>
                        <p>All boards</p>
                        <div className="board-list">
                            {
                                boardsInfo.map(board =>
                                    <ImgPinBoardList boardProps={board} imgInfo={imgInfo} key={board.boardId}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </StyledPin>
    )
}

export default ImgPin
