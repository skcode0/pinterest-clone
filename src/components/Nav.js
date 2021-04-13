import React, { useState } from 'react';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton'; // gives bubble effect when clicked
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import { Nav, HomeLink, HomeBtn, SearchBarWrapper, StyledSearchBar, ProfileButton, Settings, DropDownMenu, Inbox, InboxSearchBarWrapper, StyledInboxSearchBar } from './Nav.style';

function Header() {
    const [ dropDownToggle, setDropDownToggle ] = useState(false);
    const [ inboxToggle, setInboxToggle ] = useState(false);

    function toggleDropDown(){
        setDropDownToggle(!dropDownToggle);

        if(inboxToggle){
            setInboxToggle(false)
        }
    }

    function toggleInbox(){
        setInboxToggle(!inboxToggle);

        if(dropDownToggle){
            setDropDownToggle(false)
        }
    }

    return (
        <Nav>
            <HomeLink to="/pinterest-clone/">
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </HomeLink>

            <HomeLink to="/pinterest-clone/">
                <HomeBtn>Home</HomeBtn>
            </HomeLink>

            <SearchBarWrapper>
                <IconButton>
                    <SearchIcon />
                </IconButton>

                <StyledSearchBar placeholder="Search" />
            </SearchBarWrapper>


            <IconButton>
                <NotificationsIcon />
            </IconButton>

            <IconButton onClick={toggleInbox}>
                <svg fill={!inboxToggle && "currentColor"} className="text-bubble" height="26" width="26" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                    <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"></path>
                    
                </svg>
            </IconButton>
            <Inbox display={inboxToggle}>
                    <div className="inbox-header-wrapper">
                        <h3>
                            Inbox
                            <div className="inbox-icons">
                                <IconButton>
                                    <MoreHorizIcon style={{fill: "black"}}/>
                                    {/* //! */}
                                </IconButton>
                                <IconButton>
                                    <CreateIcon style={{fontSize: "24px", fill: "black"}}/>
                                </IconButton>
                            </div>
                        </h3>
                    </div>
                    
                    <div className="inbox-main">
                        <h1>Share ideas with your friends</h1>
                        {/* //!! search engine; make feature not available */}
                        <InboxSearchBarWrapper>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <StyledInboxSearchBar placeholder="Search by name or email"/>
                        </InboxSearchBarWrapper>

                        <p>Suggested</p>
                        <h4>In maintenance...</h4>
                    </div>
            </Inbox>


            <IconButton>
                <ProfileButton>
                    {/* //! change link to profile */}
                    <HomeLink to="/pinterest-clone/">u</HomeLink>
                </ProfileButton>
            </IconButton>

            <Settings>
                <IconButton onClick={toggleDropDown}>
                    <ExpandMoreIcon style={{ fill: dropDownToggle && "black" }}/>
                </IconButton>

                <DropDownMenu display={dropDownToggle}>
                    <p>Accounts</p>
                    <h3>Add another account</h3>
                    <h3>Unlock business tools</h3>
                    <br />
                    <p>More Options</p>
                    <h3>Tune in your home feed</h3>
                    <h3>Install the Windows app</h3>
                    <h3>Get help</h3>
                    <h3>See terms and privacy</h3>
                    <h3>Log out</h3>
                </DropDownMenu>
            </Settings>


            
        </Nav>
    )
}

export default Header
