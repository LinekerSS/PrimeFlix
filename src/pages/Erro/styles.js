import styled from 'styled-components';

export const erro = styled.div
`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 120px;
    }

    a {
        text-decoration: none;
        background-color: #116feb;
        color: #fff;
        padding: 10px;
        margin-top: 14px;

        &:hover {
            opacity: 0.7;
        }
    }
`