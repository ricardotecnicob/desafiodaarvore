import React, { Component } from 'react';

import arvore_capitulo_1 from '../Trajetoria/assets/images/arvore_capitulo_1.png';
import arvore_botao from '../Trajetoria/assets/images/arvore_botao.png';
import livro from '../Trajetoria/assets/images/livro.png';

import './assets/css/popup_leitura.css';


class PopupLeitura extends Component {

    render() {
        return (
            <div className="container-leitura">
                    <div className="container-titulo">
                        <img src={arvore_capitulo_1} alt="capitulo_1_menor" className="capitulo_1_menor" />
                        <p className="p_titulo">Capítulo 1</p>
                    </div>

                    <div className="container-texto">
                        <p className="p_texto">What is Lorem Ipsum? </p>
                        <p className="p_texto">
                            
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
  

                    <button className="botao-iniciar">
                        <img src={arvore_botao} alt="arvore_botao" className="arvore_botao" />
                        <strong>Próximo</strong> 
                    </button>

                    <img src={livro} alt="livro" className="livro-leitura" />                    

            </div>
        );
    }
}

export default PopupLeitura;
