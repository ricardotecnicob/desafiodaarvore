import styled from 'styled-components';
import backgroundImageGame from '../../assets/images/backgroundImageGame.jpg';
import backgroundImageBook from '../../assets/images/book2.png';

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin:auto;
`;

export const BackgroundPage = styled.div`
    height: 1080px;
    background-image: url(${backgroundImageGame});
    background-position: center;
    background-size: cover;
    filter: blur(5px);
`;

export const Book2Apresentacao = styled.div`
    position: absolute;
    top: 200px;
    z-index: 2;
    background-image: url(${backgroundImageBook});
    background-position: center;
    background-size: cover;
    width: 1024px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .conteudo{
      max-width: 768px;
      margin: auto;
      display: flex;
      align-items: center;
    }

    .areapersonagem{
      height: 400px;
      width: 50%;
      margin-right: 30px;
      
    }

    .areapersonagem img{
      height: 100%;
    }

    .areaDescricao{
      width: 50%;
      font-family: 'Acme', sans-serif;
      font-size: 50px;
      text-align:center;

      span{
        color: #316C27;
      }

      img{
        margin-top: 20px;
        height: 150px;
        margin-left: 50px;
      }

    }

    .botaoVamos {
      position: absolute;
      bottom: 20px;
      right: 22%;
      -webkit-text-decoration: none;
      text-decoration: none;
      cursor: pointer;
      font-family: 'Acme',sans-serif;
      font-size: 30px;
      color: #fff;
      background-color: #148800;
      border-radius: 5px;
      padding-left: 20px;
      padding-right: 20px;
      box-shadow: 1px 1px 5px #778075;

      :hover{
        background-color: #3aab00;

      }
    }
    

`;