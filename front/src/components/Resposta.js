import React from 'react'
import './css/Resposta.css'

const Resposta = () => {
    return (
        <div className='container-resposta'>
            <div className="campo-resposta">
                <input type="text" placeholder='Digite sua resposta aqui' />
            </div>

            <button className='botao-enviar'>ENVIAR</button>
        </div>
    )
}

export default Resposta