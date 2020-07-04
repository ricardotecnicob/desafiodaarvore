import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';
import Moeda from '../../assets/images/moeda.png';
import MoedaEscola from '../../assets/images/moedaescola.png';
import User from '../../assets/images/user2.png';

import { Container } from './styles';

function Header() {
  return (
    <Container>
        <div className="conteudoHeader" >
            <div className="logo" >
                <Link to="/"><img src={Logo} border="0" alt=""/></Link>
            </div>
            <div className="bonificacao" >
                <div>
                    <img src={MoedaEscola} border="0" alt=""/> <label htmlFor="">1820p</label>
                </div>
                <div>
                    <img src={Moeda} border="0" alt=""/> <label htmlFor="">180p</label>
                </div>
                <div>
                    <img src={User} border="0" alt=""/>
                </div>
            </div>
        </div>
    </Container>
  );
}

export default Header;