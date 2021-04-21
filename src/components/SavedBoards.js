import React, { useContext, useState } from 'react';
import { StyledBoardsWrapper } from './SavedBoard.style';
import Board from './Board';
import { StyledBoardLink, StyledBoard, CoverImage } from './Board.style';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';


function SavedBoards() {
    const [ boardsInfo, setBoardsInfo ] = useContext(BoardsInfoContext);

    //default board
    // ! check logic
    // const [ allImgs, setAllImgs ] = useState(boardsInfo.reduce((a,b) => a.boardImgs.concat(b.boardImgs), []));

    return (
        <div>
            <StyledBoardsWrapper>
                {/* default board */}
                {/* //! */}
                <StyledBoardLink to="/pinterest-clone/profile/pins">
                    <StyledBoard>
                        {/* 3 images: width - 157; height - 157;;; width - 78, height -78  */}
                        {/* 5 images: width - 116; height - 155 */}

                        <CoverImage>
                            <img src="" alt=""/>
                        </CoverImage>
                        <div className="pin-info">
                            <h1>All Pins</h1>
                            {/* //! change pin number via state */}
                            <p>0 Pins</p>
                        </div>
                    </StyledBoard>
                </StyledBoardLink>
                
                {/* map out all existing boards */}
                {
                    boardsInfo.map(board => <Board key={board.boardId} {...board}/>)
                }
                
            </StyledBoardsWrapper>
        </div>
    )
}

export default SavedBoards

