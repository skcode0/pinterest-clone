import React, { useContext } from 'react';
import { StyledBoardsWrapper } from './SavedBoard.style';
import Board from './Board';
import { StyledBoardLink, StyledBoard, OverlappedImages } from './Board.style';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';


function SavedBoards() {
    const [ boardsInfo, setBoardsInfo ] = useContext(BoardsInfoContext);

    return (
        <div>
            <StyledBoardsWrapper>
                {/* default board */}
                <StyledBoardLink to="/pinterest-clone/profile">
                    <StyledBoard>
                        {/* 3 images: width - 157; height - 157;;; width - 78, height -78  */}
                        {/* 5 images: width - 116; height - 155 */}

                        <OverlappedImages>
                            <img src="" alt=""/>
                        </OverlappedImages>
                        <div className="pin-info">
                            <h1>All Pins</h1>
                            {/* //! change pin number via state */}
                            <p>5 Pins</p>
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

