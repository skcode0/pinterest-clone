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
        width: 240px;
    }

    @media only screen and (max-width: 1280px) {
        width: 220px;
    }

    /* @media only screen and (max-width: 1024px) {
        width: 220px;
    } */

    @media only screen and (max-width: 540px) {
        width: 150px;
    }

    @media only screen and (max-width: 500px) {
        width: 130px;
    }

    @media only screen and (max-width: 414px) {
        width: 180px;
    }

    @media only screen and (max-width: 375px) {
        width: 180px;
    }

    @media only screen and (max-width: 360px) {
        width: 170px;
    }

    @media only screen and (max-width: 320px) {
        width: 150px;
    }

    @media only screen and (max-width: 280px) {
        width: 130px;
    }
`

export default ImgPin
