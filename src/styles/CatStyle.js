import styled from 'styled-components';

export const CatContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: lightgray;
`

export const Box = styled.div`
    background-color: white;
    width: 100%;
    height: 60em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 490px){
        height: 70em
    }  
`

export const Info = styled.div`
    background-color: white;
    width: 80%;
    height: 10em;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.41);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 490px){
        width: 60%;
        height: 20em;
        flex-direction: column
    }
    @media screen and (max-width: 450px){
        height: 300px
    }
    @media screen and (max-width: 390px){
        height: 250px
    }
`

export const BoxTxt = styled.div`
    background-color: white;
    width: 60%;
    line-height: 40px;
    border-radius: 10px;
    padding: 10px;

    @media screen and (max-width: 618px){
        line-height: 30px
    }
    @media screen and (max-width: 490px){
        width: 80%
    }
    @media screen and (max-width: 390px){
        line-height: 25px;
    }
`

export const TitleTxt = styled.h1`
    font-size: 23px;
    font-family:'Montserrat';
    color: black;

    @media screen and (max-width: 618px){
        font-size: 19px
    }
    @media screen and (max-width: 450px){
        font-size: 17px
    }
    @media screen and (max-width: 390px){
        font-size: 15px
    }
`

export const P = styled.p`
    font-size: 17px;
    font-family:'Montserrat';
    color: black;

    @media screen and (max-width: 618px){
        font-size: 16px
    }
    @media screen and (max-width: 450px){
        font-size: 14px
    }
    @media screen and (max-width: 390px){
        font-size: 12px
    }
`

export const FIG = styled.figure`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center
`

export const CatGif = styled.img`
    width: 150px;
    height: 150px;

    @media screen and (max-width: 618px){
        width: 120%;
        height: 110px
    }
    @media screen and (max-width: 490px){
        width: 160%;
        height: 120px
    }
    @media screen and (max-width: 390px){
        height: 90%
    }
`

export const CardCat = styled.div`
    background-color: #d9051f;
    width: 540px;
    height: 500px;
    margin: 40px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.20);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }

    @media screen and (max-width: 618px){
        width: 60%;
        height: 400px
    }
    @media screen and (max-width: 450px){
        height: 300px
    }
    @media screen and (max-width: 390px){
        height: 250px
    }
`

export const BoxImg = styled.figure`
    background-color: #a6a6a6;
    width: 100%;
    height: 400px;
    object-fit: cover;

    @media screen and (max-width: 618px){
        width: 100%;
        height: 300px
    }
    @media screen and (max-width: 450px){
        height: 200px
    }
    @media screen and (max-width: 390px){
        height: 180px
    }
`

export const ImgCat = styled.img`
    width: 540px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;

    @media screen and (max-width: 618px){
        width: 400px;
        height: 300px
    }
    @media screen and (max-width: 450px){
        width: 300px;
        height: 200px
    }
`

export const BoxBtns = styled.div`
    background-color: #d9051f;
    width: 100%;
    height: 6.5em;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover{
        background-color: white
    }
`

export const BTN = styled.button`
    background-color: white;
    width: 120px;
    height: 3em;
    font-size: 14px;
    font-family:'Montserrat';
    font-weight: 700;
    border-radius: 10px;
    border: none;
    box-shadow: -3px 3px 10px 0px rgba(0,0,0,0.82);
    transition: 0.5s all;
    &:hover{
        background-color: #d9051f;
        color: white;
        cursor: pointer
    }

    @media screen and (max-width: 618px){
        width: 100px;
        height: 2.3em;
        font-size: 13px
    }
    @media screen and (max-width: 450px){
        width: 80px;
        height: 2em;
        font-size: 11px
    }
    @media screen and (max-width: 390px){
        width: 60px;
        height: 2em;
        font-size: 10px
    }
`
