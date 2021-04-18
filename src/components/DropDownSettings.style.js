import styled from 'styled-components';

export const StyledDropDownSettings = styled.div`
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
