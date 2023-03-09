import * as S from './styles';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso!")
    }

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeflix")
        setFilmes(JSON.parse(minhaLista) || []);

    }, []);

    return (
       <S.favoritos>
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo!</span>}
            <ul>
                {filmes.map((item) => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`filme/${item.id}`}>Ver Detalhes</Link>
                            <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
       </S.favoritos>
    )
}