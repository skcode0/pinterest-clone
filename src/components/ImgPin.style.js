import styled from 'styled-components';

// image pin
export const StyledPin = styled.div`
    width: 236px;
    display: flex;
    align-items: center;
    cursor: zoom-in;
    position: relative;

/* //! */
    :hover{
        background-color: black;
    }

    img{
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

        /* modal board list */
    .add-to-board-container{
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        width: 90%;
        margin: auto;
        display: none;
        background-color: #404040;
        border-radius: 20px;
    }

    :hover .add-to-board-container{
        display: block;
    }

    .add-to-board{
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        cursor: pointer;
        padding: 5px;
        z-index: 1000;
    }

    .board-drop-down{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }

/* //! */
    .modal-board-list-container{
        position: absolute;
        background-color: white;
        width: 120%;
        height: 230px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 7px;
        border-radius: 20px;
        box-shadow: 0 0 5px 1px #9a9a9a;
        cursor: default;
        z-index: 100000001;
    }

    .modal-list-size{
        width: 95%;
        margin: auto;

        h3{
            text-align: center;
            padding: 10px 0;
        }

        p{
            font-size: 14px;
            margin: 5px 0;
        }
    }

    /* individual board from list */
    .board-list{
        height: 150px;
        overflow-y: auto;
    }

    @media only screen and (max-width: 1440px) {
        width: 240px;
    }

    @media only screen and (max-width: 1280px) {
        width: 220px;
    }

    /* @media only screen and (max-width: 1024px) {
        width: 220px;
    } */

    @media only screen and (max-width: 540px) {
        width: 150px;

        .modal-board-list-container{
            width: 140%;
        }
    }

    @media only screen and (max-width: 500px) {
        width: 130px;
    }

    @media only screen and (max-width: 425px) {
        .board-drop-down h1{
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 414px) {
        width: 180px;

        .modal-board-list-container{
            width: 120%;
        }
    }

    @media only screen and (max-width: 375px) {
        width: 180px;
    }

    @media only screen and (max-width: 360px) {
        width: 170px;
    }

    @media only screen and (max-width: 320px) {
        width: 150px;
    }

    @media only screen and (max-width: 280px) {
        width: 130px;

        .board-drop-down h1{
            font-size: 12px;
        }
    }
`