import React from 'react';
// import capitulo1 from '../../assets/images2/arvore_capitulo_1.png';
import personagem from './assets/images/personagem.png';
import './assets/css/personagem.css';

export const Personagem = () => {
    return (
        <div className="personagem-questionario">
            <img src={personagem} alt="personagem" className="personagem" />
        </div>
    );
}


