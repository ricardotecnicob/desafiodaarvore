import React from 'react';
import { Link } from 'react-router-dom';

import { Container, BackgroundPage, BibliotecasBooks, MoedasAnimated,MoedasAnimated2 } from './styles';

import Book from '../../assets/images/Book.png';

function Home() {
  return (
    <Container >
      <BackgroundPage></BackgroundPage>
      <BibliotecasBooks>
          <div className="areabookslist" >
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
            <Link to="/capitulo" ><img src={Book} border="0" alt="" /></Link>
          </div>
      </BibliotecasBooks>
      <MoedasAnimated>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </MoedasAnimated>  
      <MoedasAnimated2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </MoedasAnimated2>
    </Container>
  );
}

export default Home;