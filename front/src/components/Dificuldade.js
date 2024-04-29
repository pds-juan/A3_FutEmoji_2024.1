import React from 'react'
import './css/Dificuldade.css'

const Dificuldade = () => {
    return (
        <div className='container-dificuldade'>

            <h2 className='subtitulo-dificuldade'>Selecione a Dificuldade:</h2>

            <div className='selecao'>
                <div className='selecao-dificuldade'>
                    <input type="radio" name='dificuldade' id='facil' className='teste' />
                    <label htmlFor="facil">Fácil</label>
                </div>

                <div className='selecao-dificuldade'>
                    <input type="radio" name='dificuldade' id='medio' />
                    <label htmlFor="medio">Médio</label>
                </div>

                <div className='selecao-dificuldade'>
                    <input type="radio" name='dificuldade' id='dificil' />
                    <label htmlFor="dificil">Difícil</label>
                </div>
            </div>

        </div>
    )
}

export default Dificuldade