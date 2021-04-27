import styled from 'styled-components';

export const StyledImgPinDetailsWrapper = styled.div`
    margin-top: 6rem;
`

export const StyledImg = styled.div`
    width: 60%;
    margin: auto;
    border-radius: 20px;
    box-shadow: 0px 1px 10px 5px rgba(0, 0, 0, 0.2);
    display: flex;

    .img-container{
        width: 60%;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
        cursor: pointer;

        img{
            width: 100%;
            height: 100%;
            border-top-left-radius: inherit;
            border-bottom-left-radius: inherit;
            object-fit: cover;
        }
    }

    .pin-board-list{
        flex: 1;
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
        padding: 20px;
        position: relative;

        h1{
            font-size: 2rem;
            text-align: center;
        }
    }

    .board-list-container{
        position: absolute;
        left: 1.5rem;
        right: 1.5rem;
        top: 4rem;
        bottom: 1rem;
        max-height: 100%;
        overflow-y: auto;
    }

    @media screen and (max-width: 1100px) {
        .img-container{
            width: 50%;
        }
        
    }

    @media screen and (max-width: 900px){
        .board-list-container{
            left: 1rem;
            right: 1rem;
            top: 4rem;
            bottom: 0.5rem;
            max-height: 100%;
            overflow-y: auto;
        }
    }

/* //! */
    @media screen and (max-width: 830px){
        display: block;

        .img-container{
            width: 100%;

            img{
                border-radius: 20px 20px 0 0;
            }
        }

        .pin-board-list{
            border-radius: 0 0 20px 20px;
            padding: 20px;

            h1{
                font-size: 2rem;
                text-align: center;
            }
        }

        .board-list-container{
            height: 250px;
            display: block;
            position: static;
        }
    }

    @media screen and (max-width: 430px){
        .pin-board-list{
            padding: 10px;

            h1{
                font-size: 1.4rem;
                text-align: center;
            }
        }   
    }

    @media screen and (max-width: 430px){
        width: 70%;
    }

    @media screen and (max-width: 430px){
        width: 80%;

        .pin-board-list{
            padding: 5px;
        }   
    }
`

export const StyledOtherImgs = styled.div`
    margin-top: 2rem;

    .other-imgs-title{
        font-size: 1.4rem;
        margin: 5px 0;
        text-align: center;
        margin-bottom: -4rem;
    }
`