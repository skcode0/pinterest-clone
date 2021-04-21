import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

//! make nav mobile responsive 
// ! link to image-specific page

// nav
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 10000000;


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
    background-color: ${props => props.backgroundColor ? "black" : "transparent"};
    padding: 14px 16px;
    color: ${props => props.backgroundColor ? "white" : "black"};;
    font-weight: 700;
    border-radius: 50px;

    &:hover{
        background-color: ${props => props.backgroundColor ? "black" : "#e8e8e8"};
    }

    @media only screen and (max-width: 425px) {
        display: none;
    }
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
`

//icons wrapper
export const IconsWrapper = styled.div`
    display: flex;
    justify-content: "space-between";

    .mobile-home-btn{
        display: none;
    }

    @media only screen and (max-width: 425px) {
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

// settings
export const Settings = styled.div`
    position: relative;
`

// mobile nav
export const MobileNavWrapper = styled.div`
    display: none;

    @media only screen and (max-width: 425px) {
        display: block;
        position: fixed;
        bottom: 3%;
        left: 0; 
        right: 0; 
        margin: auto;
        width: fit-content;
        background-color: white;
        border-radius: 50px;
        z-index: 10000000;
    }

`