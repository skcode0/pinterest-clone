import React from 'react';
import { StyledInbox, InboxSearchBarWrapper, StyledInboxSearchBar } from './Inbox.style';
import IconButton from '@material-ui/core/IconButton'; // gives bubble effect when clicked
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';

function Inbox({inboxToggle}) {
    return (
        <StyledInbox display={inboxToggle}>
            <div className="inbox-header-wrapper">
                <h3>
                    Inbox
                    <div className="inbox-icons">
                        <IconButton>
                            <MoreHorizIcon style={{fill: "black"}}/>
                        </IconButton>
                        <IconButton>
                            <CreateIcon style={{fontSize: "24px", fill: "black"}}/>
                        </IconButton>
                    </div>
                </h3>
            </div>
            
            <div className="inbox-main">
                <h1>Share ideas with your friends</h1>
                <InboxSearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <StyledInboxSearchBar placeholder="Search by name or email"/>
                </InboxSearchBarWrapper>

                <p>Suggested</p>
                <h4>In maintenance...</h4>
            </div>
        </StyledInbox>
    )
}

export default Inbox
