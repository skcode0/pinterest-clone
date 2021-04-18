import React, { useState } from 'react';
import { StyledProfile, CreateWrapper, CreateDiv } from './UserProfile.style';
import IconButton from '@material-ui/core/IconButton'; // gives bubble effect when clicked
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';

function UserProfile() {
    const [ addBtnToggle, setAddBtnToggle ] = useState(false);

    function toggleAddBtn(){
        setAddBtnToggle(!addBtnToggle);
    }

    return (
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
                    <h3>Pin</h3>
                    <h3>Board</h3>
                </CreateDiv>
            </CreateWrapper>
        </StyledProfile>
    )
}

export default UserProfile
