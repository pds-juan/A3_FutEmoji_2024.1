import React from 'react'

import Titulo from './Titulo'
import Jogar from './Jogar'
import SegundoTitulo from './SegundoTitulo'
import Dificuldade from './Dificuldade'
import Preferencias from './Preferencias'
import Pergunta from './Pergunta'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './css/App.css'

const App = () => {
    return (
        <div className='container'>
            <SegundoTitulo />
            <Dificuldade />
            <Preferencias />
        </div>
    )
}

export default App