import React, { useState } from 'react'
import './css/Preferencias.css'
import { useNavigate } from 'react-router-dom'
import axios from '../axios'

const Preferencias = () => {
    const [campeonato, setCampeonato] = useState('');
    const [outroCampeonato, setOutroCampeonato] = useState('');
    const navigate = useNavigate();

    const comecarJogo = async () => {
        if (!campeonato && !outroCampeonato) {
            alert('Selecione um campeonato ou digite outro!');
            return
        } else {
            navigate('/jogar');
        }
        const campeonatoSelecionado = campeonato || outroCampeonato;
        await axios.post('/conversar', { prompt: campeonatoSelecionado });
    };

    return (
        <div className='container-preferencias'>

            <h2 className='subtitulo-preferencias'>Escolha o Campeonato:</h2>

            <div className='selecao-campeonato'>
                <div>
                    <input type="radio" name='campeonato' id='brasileiro' onChange={() => setCampeonato('brasileiro')} />
                    <label htmlFor="brasileiro">Brasileiro</label>
                </div>

                <div>
                    <input type="radio" name='campeonato' id='seriea' onChange={() => setCampeonato('italiano')} />
                    <label htmlFor="seriea">Série A</label>
                </div>

                <div>
                    <input type="radio" name='campeonato' id='bundesliga' onChange={() => setCampeonato('alemão')} />
                    <label htmlFor="bundesliga">Bundesliga</label>
                </div>
            </div>

            <div className='selecao-campeonato'>
                <div>
                    <input type="radio" name='campeonato' id='premier' onChange={() => setCampeonato('inglês')} />
                    <label htmlFor="premier">Premier</label>
                </div>

                <div>
                    <input type="radio" name='campeonato' id='laliga' onChange={() => setCampeonato('espanhol')} />
                    <label htmlFor="laliga">LaLiga</label>
                </div>

                <div>
                    <input type="radio" name='campeonato' id='ligue1' onChange={() => setCampeonato('francês')} />
                    <label htmlFor="ligue1">Ligue 1</label>
                </div>
            </div>

            <div className="outro-campeonato">
                <input type="text" placeholder='Ou digite outro aqui' onChange={(event) => setOutroCampeonato(event.target.value)} />
            </div>

            <button className='botao-comecar' onClick={comecarJogo}>
                COMEÇAR
            </button>
        </div>
    )
}

export default Preferencias