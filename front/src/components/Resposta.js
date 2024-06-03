import React, { useState, useEffect } from 'react'
import './css/Resposta.css'
import { useNavigate } from 'react-router-dom'
import axios from '../axios'

const Resposta = () => {
    const [resposta, setResposta] = useState('');
    const [respostaCorreta, setRespostaCorreta] = useState('');
    const [resultado, setResultado] = useState('');
    const [tentativas, setTentativas] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const compararRespostas = async () => {
            try {
                const busca = await axios.get('/resposta');
                setRespostaCorreta(busca.data.nomeTime);

                if (!resposta) {
                    setResultado("Digite a sua resposta!");
                } else if (respostaCorreta.includes(resposta)) {
                    setResultado("Resposta Correta!");
                    if (tentativas < 3) {
                        await axios.post('/conversar');
                        window.location.reload();
                        setTentativas(tentativas + 1);
                    } else {
                        alert("Parabéns! Você venceu!")
                        navigate('/');
                    }
                } else {
                    setResultado("Resposta Incorreta!");
                    navigate('/');
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
                <input type="text" placeholder='Digite sua resposta aqui' onBlur={(event) => setResposta(event.target.value)} />
            </div>

            <button className='botao-enviar' onClick={() => alert(resultado)}>
                ENVIAR
            </button>
        </div>
    )
}

export default Resposta