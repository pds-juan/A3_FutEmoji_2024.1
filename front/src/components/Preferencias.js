import React from 'react'
import './Preferencias.css'

const Preferencias = () => {
    return (
        <div className='preferencias'>
            <button>Brasileirão</button>
            <button>LaLiga</button>
            <button>Premier</button>
            <br />
            <br />
            <button>Série A</button>
            <button>Ligue 1</button>
            <button>Bundesliga</button>
            <br />
            <br />
            <br />

            <input type="text" placeholder='Outro' />
            <button>Começar</button>
        </div>
    )
}

export default Preferencias