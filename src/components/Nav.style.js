import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

// nav
export const Nav = styled.nav`
    border: 1px red solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: relative;

    .MuiSvgIcon-root{
        font-size: 28px;
    }

    .text-bubble{
        color: #767676;
    }
`

// link to home
export const HomeLink = styled(Link)`
    color: black;
    text-decoration: none;

    /* pinterest icon class name*/
    .MuiSvgIcon-root{
        color: #e60023;
    }
`

// home btn
export const HomeBtn = styled.button`
    background-color: black;
    padding: 14px 16px;
    color: white;
    font-weight: 700;
    border-radius: 50px;
`

// search bar
export const SearchBarWrapper = styled.div`
    flex: 1;
    display: flex;
    border-radius: 100px;
    background-color: #efefef;
    min-height: 100%;
    margin-left: 10px;

    &:hover{
        background-color: #d6d6d6;
    }
`

export const StyledSearchBar = styled(SearchBar)`
    display: flex;
    width: 100%;
    padding-right: 15px;

    input{
        width: 100%;
        border: none;
        background-color: transparent;
    }

    button{
        display: none;
    }
`

// notification
export const Notifications = styled.div`
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

// inbox
export const Inbox = styled.div`
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
`

// profile button
export const ProfileButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    background-color: #efefef;
`

// settings
export const Settings = styled.div`
    position: relative;
`

// drop down menu
export const DropDownMenu = styled.div`
    position: absolute;
    display: ${props => props.display ? "block" : "none"};
    top: 100%;
    right: 0;
    min-width: 250px;
    max-width: 350px;
    width: 100%;
    padding: 10px;
    z-index: 1000;
    border-radius: 10px;
    text-align: left;
    background-color: white;
    box-shadow: -2px -2px 10px #c3c3c3;

    p{
        font-size: 12px;
        margin: 10px 0;
    }

    h3{
        margin: 10px 0;
        cursor: not-allowed;
        padding: 5px 10px;
        border-radius: 5px;
        color: grey;
    }

    h3:hover, .external-links:hover{
        background-color: #d8d8d8;
    }

    .external-links{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        text-decoration: none;
        color: black;

        h3{
            margin: 3px 0;
            color: black;
            cursor: pointer;
        }
    }
`