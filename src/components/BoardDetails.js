import React, { useContext, useState } from 'react';
import { BoardsInfoContext } from './contexts/BoardsInfoContext';
import HomeBoard from './HomeBoard';
import LockIcon from '@material-ui/icons/Lock';
import EditIcon from '@material-ui/icons/Edit';
import { StyledBoardDetailsWrapper, StyledBoardHeader, StyledSecret, StyledH1 } from './BoardDetails.style';
import CreateBoard from './CreateBoard';

function BoardDetails(props) {
    console.log(props);

    const [boardsInfo, setBoardsInfo] = useContext(BoardsInfoContext);

    const [ edit, setEdit ] = useState(false);

    function editBoard(e){
        setEdit(true);
    }

    // close edit modal
    function closeEditModal(){
        setEdit(false);
    }

    let filteredBoard = boardsInfo.filter(board => board.boardId === props.location.boardId)[0];

    return (
        <>
            {
                filteredBoard &&
                <>
                    <StyledBoardDetailsWrapper>
                    <StyledBoardHeader>
                        <h1>{filteredBoard.boardName}</h1>
                        <EditIcon className="board-edit" onClick={editBoard}/>
                    </StyledBoardHeader>
                    {
                        filteredBoard.isPrivate && 
                        <StyledSecret>
                            <LockIcon className="lock-icon"/> 
                            <p>Secret Board</p>
                        </StyledSecret>
                    }
                    <StyledH1>
                        {filteredBoard.boardImgs.length} {filteredBoard.boardImgs.length < 2 ? "Pin" : "Pins"}
                    </StyledH1>
                    <HomeBoard forBoard={true} filteredboardImgs={filteredBoard.boardImgs}/>
                </StyledBoardDetailsWrapper>


                {
                    edit && 
                        <CreateBoard 
                            closeEditModal={closeEditModal} 
                            shouldEdit={true} 
                            editId={filteredBoard.boardId}
                            editName={filteredBoard.boardName}
                            editIsPrivate={filteredBoard.isPrivate}
                        />
                }
            </>
            }
        </>
    )
}

export default BoardDetails
