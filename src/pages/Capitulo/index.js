import React from 'react';
import { Link } from 'react-router-dom';

import { Container, BackgroundPage, AreaCapitulos } from './styles';

import Book from '../../assets/images/Book.png';
import Trees1 from '../../assets/images/imagem1.png';
import Trees2 from '../../assets/images/imagem2.png';
import Trees3 from '../../assets/images/imagem3.png';
import Trees4 from '../../assets/images/imagem4.png';
import Trees5 from '../../assets/images/imagem5.png';
import Trees6 from '../../assets/images/imagem6.png';
import Trees7 from '../../assets/images/imagem7.png';
import Trees8 from '../../assets/images/imagem8.png';
import Trees9 from '../../assets/images/imagem9.png';
import Trees10 from '../../assets/images/imagem10.png';
import Trees11 from '../../assets/images/imagem11.png';

function Capitulo() {
  return(
    <Container>
        <BackgroundPage></BackgroundPage>
        <AreaCapitulos>
            <div className="bookRef" >
              <img src={Book} border="0" alt="" />
            </div>
            <div className="treesCap" >
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees1} border="0" alt="" />
                    <label htmlFor="">CAPITULO 1</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees2} border="0" alt="" />
                    <label htmlFor="">CAPITULO 2</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees3} border="0" alt="" />
                    <label htmlFor="">CAPITULO 3</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees4} border="0" alt="" />
                    <label htmlFor="">CAPITULO 4</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees5} border="0" alt="" />
                    <label htmlFor="">CAPITULO 5</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees6} border="0" alt="" />
                    <label htmlFor="">CAPITULO 6</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees7} border="0" alt="" />
                    <label htmlFor="">CAPITULO 7</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees8} border="0" alt="" />
                    <label htmlFor="">CAPITULO 8</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees9} border="0" alt="" />
                    <label htmlFor="">CAPITULO 9</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees10} border="0" alt="" />
                    <label htmlFor="">CAPITULO 10</label>
                </Link>
                <Link to="/orientacao" class="areacaptree" >
                    <img src={Trees11} border="0" alt="" />
                    <label htmlFor="">CAPITULO 11</label>
                </Link>
            </div>
        </AreaCapitulos>
    </Container>
  );
}

export default Capitulo;