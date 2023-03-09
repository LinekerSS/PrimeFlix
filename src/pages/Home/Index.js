import { useEffect, useState } from "react";
import api from '../../services/api'
import { Link } from 'react-router-dom'
import * as S from './styles'

// URL DA API /movie/now_playing?api_key=0382d540bd4b7e7488003505c7665591&language=pt-BR

export default function Home () {

    // Aqui irá armazenar os estados do meu filme assim que for feita a requisição pelo useEffect
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadFilmes = async () => {
        const response = await api.get("/movie/now_playing", {
            params: {
                api_key: '0382d540bd4b7e7488003505c7665591',
                language: 'pt-BR',
                page: 1
            }
        });

        setFilmes(response.data.results.slice(0, 11));
        setLoading(false);
        
        console.log(response.data.results.slice(0, 11));
    }

    // Esse useEffect será chamado toda vez que a página ser carregada e o parâmtro eu coloco algum estado que mude assim que for recarregada
    useEffect(() => {
       
        loadFilmes();

    }, []);    

    if(loading) {
        return (
            <S.loading>
                <h1>Carregando Filmes...</h1>
            </S.loading>
        )
    }

    return (        
        <S.Container>
            <div className="container">
                <S.ListMovie>
                    <div>
                        {filmes.map((filme) => (
                            <article key={filme.id}>
                                <strong>{filme.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                                <Link to={`filme/${filme.id}`}>Acessar</Link>
                            </article>
                        ))}
                    </div>
                </S.ListMovie>
        </div>
        </S.Container>
        
    )
}

