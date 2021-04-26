import styled from 'styled-components';

// main
export const Main = styled.main`
    width: 100%;
    height: 100%;
    margin-top: 80px;
`

// image wrapper
export const ImgWrapper = styled.div`
    width: 90%;
    margin: auto;
    
    @media only screen and (max-width: 500px) {
        width: 95%;
    }

    @media only screen and (max-width: 375px) {
        width: 100%;
    }

    .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        justify-content: center;
        margin-left: 0px; /* gutter size offset */
        width: auto;
    }
    .my-masonry-grid_column {
        background-clip: padding-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
        margin-bottom: 15px;
    }
`

