import React, { Component }  from 'react';
// import { Link } from 'react-router-dom';
import ArvoreCapitulo from './ArvoreCapitulo';
import { Personagem, PopupIniciar} from './components';

import mapa from './assets/images/mapa.png';
import livro from './assets/images/livro.png';
import './assets/css/trajetoria.css';


class Trajetoria extends Component {

    render(){
        return (
            <div className="container"> 
                <div className="container-mapa">
                    <img src={livro} alt="livro" className="livro" />
                    <img src={mapa} alt="mapa" className="mapaBG" />

                    <div className="container-arvores">
                        <ArvoreCapitulo capitulo="capitulo_1" />
                        <ArvoreCapitulo capitulo="capitulo_2" />
                        <ArvoreCapitulo capitulo="capitulo_3" />
                        <ArvoreCapitulo capitulo="capitulo_4" />
                        <ArvoreCapitulo capitulo="capitulo_5" />
                        <ArvoreCapitulo capitulo="capitulo_6" />
                        <ArvoreCapitulo capitulo="capitulo_7" />
                        <ArvoreCapitulo capitulo="capitulo_8" />
                        <ArvoreCapitulo capitulo="capitulo_9" />
                        <ArvoreCapitulo capitulo="capitulo_10" />
                        <ArvoreCapitulo capitulo="capitulo_11" />

                    </div>

                    <ArvoreCapitulo capitulo="tronco"/>

                    <PopupIniciar/>
        
                </div>
                    <Personagem/>
            </div>
        );
    }
}

export default Trajetoria;
