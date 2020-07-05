import styled from 'styled-components';
import backgroundImageGame from '../../assets/images/backgroundImageGame.jpg';

export const Container = styled.div`
    max-width: 1280px;
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

export const RankGeral = styled.div`  
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 120px;
  left: 50%;
  z-index: 9;

  min-height: 500px;
  background: rgba(255,255,255,.8);
  max-width: 800px;
  width: 100%;
  margin: auto;
  border-radius: 30px;
  margin-left: -400px;

  .imgSelo{
    height: 180px;
    margin: 0px auto;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.5);
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .imgSelo img{
    height: 100%;
  }

  .rankcontent{
    display: flex;
    justify-content: space-between;
    margin-right:20px;
    margin-left:20px;
    margin-bottom:20px;
  }

  .rank01{
    margin-right:20px;
    min-height: 400px;
    width: 400px;
    border: 2px solid #ccc;
    border-radius: 20px;
  }

  .rank02{
    height: 400px;
    width: 400px;
    border: 2px solid #ccc;
    border-radius: 20px;
  }

  .header{
    height: 100px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #ccc;
  }

  .header img{
    height: 100%;
  }

  .listuserscool{
    height: 400px;
    overflow-y: auto;

    ul{
      list-style: none;
      padding-left: 0px;
      margin-left: 0px;
      margin: 10px;
    }

    div{
      display: flex;
      justify-content: space-between;
      align-content: center;
      background: #F2F2F2;
      margin-bottom: 5px;
      border-bottom: 2px solid #ccc;
    }

    img{
      width: 50px;
      height: 50px;
    }

    label{
      padding-top: 15px;
      font-weight: bold;
    }
    
    .points{
      margin-right: 20px;
    }

  }


`;
