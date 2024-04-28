import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

import Titulo from './components/Titulo'
import Jogar from './components/Jogar'
import SegundoTitulo from './components/SegundoTitulo'
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
        <Route path="/dificuldade" element={<div className='container'><SegundoTitulo /><Dificuldade /><Preferencias /></div>} />
        <Route path="/pergunta" element={<div className='container'><SegundoTitulo /><Pergunta /><AreaEmoji /><Resposta /></div>} />

        <Route path="*" element={<div>Página não encontrada</div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes