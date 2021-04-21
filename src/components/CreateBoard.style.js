import styled from 'styled-components';

// create board modal
export const CreateBoardModalWrapper = styled.div`

`

export const CreateBoardOverlay = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 100000000;
`

export const CreateBoardModal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    z-index: 1000000000;
    width: 25%;

    @media only screen and (max-width: 1024px) {
        width: 60%;
    }

    @media only screen and (max-width: 425px) {
        width: 90%;
    }

    h1{
        font-size: 1.6rem;
        letter-spacing: 1px;
        text-align: center;
        margin: 10px;
    }

    /* close btn for edit */
    .close-btn{
        color: black;
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
        font-size: 1.8rem;
        padding: 10px;
        
        :hover{
            color: red;
        }
    }

    /* board name */
    .board-name{
        margin: 10px 0;

        p{
            font-size: 14px;
            margin: 7px 0;
        }

        input{
            width: 100%;
            border-radius: 10px;
            outline: none;
            border: 3px #ddd solid;
            padding: 10px;
        }

        input:hover{
            border: 3px #cecece solid;
        }
    }

    /* private or public board */
    form{
        margin: 50px 0;
        cursor: pointer;
        display: flex;
        gap: 10px;

        .secret-container{
            position: relative;
        }

        input[type=checkbox]{
            transform: scale(2);
            margin-left: 5px;
            outline: none;
            border: 1px #ddd solid;
            border-radius: 5px;
            align-self: flex-start;
            cursor: pointer;

        }

        label{
            cursor: pointer;
            margin-left: 5px;
            
            h3{
                font-size: 1.1rem;
            }

            p{
                color: #767676;
                font-size: 1.1rem;
                a{
                    color: #767676;
                    font-weight: 700;
                    text-decoration: none;
                }
            }
        }
    }

    /* create btn */
    .btn-container{
        display: flex;
        justify-content: flex-end;
        margin: 10px 0;
    }

    button{
        font-size: 1.1rem;
        font-weight: 600;
        padding: 17px 15px;
        border-radius: 50px;
        cursor: context-menu;
    }
`

//delete board
export const StyledDeleteWrapper = styled.div`
    cursor: pointer;

    :hover{
        color: red;
    }

    h1{
        margin: 10px 0;
        text-align: left;
        letter-spacing: 0;
    }

    p{
        color: #767676;
    }
`