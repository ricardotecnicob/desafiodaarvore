import React from 'react';

import Selo from '../../assets/images/SeloArvoredeQualidade.png';
import Moeda from '../../assets/images/moeda.png';
import Moeda2 from '../../assets/images/moedaescola.png';

import { Container, BackgroundPage, RankGeral } from './styles';

function Rank() {
  return (
    <Container >
      <BackgroundPage></BackgroundPage>
      <RankGeral>
          <div className="imgSelo" ><img src={Selo} alt=""/></div>
          <div className="rankcontent" >
              <div className="rank01" >
                  <div className="header" >
                        <img src={Moeda2} border="0" alt="" />
                  </div>
                  <div className="listuserscool" >
                      <ul>
                          <div>
                              <img src={Moeda2} border="0" alt="" />
                              <label htmlFor="">Nome da Escola</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda2} border="0" alt="" />
                              <label htmlFor="">Nome da Escola</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda2} border="0" alt="" />
                              <label htmlFor="">Nome da Escola</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda2} border="0" alt="" />
                              <label htmlFor="">Nome da Escola</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda2} border="0" alt="" />
                              <label htmlFor="">Nome da Escola</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda2} border="0" alt="" />
                              <label htmlFor="">Nome da Escola</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda2} border="0" alt="" />
                              <label htmlFor="">Nome da Escola</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                      </ul>
                  </div>
              </div>
              <div className="rank02" >
                  <div className="header" >
                        <img src={Moeda} border="0" alt="" />
                  </div>
                  <div className="listuserscool" >
                  <ul>
                          <div>
                              <img src={Moeda} border="0" alt="" />
                              <label htmlFor="">Nome do Aluno(a)</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda} border="0" alt="" />
                              <label htmlFor="">Nome do Aluno(a)</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda} border="0" alt="" />
                              <label htmlFor="">Nome do Aluno(a)</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda} border="0" alt="" />
                              <label htmlFor="">Nome do Aluno(a)</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda} border="0" alt="" />
                              <label htmlFor="">Nome do Aluno(a)</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda} border="0" alt="" />
                              <label htmlFor="">Nome do Aluno(a)</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                          <div>
                              <img src={Moeda} border="0" alt="" />
                              <label htmlFor="">Nome do Aluno(a)</label>
                              <label htmlFor="" className="points" >1554P</label>
                          </div>
                      </ul>
                  </div>
              </div>
          </div>
      </RankGeral>
    </Container>
  );
}

export default Rank;