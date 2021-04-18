import styled from 'styled-components';
import { SearchBarWrapper, StyledSearchBar } from './Nav.style';

export const StyledInbox = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    display: ${props => props.display ? "block" : "none"};
    animation: right-to-left 0.2s ease-in-out;
    z-index: 1000;
    width: 370px;
    height: calc(100vh - 75px);
    box-shadow: -2px 2px 10px #b7b7b7;
    background-color: white;

    @keyframes right-to-left{
        0%{
            transform: translateX(100%);
        }

        100%{
            transform: translateX(0);
        }
    }

    /* inbox header wrapper */
    .inbox-header-wrapper{
        display: flex;
        align-items: center;
        margin: 20px 0;
    }

    .inbox-header-wrapper h3{
        position: relative;
        width: 100%;
        text-align: center;
        letter-spacing: 1px;
    }

    .inbox-icons{
        position: absolute;
        right: 0;
        top: -90%;
        display: flex;
        justify-content: space-between;
    }

    /* inbox main */
    .inbox-main{
        width: 95%;
        margin: auto;
    }

    .inbox-main h1{
        font-size: 2.2rem;
        letter-spacing: 1px;
    }

    .inbox-main p{
        font-size: 14px;
        margin: 10px 0;
    }

    .inbox-main h4{
        text-align: center;
        margin: 50% 0;
        color: grey;
    }

    @media only screen and (max-width: 425px) {
        position: static;
        display: ${props => props.display ? "block" : "none"};
        animation: none;
        z-index: 0;
        width: 100%;
        height: auto;
        box-shadow: none;
        margin-top: 75px;
    }
`

// inbox search bar
export const InboxSearchBarWrapper = styled(SearchBarWrapper)`
    border: 2px solid #ddd;
    background-color: white;
    margin-left: 0;
    width: 95%;
    margin: auto;

    &:hover{
        background-color: transparent;
        border: 2px solid #ccc;
    }
`

export const StyledInboxSearchBar = styled(StyledSearchBar)`
    input{
        cursor: pointer;
    }
`

