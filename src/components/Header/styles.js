import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin:auto;
    position: absolute;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    .conteudoHeader{
      background: transparent;
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 15px;

      .logo{
      }

      .logo img {
        width: 300px;
        height: 100px;
      }

      .bonificacao{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
        color: #FFC003;
        font-family: 'Ruslan Display', cursive;
        font-size: 30px;
      }

      .bonificacao div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 30px;
      }
      
      .bonificacao div img{
        width:50px;
      }      

    }

`;

