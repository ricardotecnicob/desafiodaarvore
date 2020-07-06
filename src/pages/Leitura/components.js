import React from 'react';
// import capitulo1 from '../../assets/images2/arvore_capitulo_1.png';
import personagem from './assets/images/personagem.png';
// import mapa from '../../assets/images/mapa.png';

import './assets/css/personagem.css';

export const Personagem = () => {
    return (
        <div className="personagem-leitura">
            <img src={personagem} alt="personagem" className="personagem" />
        </div>
    );
}


// export const BotaoTrajetoria = () => {
//     return (
//         <div className="botao-trajetoria">
//             <img src={mapa} alt="mapa" className="mapa" />
//         </div>
//     );
// }
