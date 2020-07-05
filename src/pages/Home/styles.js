import styled from 'styled-components';
import backgroundImageGame from '../../assets/images/backgroundImageGame.jpg';
import Moeda from '../../assets/images/moeda.png';
import Moeda2 from '../../assets/images/moedaescola.png';

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

export const MoedasAnimated = styled.div`
    ul{

    }

    ul li{
        background-image: url(${Moeda});
        background-size: 100% 100%;
        position: absolute;
        width: 40px;
        height: 40px;
        list-style:none;
        animation: square 10s linear infinite;
        opacity: 0;
    }

    li:nth-child(1){
        top: 50vh;
        left:45vw;
    }

    li:nth-child(2){
        top: 80vh;
        left:10vw;
    }

    li:nth-child(3){
        top: 80vh;
        left:85vw;
    }

    li:nth-child(4){
        top:30vh;
        left:70vw;
    }

    li:nth-child(5){
        top:30vh;
        left:10vw;
    }

    li:nth-child(6){
        top:50vh;
        left:30vw;
    }

    li:nth-child(7){
        top: 60vh;
        left:80vw;
    }

    li:nth-child(8){
        top: 35vh;
        left:90vw;
    }

    li:nth-child(9){
        top: 70vh;
        left: 30vw;
    }

    li:nth-child(10){
        top:85vh;
        left:45vw;
    }

    li:nth-child(11){
        top:100vh;
        left:80vw;
    }

    li:nth-child(12){
        top:30vh;
        left:80vw;
    }

    @keyframes square{
        0%{
            transform: scale(0);
            opacity: 1;
        }

        100%{
            transform: scale(1.5);
            opacity: 0;
        }
}



`;

export const MoedasAnimated2 = styled.div`
    ul{

    }

    ul li{
        background-image: url(${Moeda2});
        background-size: 100% 100%;
        position: absolute;
        width: 40px;
        height: 40px;
        list-style:none;
        animation: square 10s linear infinite;
        opacity: 0;
    }

    li:nth-child(1){
        top: 20vh;
        left:25vw;
    }

    li:nth-child(2){
        top: 60vh;
        left:30vw;
    }

    li:nth-child(3){
        top: 60vh;
        left:65vw;
    }

    li:nth-child(4){
        top:10vh;
        left:50vw;
    }

    li:nth-child(5){
        top:10vh;
        left:30vw;
    }

    li:nth-child(6){
        top:20vh;
        left:10vw;
    }

    li:nth-child(7){
        top: 40vh;
        left:60vw;
    }

    li:nth-child(8){
        top: 15vh;
        left:70vw;
    }

    li:nth-child(9){
        top: 50vh;
        left: 10vw;
    }

    li:nth-child(10){
        top:65vh;
        left:25vw;
    }

    li:nth-child(11){
        top:80vh;
        left:60vw;
    }

    li:nth-child(12){
        top:10vh;
        left:60vw;
    }

    @keyframes square{
        0%{
            transform: scale(0);
            opacity: 1;
        }

        100%{
            transform: scale(1.5);
            opacity: 0;
        }
}

`;