import styled from 'styled-components';

export const loading = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
`

export const filme = styled.div
`
    margin: 0 auto;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding: 0 8px;

    h1 {
        margin: 14px 0;
    }

    img {
        border-radius: 8px;
        width: 800px;
        max-width: 100%;
        max-height: 340px;
        object-fit: cover;
    }

    h3 {
        margin-top: 14px;
    }

    span {
        margin: 8px 0;
    }
`

export const botao = styled.div
`
    button {
        margin-right: 12px;
        margin-top: 14px;
        margin-left: 0;
        font-size: 20px;
        border: 0;
        outline: none;
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.5s;
    }

    button:hover {
        background-color: brown;
        color: #fff;
    }

    a {
        text-decoration: none;
        color: #000;
        transition: all 0.5s;

    }

    a:hover {
        color: #fff;
    }

`