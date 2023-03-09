import styled from 'styled-components';

export const Container = styled.div
`
`
export const ListMovie = styled.div
`
    max-width: 800px;
    margin: 14px auto;
    

    article {
        width: 100%;
        background-color: #fff;
        padding: 15px;
        border-radius: 4px;
    }

    img {
        width: 900px;
        max-width: 100%;
        max-height: 340px;
        object-fit: cover;
        display: block;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    strong {
        margin-bottom: 14px;
        text-align: center;
        font-size: 22px;
        display: flex;
        justify-content: center;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        font-size: 24px;
        background-color: #116feb;
        text-decoration: none;
        color: #fff;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;


    }
`

export const loading = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
`

