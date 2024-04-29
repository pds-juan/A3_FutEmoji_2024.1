import React from 'react'
import './css/Resposta.css'
import { Link } from 'react-router-dom'

const Resposta = () => {
    return (
        <div className='container-resposta'>
            <div className="campo-resposta">
                <input type="text" placeholder='Digite sua resposta aqui' />
            </div>

            <button className='botao-enviar'>
                <Link>
                    ENVIAR
                </Link>
            </button>
        </div>
    )
}

export default Resposta