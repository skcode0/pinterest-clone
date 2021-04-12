import React from 'react';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton'; // gives bubble effect when clicked
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Nav, HomeLink, HomeBtn, SearchBarWrapper, StyledSearchBar, ProfileButton } from './Nav.style';

function Header() {
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

                <StyledSearchBar />
            </SearchBarWrapper>


            <IconButton>
                <NotificationsIcon />
            </IconButton>

            <IconButton>
                <svg className="text-bubble" height="26" width="26" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"></path></svg>
            </IconButton>

            <IconButton>
                <ProfileButton>
                    {/* //! change link to profile */}
                    <HomeLink to="/pinterest-clone/">u</HomeLink>
                </ProfileButton>
            </IconButton>

            <IconButton>
                <ExpandMoreIcon />
            </IconButton>

        </Nav>
    )
}

export default Header
