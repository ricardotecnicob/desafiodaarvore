import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import arvore_capitulo_1 from '../Trajetoria/assets/images/arvore_capitulo_1.png';
import arvore_botao from '../Trajetoria/assets/images/arvore_botao.png';

import './assets/css/popup_questionario.css';
import ArvoreItem from './ArvoreItem';



class PopupQuestionario extends Component {

    render() {
        return (
            <div className="container-questionario">
                <div className="container-titulo">
                    <img src={arvore_capitulo_1} alt="capitulo_1_menor" className="capitulo_1_menor" />
                    <p className="p_titulo">Questionário</p>
                </div>

                <div className="container-items">
                    <ArvoreItem opcao="Opção 1" />
                    <ArvoreItem opcao="Opção 2" />
                    <ArvoreItem opcao="Opção 3" />
                    <ArvoreItem opcao="Opção 4" />
                </div>
  
                <div className="container-botoes">
                    <Link to="/leitura" className="link">
                        <button className="botao-questionario">
                            <div className="texto-botao">
                                <strong>Voltar</strong> 
                            </div>

                            <img src={arvore_botao} alt="arvore_botao" className="arvore_botao" />
                        </button>
                    </Link>


                        <button className="botao-questionario">
                            <img src={arvore_botao} alt="arvore_botao" className="arvore_botao" />
                            <div className="texto-botao">
                                <strong >Próximo</strong>
                            </div>
                            
                        </button>

                    </div>

            </div>
        );
    }
}

export default PopupQuestionario;
