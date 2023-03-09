import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Lembrar de importar o react-router-dom para fazer as rotas

import Home from './pages/Home/Index';
import Filme from './pages/Filme';
import Header from './components/Header';
import Erro from './pages/Erro';
import Favoritos from './pages/favoritos';

export default function Routers() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:id' element={<Filme />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}