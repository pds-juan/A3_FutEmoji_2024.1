import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Titulo from './components/Titulo'
import Jogar from './components/Jogar'
import SegundoTitulo from './components/SegundoTitulo'
import NomeJogador from './components/NomeJogador';
import Dificuldade from './components/Dificuldade'
import Preferencias from './components/Preferencias'
import Pergunta from './components/Pergunta'
import AreaEmoji from './components/AreaEmoji'
import Resposta from './components/Resposta'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<div className='container'><Titulo /><Jogar /></div>} />
        <Route path="/jogador" element={<div className='container'><SegundoTitulo /><NomeJogador /></div>} />
        <Route path="/configuracoes" element={<div className='container'><SegundoTitulo /><Dificuldade /><Preferencias /></div>} />
        <Route path="/jogar" element={<div className='container'><SegundoTitulo /><Pergunta /><AreaEmoji /><Resposta /></div>} />

        <Route path="*" element={<div>Página não encontrada</div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes