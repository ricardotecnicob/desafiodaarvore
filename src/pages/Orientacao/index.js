import React from 'react';
import { Link } from 'react-router-dom';


import Personagem from '../../assets/images/person.png';
import Book from '../../assets/images/Book.png';

import { Container, BackgroundPage, Book2Apresentacao } from './styles';

function Orientacao() {
  return (
    <Container>
        <BackgroundPage></BackgroundPage>
        <Book2Apresentacao>
            <div className="conteudo" >
                <div className="areapersonagem" >
                  <img src={Personagem} border="" alt="" />
                </div>
                <div className="areaDescricao" >
                  <img src={Book} border="" alt="" /><br/>
                  Olá esse é o <span>Leitor</span> <br/>
                  ele vai te acompanhar 
                  nessa trajetoria!
                </div>
                <div>
                  <Link to="/trajetoria" className="botaoVamos">
                    Vamos!
                  </Link>

                </div>
            </div>

        </Book2Apresentacao>
    </Container>
  );
}

export default Orientacao;