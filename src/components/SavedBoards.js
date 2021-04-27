import React, { useContext, useState } from 'react';
import { StyledBoardsWrapper } from './SavedBoard.style';
import Board from './Board';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';


function SavedBoards() {
    const [ boardsInfo, setBoardsInfo ] = useContext(BoardsInfoContext);

    return (
        <div>
            <StyledBoardsWrapper>
                {/* map out all existing boards */}
                {
                    boardsInfo.map(board => <Board key={board.boardId} {...board} />)
                }
                
            </StyledBoardsWrapper>
        </div>
    )
}

export default SavedBoards

