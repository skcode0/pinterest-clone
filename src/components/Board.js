import React, { useState, useContext } from 'react';
import { StyledBoardLink, StyledBoard,  CoverImage } from './Board.style';
import LockIcon from '@material-ui/icons/Lock';
import CreateIcon from '@material-ui/icons/Create';
import CreateBoard from './CreateBoard';


function Board({ boardId, boardName, boardImgs, isPrivate, createdDate }){

    const [ edit, setEdit ] = useState(false);

    function displayBoardAge(){
        let milli = new Date().getTime() - createdDate;
        let min = Math.floor(milli / (60*1000));
        let hrs = Math.floor(milli / (60*60*1000));
        let days = Math.floor(milli / (60*60*24*1000));

        if(min < 5){
            return `Now`;
        }
        else if(min < 60){
            return `${min}m`;
        }
        else if(days === 0){
            return `${hrs}h`;
        }
        else if(days < 7){
            return `${days}d`;
        }
        if(days >= 7){
            return `${Math.floor(days / 7)}w`;
        }
    }

    function editBoard(e){
        setEdit(true);
    }

    // close edit modal
    function closeEditModal(){
        setEdit(false);
    }

    return (
        <>
            <StyledBoardLink id={boardId} to={{
                pathname: `/pinterest-clone/profile/${boardName}`,
                boardId: boardId
            }}>
                <StyledBoard>
                    <LockIcon className="lock-icon" style={{display: isPrivate ? "block" : "none"}}/>
                    <CoverImage>
                        {
                            boardImgs.length ? 
                            <img src={boardImgs[0].urls.regular} alt={ boardImgs[0].urls.regular} /> : ""
                        }
                        <StyledBoardLink to="/pinterest-clone/profile"><CreateIcon className="edit-icon" onClick={editBoard}/></StyledBoardLink>
                    </CoverImage>
                    
                    <div className="pin-info">
                        <h1>{boardName.length > 17 ? boardName.substr(0, 16) + "..." : boardName}</h1>
                        <p>{boardImgs.length} Pins <span>{displayBoardAge()}</span></p>
                    </div>
                </StyledBoard>
            </StyledBoardLink>

            {/* if edit button pressed, show CreateBoard.js */}
            {
                edit && 
                    <CreateBoard 
                        closeEditModal={closeEditModal} 
                        shouldEdit={true} 
                        editId={boardId}
                        editName={boardName}
                        editIsPrivate={isPrivate}
                        />
            }
        </>
    )
}

export default Board
