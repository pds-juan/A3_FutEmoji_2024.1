import React from 'react'
import Titulo from './Titulo'
import Jogar from './Jogar'
import Dificuldade from './Dificuldade'
import Preferencias from './Preferencias'
import './App.css'

const App = () => {
    return (
        <div className='teste'>
            <Titulo />
            <Jogar />

            {/* ainda em construção
            <Titulo />
            <Dificuldade />
            <Preferencias /> */}
        </div>
    )
}

export default App