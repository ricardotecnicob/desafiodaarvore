import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PopupLeitura from './PopupLeitura';

import './assets/css/popup_leitura.css';
import { Personagem } from './components';


class Leitura extends Component {
    render(){
        return (
            <div className="container">
                <div className="container-mapa-leitura">
                    <PopupLeitura/>
                </div>

                
                <Personagem/>

            </div>

        );
    }
}

export default Leitura;