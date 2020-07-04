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

export const BibliotecasBooks = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 200px;
    max-width: 1024px;
    width: 100%;
    flex-wrap: wrap;

    .areabookslist{

    }

    .areabookslist img{
      height: 150px;
      margin-right: 20px;
      margin-bottom: 30px;
    }

`;