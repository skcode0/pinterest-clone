import React, { useContext, useState, useEffect } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import { StyledBoardList } from './ImgPinBoardList.style';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';


function ImgPinBoardList({boardProps, imgInfo}) {
    const [boardsInfo, setBoardsInfo] = useContext(BoardsInfoContext);
    const [alreadySaved, setAlreadySaved] = useState(boardProps.boardImgs.some(imgObj => imgObj.id === imgInfo.id));

    useEffect(() =>{
        setAlreadySaved(boardProps.boardImgs.some(imgObj => imgObj.id === imgInfo.id));
    }, [boardProps.boardImgs.length])

    const alreadySavedStyle = {
        backgroundColor: "#b8b8b8"
    }

    function addPinToBoard(event){
        let filteredBoard = boardsInfo.filter(board => board.boardId === boardProps.boardId)[0];
        // if saved image clicked again, delete it from board
        if(alreadySaved){
            setAlreadySaved(false);
            setBoardsInfo(
                boardsInfo.map(board => {
                    if(board.boardId === filteredBoard.boardId){
                        return({
                            ...board,
                            boardImgs: board.boardImgs.filter(img => img.id !== imgInfo.id)
                        });
                    }
                    return board;
                })
            )
        }
        else{
            // check for duplicate images in boards
            let duplicateImgCheck = true;
            if(filteredBoard.boardImgs.length){
                duplicateImgCheck = filteredBoard.boardImgs.every(img => img.id !== imgInfo.id);
            }
            // if img not in list, add it;
            if(duplicateImgCheck){
                setBoardsInfo(
                    boardsInfo.map(board => {
                        if(board.boardId === filteredBoard.boardId){
                            return({
                                ...board,
                                boardImgs: [...board.boardImgs, imgInfo]
                            });
                        }
                        return board;
                    })
                );
            }
            setAlreadySaved(true);
        }
    }

    return (
        <StyledBoardList>
             {/* <div className="board-info-container" onClick={addPinToBoard}></div> */}
            <div className="board-info-container" id={boardProps.boardId} onClick={addPinToBoard}>
                <div className="board-info">
                    <img className="board-info-img" src={boardProps.boardImgs.length ? boardProps.boardImgs[0].urls.regular : "#"} alt={boardProps.boardImgs.length && boardProps.boardImgs[0].urls.regular}/>
                    <div>{boardProps.boardName > 5 ? boardProps.boardName : boardProps.boardName.substring(0,5) + "..."}</div>
                    <div>{boardProps.isPrivate && <LockIcon />}</div>
                </div>
                {
                    alreadySaved ? <button style={alreadySavedStyle}>Saved</button> : <button>Save</button>
                }
            </div>
        </StyledBoardList>
    )
}

export default ImgPinBoardList
