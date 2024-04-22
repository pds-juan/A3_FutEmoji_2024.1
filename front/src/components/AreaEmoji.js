import React from 'react'
import './css/AreaEmoji.css'

const AreaEmoji = () => {
    return (
        <div className="container-area-emoji">

            <i class="fa-solid fa-arrow-left" id='seta-esquerda'></i>

            <div className='area-emoji'>
                <p>🔴⚪⚫</p>
            </div>

            <i class="fa-solid fa-arrow-right" id='seta-direita'></i>

        </div>
    )
}

export default AreaEmoji