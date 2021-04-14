import React from 'react';
import styled from 'styled-components';

function PageUnavailable() {
    return (
        <StyledPageUnavailable>
            <h1>Sorry!</h1>
            <h1>Page Unavailable.</h1>
        </StyledPageUnavailable>
    )
}

const StyledPageUnavailable = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h1{
        font-size: 3rem;
        text-align: center;
    }
`


export default PageUnavailable
