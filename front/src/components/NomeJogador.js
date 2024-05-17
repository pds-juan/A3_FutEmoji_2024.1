import React from 'react'
import './css/NomeJogador.css'
import { Link } from 'react-router-dom'

const NomeJogador = () => {
    return (
        <div className='container-jogador'>
            <h2 className='subtitulo-jogador'>Digite o Seu Nome:</h2>

            <div className="input-jogador">
                <input type="text" placeholder='Seu nome aqui' />
            </div>

            <button className='botao-proximo'>
                <Link to="/configuracoes">
                    PRÓXIMO
                </Link>
            </button>
        </div>
    )
}

export default NomeJogador