import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNotif } from './Notifications.style';

function Notifications({notifToggle}) {
    return (
        <StyledNotif display={notifToggle}>
            <h3 className="notif-title">Updates</h3>
            <Link to="/pinterest-clone/page-unavailable" className="link">
                <div className="friend">
                    <div className="profile-pic">A</div>
                    <p><span>Aaahh</span> and <span>notabot</span> tried a Pin you've saved <span className="year">1y</span></p>
                </div>
            </Link>
        </StyledNotif>
    )
}

export default Notifications
