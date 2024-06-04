import React, { useState, useEffect } from 'react'
import './css/Resposta.css'
import { useNavigate } from 'react-router-dom'
import axios from '../axios'

const Resposta = () => {
    const [resposta, setResposta] = useState('');
    const [respostaCorreta, setRespostaCorreta] = useState('');
    const [resultado, setResultado] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const compararRespostas = async () => {
            try {
                const busca = await axios.get('/resposta');
                setRespostaCorreta(busca.data.nomeTime);

                if (!resposta) {
                    setResultado("Digite sua resposta!");
                } else if (respostaCorreta.includes(resposta)) {
                    setResultado("Resposta correta!\nParabéns, você venceu!");
                    if (resultado) {
                        setTimeout(() => {
                            navigate('/');
                        }, 1000);
                    }
                } else {
                    setResultado("Resposta incorreta.\nFim de jogo!");
                    if (resultado) {
                        setTimeout(() => {
                            navigate('/');
                        }, 1000);
                    }
                }
            } catch (error) {
                console.log('Erro ao obter a resposta:', error);
            }
        };
        compararRespostas();
    });

    return (
        <div className='container-resposta'>
            <div className="campo-resposta">
                <input type="text" placeholder='Digite sua resposta aqui' onBlur={(event) => setResposta(event.target.value.replace(/\s/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())} />
            </div>

            <button className='botao-enviar' onClick={() => alert(resultado)}>
                ENVIAR
            </button>
        </div>
    )
}

export default Resposta