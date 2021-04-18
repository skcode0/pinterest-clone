import React from 'react';
import { StyledDropDownSettings } from './DropDownSettings.style';
import CallMadeIcon from '@material-ui/icons/CallMade';

function DropDownSettings({dropDownToggle}) {
    return (
        <StyledDropDownSettings display={dropDownToggle}>
            <p>Accounts</p>
            <h3>Add another account</h3>
            <h3>Unlock business tools</h3>
            <br />
            <p>More Options</p>
            <h3>Tune in your home feed</h3>
            <h3>Install the Windows app</h3>
            <a className="external-links" href="https://help.pinterest.com/en?source=gear_menu_web" target="_blank" rel="noopener noreferrer">
                <h3>Get help</h3>
                <CallMadeIcon style={{fontSize: "22px", cursor: "pointer"}}/>
            </a>
            <a className="external-links" href="https://policy.pinterest.com/en/privacy-policy" target="_blank" rel="noopener noreferrer">
                <h3>See terms and privacy</h3>
                <CallMadeIcon style={{fontSize: "22px", cursor: "pointer"}}/>
            </a>
            <h3>Log out</h3>
        </StyledDropDownSettings>
    )
}

export default DropDownSettings
