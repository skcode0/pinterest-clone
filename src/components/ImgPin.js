import React from 'react';
import styled from 'styled-components';

function ImgPin({imgInfo}){

    return (
        <StyledPin>
            <img src={imgInfo.urls.regular} alt={imgInfo.alt_description} />
            {/* //! add hover options */}
        </StyledPin>
    )
}

// image pin
export const StyledPin = styled.div`
    width: 236px;
    display: flex;
    align-items: center;
    cursor: zoom-in;

    img{
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    @media only screen and (max-width: 1440px) {
        width: 215px;
    }

    @media only screen and (max-width: 500px) {
        width: 120px;
    }

    @media only screen and (max-width: 375px) {
        width: 150px;
    }
`

export default ImgPin
