import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBoardLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export const StyledBoard = styled.div`
    padding: 5px;
    width: 240px;
    width: fit-content;
    position: relative;

    .lock-icon{
        display: block;
        position: absolute;
        top: 5%;
        left: 5%;
        background-color: white;
        border-radius: 50px;
        padding: 5px;
        width: 30px;
        height: 30px;
        z-index: 2;
    }

    &:hover{
        .edit-icon{
            display: block;
        }
    }

    .pin-info{
        width: 95%;
        font-size: 14px;
        margin-left: 10px;
        margin-top: 10px;
        position: relative;

        h1{
            font-size: 1.3rem;
        }

        p, span{
            font-size: 14px;
        }

        span{
            color: #767676;
        }
    }
`

// !
export const CoverImage = styled.div`
    width: fit-content;
    border-radius: 20px;
    width: 236px;
    height: 157px;
    position: relative;
    background-color: #e6e6e6;

    img{
        width: 100%;
        object-fit: cover;
    }

    .edit-icon{
        display: none;
        position: absolute;
        bottom: 5%;
        right: 5%;
        border-radius: 50px;
        background-color: white;
        padding: 5px;
        width: 30px;
        height: 30px;

        &:hover{
            background-color: #ddd;
        }
    }
`
