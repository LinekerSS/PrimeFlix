import styled from 'styled-components';

export const favoritos = styled.div
`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 14px;
    }

    span {
        font-size: 18px;
    }

    ul {
        width: 720px;
    }

    ul li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 14px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div a {
        text-decoration: none;
        color: #116feb;
        margin-right: 14px;
    }
`