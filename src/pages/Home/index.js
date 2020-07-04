import React from 'react';

import { Container, BackgroundPage, BibliotecasBooks } from './styles';

import Book from '../../assets/images/Book.png';

function Home() {
  return (
    <Container >
      <BackgroundPage></BackgroundPage>
      <BibliotecasBooks>
          <div className="areabookslist" >
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
            <img src={Book} border="0" alt="" />
          </div>
      </BibliotecasBooks>
    </Container>
  );
}

export default Home;