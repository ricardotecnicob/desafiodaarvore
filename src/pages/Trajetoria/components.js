import React from 'react';
// import capitulo1 from '../../assets/images2/arvore_capitulo_1.png';
import personagem from './assets/images/personagem.png';
import './assets/css/personagem.css';
import arvore_capitulo_1 from './assets/images/arvore_capitulo_1.png';
import moeda from './assets/images/moeda.png';
import escola from './assets/images/escola.png';
import arvore_botao from './assets/images/arvore_botao.png';
import './assets/css/popup_iniciar.css';
import { Link } from 'react-router-dom';


export const Personagem = () => {
    return (
        <div className="container-personagem">
            <img src={personagem} alt="personagem" className="personagem" />
            <div className="balao2">
                <p className="p_balao">Esse é o Mapa da sua Trajetória.</p>
                <p className="p_balao">Quando estiver pronto clique em "Iniciar"</p>

            </div>


        </div>
    );
}


export const PopupIniciar = () => {
    return (
        <div className="container-popup">
            <div className="container-titulo">
                <img src={arvore_capitulo_1} alt="capitulo_1_menor" className="capitulo_1_menor" />
                <p className="p_total">TOTAL 1.778 P</p>
                <p className="p_titulo">Capítulo 1</p>
            </div>

            <div className="container-moedas">
                <img src={moeda} alt="moeda" className="moeda" />
                <p className="p_titulo">524 P</p>
            </div>
            <div className="container-moedas">
                <img src={escola} alt="escola" className="escola" />
                <p className="p_titulo">1254 P</p>
            </div>


            <Link to="/leitura" className="link">
                <button className="botao-iniciar">
                    <img src={arvore_botao} alt="arvore_botao" className="arvore_botao" />
                    <strong>INICIAR</strong>
                </button>
            </Link>




        </div>
    );
}

