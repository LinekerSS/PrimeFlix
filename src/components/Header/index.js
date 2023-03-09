import * as S from './styles'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <S.Header>
            <S.LeftSize>
                <Link className='logo' to="/">Prime Flix</Link>
            </S.LeftSize>
            <S.RightSize>
                <Link className='favoritos' to="/favoritos">Meus Favoritos</Link>
            </S.RightSize>
        </S.Header>
    )
}

