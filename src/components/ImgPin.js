import React from 'react';
import styled from 'styled-components';

function ImgPin({imgInfo}){

    return (
        <StyledPin>
            <img src={imgInfo.urls.regular} alt={imgInfo.alt_description} />
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
`

export default ImgPin
