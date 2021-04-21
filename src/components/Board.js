import React, { useState } from 'react';
import { StyledBoardLink, StyledBoard,  OverlappedImages } from './Board.style';
import LockIcon from '@material-ui/icons/Lock';
import CreateIcon from '@material-ui/icons/Create';
import CreateBoard from './CreateBoard';
import BoardDetails from './BoardDetails';


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
        {/*  */}
            <StyledBoardLink id={boardId} to={`/pinterest-clone/profile/${boardName}`}>
                <StyledBoard>
                    <LockIcon className="lock-icon" style={{display: isPrivate ? "block" : "none"}}/>
                    <OverlappedImages>
                        {/* //! add images */}
                        <img src="" alt=""/>
                        <StyledBoardLink to="/pinterest-clone/profile"><CreateIcon className="edit-icon" onClick={editBoard}/></StyledBoardLink>
                    </OverlappedImages>
                    
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
                        filteredBoard={""}
                        editId={boardId}
                        editName={boardName}
                        editIsPrivate={isPrivate}
                        />
            }
        </>
    )
}

export default Board