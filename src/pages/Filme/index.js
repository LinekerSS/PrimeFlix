import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './styles'
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Filme () {
    
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const navigate = useNavigate();

    const loadFilmes = async () => {
        await api.get(`/movie/${id}`, {
            params: {
                api_key: '0382d540bd4b7e7488003505c7665591',
                language: 'pt-BR',
            }
        })
        .then((response) => {
            setFilme(response.data);
            setLoading(false);
        })
        .catch(() => {
            console.log("Filme não encontrado!");
            navigate("/", { replace: true })
        })
    }


    useEffect(() => {
        loadFilmes();
    }, [id, navigate]);


    function salvarFilmes() {
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilmes) {
            toast.warn("Esse filme já está na sua lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso")
        
    }

    if(loading) {
        return (
            <S.loading>
                <h1>Carregando detalhes...</h1>
            </S.loading>
        )
    }

    return (
        <S.filme>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
        
            <strong>Avaliação: {filme.vote_average} /10</strong>

            <S.botao>
                <button onClick={salvarFilmes}>Salvar</button>
                <button>
                    <a target="blank" rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}> 
                        Trailer
                    </a>
                </button>
            </S.botao>
        </S.filme>
    )

}

