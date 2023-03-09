import styled from 'styled-components';

export const Header = styled.div 
`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #000000;
`

export const LeftSize = styled.div
`
    width: 50%;
    display: flex;
    aligh-items: center;
    justify-content: center;    

    
    .logo {
        text-decoration: none;
        font-size: 30px;
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        display: flex;        
    }
    
`

export const RightSize = styled.div 
`
    width: 50%;
    display: flex;
    aligh-items: center;
    justify-content: center;    


    .favoritos {
        text-decoration: none;
        cursor: pointer;
        color: #000000;
        background-color: #fff;
        border-radius: 4px;
        padding: 5px 14px;
    }
`