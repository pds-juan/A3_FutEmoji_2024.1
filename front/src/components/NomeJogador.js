import React, { useState } from 'react'
import './css/NomeJogador.css'
import { Link } from 'react-router-dom'
import axios from '../axios'

const NomeJogador = () => {
    const [nome, setNome] = useState('');

    const escrevendoNome = (event) => {
        setNome(event.target.value);
    };

    const enviarNome = async () => {
        try {
            await axios.post('http://localhost:3001/salvar-nome',
                { nome }
            );
        } catch (error) {
            console.log('Erro ao salvar o nome:', error);
        }
    };

    return (
        <div className='container-jogador'>
            <h2 className='subtitulo-jogador'>Digite o Seu Nome:</h2>

            <div className="input-jogador">
                <input type="text" placeholder='Seu nome aqui' value={nome} onChange={escrevendoNome} />
            </div>

            <button className='botao-proximo' onClick={enviarNome}>
                <Link to="/configuracoes">
                    PRÓXIMO
                </Link>
            </button>
        </div>
    )
}

export default NomeJogador