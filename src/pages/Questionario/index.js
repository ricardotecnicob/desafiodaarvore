import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PopupQuestionario from './PopupQuestionario';

import './assets/css/popup_questionario.css';
import { Personagem } from './components';


class Questionario extends Component {
    render(){
        return (
            <div className="container">
                <div className="container-mapa-questionario">
                    <PopupQuestionario/>
                </div>
                
                <Personagem/>

            </div>

        );
    }
}

export default Questionario;