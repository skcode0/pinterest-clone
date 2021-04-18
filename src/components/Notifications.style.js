import styled from 'styled-components';

export const StyledNotif = styled.div`
    display: ${ props => props.display ? "block" : "none"};
    position: absolute;
    top: 100%;
    right: 0;
    width: 360px;
    border-radius: 10px;
    z-index: 1000;
    height: calc(100vh - 73px);
    box-shadow: -2px 2px 10px #b7b7b7;
    background-color: white;
    overflow-y: auto;
    animation: up-to-down 0.2s ease-in;

    @keyframes up-to-down{
        0%{
            transform: translateY(-2%);
        }

        100%{
            transform: translateY(0);
        }
    }

    .notif-title{
        text-align: center;
        margin: 20px 0;
    }

    .friend{
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    .friend:hover{
        background-color: #e4e4e4;
    }

    .profile-pic{
        width: 50px;
        height: 50px;
        background-color: #e8e8e8;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        font-size: 1.3rem;
        font-weight: 500;
    }

    .friend p{
        width: 80%;
    }

    .friend span{
        font-weight: 500;
    }

    .year{
        font-weight: 400 !important;
        color: grey;
    }

    .link{
        text-decoration: none;
        color: black;
    }

    @media only screen and (max-width: 425px) {
        display: ${ props => props.display ? "block" : "none"};
        position: static;
        width: 100%;
        border-radius: 10px;
        z-index: 0;
        height: auto;
        box-shadow: none;
        background-color: white;
        overflow-y: auto;
        animation: none;
        margin-top: 70px;
    }
`