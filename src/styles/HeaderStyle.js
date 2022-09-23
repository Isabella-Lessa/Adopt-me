import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Header = styled.div`
    width: 100%
`
export const HomeMenu = styled.nav`
    background-color: white;
    box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.44);
    width: 100%;
    height: 6em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 9999;
    position: fixed
`

export const FigMenu = styled.figure`
    width: 8%;
    height: 5em;
    display: none;
    
    @media screen and (max-width: 800px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 734px){
        width: 8%;
        height: 50%
    }
    @media screen and (max-width: 582px){
        width: 10%
    }
`

export const ImgMenu = styled.img`
    width: 75px;

    @media screen and (max-width: 800px){
        width: 60px
    }
    @media screen and (max-width: 734px){
        width: 50px;
    }
    @media screen and (max-width: 480px){
        width: 45px
    }
    @media screen and (max-width: 328px){
        width: 30px;
    }
`

export const FigLogo = styled.figure`
    width: 8%;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 734px){
        width: 8%;
        height: 50%
    }
    @media screen and (max-width: 582px){
        width: 10%
    }
`

export const ImgLogo = styled.img`
    width: 3.5em;
    transition: 0.5s all;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }

    @media screen and (min-width: 800px){
        width: 60px
    }
    @media screen and (max-width: 734px){
        width: 50px;
    }
    @media screen and (max-width: 470px){
        width: 40px;
    }
    @media screen and (max-width: 328px){
        width: 30px;
    }
`

export const Title = styled.h1`
    font-family: 'Montserrat';
    font-size: 22px;
    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 626px){
        font-size: 18px
    }
    @media screen and (max-width: 470px){
        font-size: 15px
    }
    @media screen and (max-width: 328px){
        font-size: 12px
    }
`

export const UL = styled.ul`
    width: 60%;
    height: 6em;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 800px){
        display: none
    }

`

export const UL2 = styled.ul`
    width: 60%;
    height: 3em;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 490px){
        width: 70%
    }
    @media screen and (min-width: 801px){
        display: none
    }
`

export const LINK = styled(Link)`
    text-decoration: none;
    font-family: 'Montserrat';
    font-size: 18px;
    color: black;
    &:hover{
        font-weight: 600;
    }
`

export const LINK2 = styled(Link)`
    text-decoration: none;
    font-family: 'Montserrat';
    font-size: 16px;
    color: black;
    &:hover{
        font-weight: 600;
    }

    @media screen and (max-width: 490px){
        font-size: 90%
    }
`

export const LI = styled.li`
    width: 100px;
`

export const LI2 = styled.li`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`