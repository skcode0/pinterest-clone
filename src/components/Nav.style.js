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

    .MuiSvgIcon-root{
        font-size: 28px;
    }

    .text-bubble{
        color: #767676;
        fill: currentColor;
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