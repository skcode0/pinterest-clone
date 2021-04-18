import styled from 'styled-components';

export const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    .user-profile{
        font-size: 3rem;
        font-weight: 500;
        background-color: #e8e8e8;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1{
        font-size: 2rem;
    }

    & > *{
        margin: 5px;
    }
`

export const CreateWrapper = styled.div`
    position: relative;
`

export const CreateDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    box-shadow: 0px 0px 5px #969696;
    border-radius: 10px;
    padding: 10px;
    margin-top: 5px;

    & > *{
        margin: 5px;
        padding: 5px;
    }

    p{
        font-size: 14px;
    }

    h3{
        border-radius: 10px;
    }

    h3:hover{
        background-color: #e8e8e8;
        cursor: not-allowed;
    }
`