import styled from 'styled-components';

export const StyledBoardsWrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid: auto / repeat(7, 1fr);
    width: 92%;
    margin: auto;
    gap: 10px;

    @media only screen and (max-width: 1440px){
        grid: auto / repeat(5, 1fr);
    }

    @media only screen and (max-width: 1400px){
        grid: auto / repeat(4, 1fr);
    }

    @media only screen and (max-width: 1100px){
        grid: auto / repeat(3, 1fr);
    }

    @media only screen and (max-width: 850px){
        grid: auto / repeat(2, 1fr);
    }


    @media only screen and (max-width: 550px){
        grid: auto / repeat(1, 1fr);
    }
`
