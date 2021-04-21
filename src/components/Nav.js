import React, { useState } from 'react';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton'; // gives bubble effect when clicked
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import { Nav, HomeLink, HomeBtn, SearchBarWrapper, StyledSearchBar, ProfileButton, Settings, IconsWrapper, MobileNavWrapper } from './Nav.style';
import { Link } from 'react-router-dom';
import Notifications from './Notifications';
import Inbox from './Inbox';
import DropDownSettings from './DropDownSettings';

function Header() {
    const [ notifToggle, setNotifToggle ] = useState(false);
    const [ inboxToggle, setInboxToggle ] = useState(false);
    const [ dropDownToggle, setDropDownToggle ] = useState(false);
    // mobile icons
    const [homeToggle, setHomeToggle] = useState(true);
    const [profileToggle, setProfileToggle] = useState(false);

    const [ homeBg, setHomeBg] = useState(true);

    function toggleNotification(){
        setNotifToggle(!notifToggle);
        
        if(inboxToggle || dropDownToggle){
            setInboxToggle(false);
            setDropDownToggle(false);
        }
    }

    function toggleInbox(){
        setInboxToggle(!inboxToggle);

        if(dropDownToggle || notifToggle){
            setNotifToggle(false);
            setDropDownToggle(false);
        }
    }

    function toggleDropDown(){
        setDropDownToggle(!dropDownToggle);

        if(inboxToggle || notifToggle){
            setInboxToggle(false);
            setNotifToggle(false);
        }
    }
    
    // mobile nav
    function toggleHome(){
        setHomeToggle(true);

        if(inboxToggle || notifToggle || profileToggle){
            setNotifToggle(false);
            setInboxToggle(false);
            setProfileToggle(false);
        }
    }

    function toggleMobileNotif(){
        setNotifToggle(true);

        if(inboxToggle || profileToggle || homeToggle){
            setProfileToggle(false);
            setInboxToggle(false);
            setHomeToggle(false);
        }
    }

    function toggleMobileInbox(){
        setInboxToggle(true);

        if(notifToggle || profileToggle || homeToggle){
            setProfileToggle(false);
            setNotifToggle(false);
            setHomeToggle(false);
        }
    }

    function toggleProfile(){
        setProfileToggle(true);

        if(inboxToggle || notifToggle || homeToggle){
            setNotifToggle(false);
            setInboxToggle(false);
            setHomeToggle(false);
        }
    }
    
    function disableHomeBg(){
        setHomeBg(false);
    }

    function enableHomeBg(){
        setHomeBg(true);
        // mobile
        setHomeToggle(true);
        setNotifToggle(false);
        setInboxToggle(false);
        setProfileToggle(false);
    }

    return (
        <>
            <Nav>
                {/* logo */}
                <HomeLink onClick={enableHomeBg} to="/pinterest-clone/">
                    <IconButton>
                        <PinterestIcon />
                    </IconButton>
                </HomeLink>

                {/* home btn */}
                <HomeLink onClick={enableHomeBg} to="/pinterest-clone/">
                    <HomeBtn backgroundColor={homeBg}>Home</HomeBtn>
                </HomeLink>

                {/* search input */}
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <StyledSearchBar placeholder="Search" />
                </SearchBarWrapper>

                <IconsWrapper>
                    {/* notification */}
                    <IconButton onClick={toggleNotification}>
                        <NotificationsIcon style={{fill: notifToggle && "black"}}/>
                    </IconButton>
                    <Notifications notifToggle={notifToggle} />

                    {/* inbox */}
                    <IconButton onClick={toggleInbox}>
                        <svg fill={!inboxToggle && "currentColor"} className="text-bubble" height="26" width="26" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                            <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"></path>
                        </svg>
                    </IconButton>
                    <Inbox inboxToggle={inboxToggle}/>
                    
                    {/* profile */}
                    <Link onClick={disableHomeBg} style={{textDecoration: "none", color: "black"}} to="/pinterest-clone/profile">
                        <IconButton>
                            <ProfileButton>
                                u
                            </ProfileButton>
                        </IconButton>
                    </Link>

                    {/* drop down settings */}
                    <Settings>
                        <IconButton onClick={toggleDropDown}>
                            <ExpandMoreIcon style={{ fill: dropDownToggle && "black" }}/>
                        </IconButton>
                        <DropDownSettings dropDownToggle={dropDownToggle}/>
                    </Settings>
                </IconsWrapper>
            </Nav>

            {/* mobile icons */}
            <MobileNavWrapper>
                {/* mobile home */}
                <Link onClick={toggleHome} to="/pinterest-clone/">
                    <IconButton >
                        <HomeIcon style={{fill: homeToggle && "black"}}/>
                    </IconButton>
                </Link>

                {/* mobile notification */}
                <Link onClick={toggleMobileNotif} to="/pinterest-clone/notifications">
                    <IconButton>
                        <NotificationsIcon style={{fill: notifToggle && "black"}}/>
                    </IconButton>
                </Link>

                {/* mobile inbox */}
                <Link onClick={toggleMobileInbox} to="/pinterest-clone/inbox">
                    <IconButton>
                        <svg fill={!inboxToggle && "currentColor"} className="text-bubble" height="22" width="22" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                            <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"></path>
                        </svg>
                    </IconButton>
                </Link>

                {/* mobile profile */}
                <Link onClick={toggleProfile} to="/pinterest-clone/profile">
                    <IconButton>
                        <PersonIcon style={{fill: profileToggle && "black"}}/>
                    </IconButton>
                </Link>
            </MobileNavWrapper>
        </>
    )
}

export default Header
