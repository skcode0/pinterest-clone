import styled from 'styled-components';

export const StyledBoardList = styled.div`
    .board-info-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        margin: 10px 0;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;

        :hover{
            background-color: #ddd;
        }

        button{
            padding: 10px 15px;
            border-radius: 50px;
            background-color: rgb(230, 0, 35);
            font-size: 1.1rem;
            color: white;
            font-weight: 600;

            :hover{
                background-color: #ca001f;
            }
        }
    }

    .board-info{
        display: flex;
        align-items: center;
    }

    .board-info-img{
        width: 50px;
        height: 50px;
        background-color: #ebebeb;
        border-radius: 10px;
        margin-right: 5px;
    }


    @media only screen and (max-width: 425px){
    
        .board-info-container{
            div{
                font-size: 12px; 
            }

            .board-info-img{
                width: 40px;
                height: 40px;
            }

            button{
                padding: 5px 10px;
            }
        }
    }

    @media only screen and (max-width: 280px){
        .board-info-container{
            flex-direction: column;
            gap: 5px;
        }
    }
`