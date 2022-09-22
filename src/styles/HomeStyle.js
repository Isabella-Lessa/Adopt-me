import styled from "styled-components"
import BackAdoption from "../data/assets-pages/background-adopt.jpg"

export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh
`

export const Container = styled.section`
    background-image: url(${BackAdoption});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top 5%;
    width: 100%;
    height: 38em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.25);

    @media screen and (max-width: 800px){
        background-position: 80%;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 80px;
        padding-top: 80px;
    }
    @media screen and (max-width: 470px){
        background-position: 60%;
        padding: 40px
    }
    @media screen and (max-width: 328px){
        background-position: 50%;
        padding: 20px
    }
`

export const BoxText = styled.div`
    line-height: 70px;

    @media screen and (max-width: 800px){
        width: 80%;
        height: 70%;
    }
    @media screen and (max-width: 726px){
        width: 90%;
        height: 70%;
    }
    @media screen and (max-width: 662px){
        width: 100%
    }
`

export const TextFriend = styled.p`
    font-family: 'Montserrat';
    font-size: 45px;
    font-weight: 700;
    color: white;

    @media screen and (max-width: 800px){
        font-size: 35px
    }
    @media screen and (max-width: 662px){
        font-size: 180%;
    }
    @media screen and (max-width: 532px){
        font-size: 150%;
    }
    @media screen and (max-width: 470px){
        font-size: 120%
    }
`

export const TextAdopt = styled.p`
    font-family: 'Montserrat';
    font-size: 25px;
    font-weight: 300;
    color: white;

    @media screen and (max-width: 800px){
        font-size: 20px;
        font-weight: 500;
        color: white
    }
    @media screen and (max-width: 662px){
        font-size: 100%;
    }
    @media screen and (max-width: 502px){
        font-size: 90%;
    }
    @media screen and (max-width: 470px){
        font-size: 70%
    }
`

export const ContainerInfo = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px
`

export const BoxInfo = styled.div`
    height: 97%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap
`

export const Card1 = styled.div`
    background-color: white;
    width: 18em;
    height: 26em;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const Card2 = styled.div`
    background-color: white;
    width: 18em;
    height: 26em;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const Card3 = styled.div`
    background-color: white;
    width: 18em;
    height: 26em;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const Card4 = styled.div`
    background-color: white;
    width: 18em;
    height: 26em;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const Card5 = styled.div`
    background-color: white;
    width: 18em;
    height: 26em;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const Card6 = styled.div`
    background-color: white;
    width: 18em;
    height: 26em;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const ImgCard = styled.img`
    width: 290px;
    height: 200px;
    object-fit: cover;
`

export const TitleCards = styled.h3`
    font-size: 19px;
    font-family:'Montserrat';
    text-align: center;

    
    @media screen and (max-width: 464px){
        font-size: 15px;
    }
`

export const PCards = styled.p`
    font-size: 14px;
    font-family:'Montserrat';
    padding: 10px;

    @media screen and (max-width: 464px){
        font-size: 12px;
    }
`