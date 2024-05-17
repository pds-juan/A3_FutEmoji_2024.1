import React from 'react'
import './css/Preferencias.css'
import { Link } from 'react-router-dom'

const Preferencias = () => {
    return (
        <div className='container-preferencias'>

            <h2 className='subtitulo-preferencias'>Escolha o Campeonato:</h2>

            <div className='selecao-campeonato'>
                <div>
                    <input type="radio" name='campeonato' id='brasileiro' />
                    <label htmlFor="brasileiro">Brasileiro</label>
                </div>

                <div>
                    <input type="radio" name='campeonato' id='seriea' />
                    <label htmlFor="seriea">Série A</label>
                </div>

                <div>
                    <input type="radio" name='campeonato' id='bundesliga' />
                    <label htmlFor="bundesliga">Bundesliga</label>
                </div>
            </div>

            <div className='selecao-campeonato'>
                <div>
                    <input type="radio" name='campeonato' id='premier' />
                    <label htmlFor="premier">Premier</label>
                </div>

                <div>
                    <input type="radio" name='campeonato' id='laliga' />
                    <label htmlFor="laliga">LaLiga</label>
                </div>

                <div>
                    <input type="radio" name='campeonato' id='ligue1' />
                    <label htmlFor="ligue1">Ligue 1</label>
                </div>
            </div>

            <div className="outro-campeonato">
                <input type="text" placeholder='Ou digite outro aqui' />
            </div>

            <button className='botao-comecar'>
                <Link to="/jogar">
                    COMEÇAR
                </Link>
            </button>

        </div>
    )
}

export default Preferencias