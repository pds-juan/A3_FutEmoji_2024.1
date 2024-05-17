import React from 'react'
import './css/Jogar.css'

import { Link } from 'react-router-dom';

const Jogar = () => {
    return (
        <button className='botao-jogar'>
            <Link to="/jogador">
                JOGAR
            </Link>
        </button>
    )
}

export default Jogar