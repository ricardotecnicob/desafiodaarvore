import styled from 'styled-components';
import backgroundImageGame from '../../assets/images/backgroundImageGame.jpg';

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

export const AreaCapitulos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 200px;
    max-width: 1024px;
    width: 100%;


    .bookRef{}
    .bookRef img{
      height: 350px;
    }

    .treesCap{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .areacaptree{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-right: 10px;
      margin-bottom: 50px;
    }

    .areacaptree img{
      height: 150px;
    }

    .areacaptree label{
      color:#F5BB2B;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #000;
      text-transform: uppercase;
      font-family: 'Ruslan Display', cursive;
      font-size: 25px;
    }

    

`;  
