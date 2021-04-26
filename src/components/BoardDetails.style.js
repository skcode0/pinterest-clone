import styled from 'styled-components';

export const StyledBoardDetailsWrapper = styled.div`
    margin-top: 80px;
`

export const StyledBoardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1{
        font-size: 2.4rem;
        margin-right: 10px;
    }

    .board-edit{
        background-color: #efefef;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.7rem;
        padding: 5px;

        :hover{
            background-color: #ddd;
        }
    }
`

export const StyledSecret = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #767676;
    letter-spacing: 1px;
    margin-top: 10px;

    .lock-icon{
        font-size: 20px;
        margin-right: 5px;
    }

    p{
        font-size: 14px;
    }
`

export const StyledH1 = styled.h1`
    margin: 2rem;
    margin-bottom: -4rem;
    font-size: 1.5rem;
`