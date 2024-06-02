import React, { useState, useEffect } from 'react';
import './css/AreaEmoji.css';
import axios from '../axios';

const AreaEmoji = () => {
    const [emojis, setEmojis] = useState('');

    useEffect(() => {
        const pegarEmojis = async () => {
            try {
                const busca = await axios.get('/emojis');
                setEmojis(busca.data.emojis);
            } catch (error) {
                console.log('Erro ao obter emojis:', error);
            }
        };
        pegarEmojis();
    });

    return (
        <div className="container-area-emoji">
            <div className='area-emoji'>
                <p>{emojis}</p>
            </div>
        </div>
    );
};

export default AreaEmoji;