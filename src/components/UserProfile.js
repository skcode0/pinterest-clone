import React, { useState } from 'react';
import { StyledProfile, CreateWrapper, CreateDiv, CreateBoardModalWrapper, CreateBoardModal } from './UserProfile.style';
import IconButton from '@material-ui/core/IconButton'; // gives bubble effect when clicked
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import CreateBoard from './CreateBoard';
import SavedBoards from './SavedBoards';

function UserProfile() {
    const [ addBtnToggle, setAddBtnToggle ] = useState(false);

    const [ boardCreate, setBoardCreate ] = useState(false);
    const [ modalClose, setModalClose ] = useState(false);

    // toggle create board settings
    function toggleAddBtn(){
        setAddBtnToggle(!addBtnToggle);
    }

    // open up modal
    function createBoard(){
        setBoardCreate(true);
        setModalClose(false);
        setAddBtnToggle(false);
    }

    // close modal
    function closeModal(){
        setModalClose(true);
    }

    return (
        <>
            <StyledProfile>
                <div className="user-profile">u</div>
                <h1>user1</h1>
                <p>@user1</p>
                <h3 >0 followers · 0 following</h3>

                <IconButton style={{cursor: "not-allowed"}}>
                    <SettingsIcon style={{fontSize: "24px", fill: "black"}}/>
                </IconButton>

                <CreateWrapper>
                    <IconButton onClick={toggleAddBtn}>
                        <AddIcon style={{fontSize: "30px", fill: "black", fontWeight: "bold" }}/>
                    </IconButton>
                    <CreateDiv style={{display: addBtnToggle ? "block" : "none"}}>
                        <p>Create</p>
                        <h3 className="pin">Pin</h3>
                        <h3 className="board" onClick={createBoard}>Board</h3>
                    </CreateDiv>
                </CreateWrapper>
            </StyledProfile>

            {/* create board */}
            <SavedBoards />

            {
                boardCreate && <CreateBoard closeModal={closeModal} modalClose={modalClose} />
            }
\        </>
    )
}

export default UserProfile
