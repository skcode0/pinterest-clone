import React, { useContext, useState, useEffect } from 'react';
import { StyledBoardsWrapper } from './SavedBoard.style';
import Board from './Board';
import { StyledBoardLink, StyledBoard, CoverImage } from './Board.style';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';


function SavedBoards() {
    const [ boardsInfo, setBoardsInfo ] = useContext(BoardsInfoContext);

    //default board
    const [ allImgs, setAllImgs ] = useState([]);

    // useEffect(() =>{
    //     let allBoardImgsObjArr = boardsInfo.map(board => board.boardImgs);
    //     // ! check logic

    //     let allboardImgs = allBoardImgsObjArr.reduce((a,b) => a.urls.regular.concat(b.urls.regular), []);
    //     setAllImgs(allboardImgs)
    //     console.log(allboardImgs);
    // }, [boardsInfo]);


    return (
        <div>
            <StyledBoardsWrapper>
                {/* default board */}
                {/* //! */}
                <StyledBoardLink to="/pinterest-clone/profile/pins">
                    <StyledBoard>
                        <CoverImage>
                            {/* //! */}
                            {/* {
                                allImgs && <img src={allImgs} alt=""/>
                            } */}
                        </CoverImage>
                        <div className="pin-info">
                            <h1>All Pins</h1>
                            {/* //! change pin number via state */}
                            <p>{allImgs.length} Pins</p>
                        </div>
                    </StyledBoard>
                </StyledBoardLink>
                
                {/* map out all existing boards */}
                {
                    boardsInfo.map(board => <Board key={board.boardId} {...board} />)
                }
                
            </StyledBoardsWrapper>
        </div>
    )
}

export default SavedBoards

