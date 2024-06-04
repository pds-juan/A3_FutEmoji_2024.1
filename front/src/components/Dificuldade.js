import React, { useEffect, useState } from 'react'
import './css/Dificuldade.css'
import axios from '../axios';

const Dificuldade = () => {
    const [dificuldade, setDificuldade] = useState('');

    useEffect(() => {
        const salvarDificuldade = async () => {
            if (!dificuldade) {
                setDificuldade('Fácil');
                return
            } else {
                await axios.post('/salvar-dificuldade', { nivelDificuldade: dificuldade });
            }
        };
        salvarDificuldade();
    });

    return (
        <div className='container-dificuldade'>

            <h2 className='subtitulo-dificuldade'>Selecione a Dificuldade:</h2>

            <div className='selecao'>
                <div className='selecao-dificuldade'>
                    <input type="radio" name='dificuldade' id='facil' onChange={() => setDificuldade('Fácil')} />
                    <label htmlFor="facil">Fácil</label>
                </div>

                <div className='selecao-dificuldade'>
                    <input type="radio" name='dificuldade' id='medio' onChange={() => setDificuldade('Médio')} />
                    <label htmlFor="medio">Médio</label>
                </div>

                <div className='selecao-dificuldade'>
                    <input type="radio" name='dificuldade' id='dificil' onChange={() => setDificuldade('Difícil')} />
                    <label htmlFor="dificil">Difícil</label>
                </div>
            </div>

        </div>
    )
}

export default Dificuldade