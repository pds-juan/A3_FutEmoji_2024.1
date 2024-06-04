import React, { useEffect, useState } from 'react'
import './css/Pergunta.css'
import axios from '../axios';

const Pergunta = () => {
    const [dificuldade, setDificuldade] = useState('');

    useEffect(() => {
        const obterDificuldade = async () => {
            try {
                const busca = await axios.get('/obter-dificuldade');
                setDificuldade(busca.data.dificuldade);
            } catch (error) {
                console.log('Erro ao obter a dificuldade:', error);
            }
        };
        obterDificuldade();
    });

    return (
        <div className='container-pergunta'>
            <p>Qual é o Time?</p>
            <p>Dificuldade: {dificuldade}</p>
        </div>
    )
}

export default Pergunta