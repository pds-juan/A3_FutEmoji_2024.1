import React from 'react'
import './css/Jogar.css'

import { Link } from 'react-router-dom';

const Jogar = () => {
    return (
        <button className='botao-jogar'>
            <Link to="/dificuldade">
                JOGAR
            </Link>
        </button>
    )
}

export default Jogar