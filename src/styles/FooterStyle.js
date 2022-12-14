import styled from "styled-components";

export const Footer = styled.section`
    width: 100%;
`

export const BoxFooter = styled.div`
    background-color: white;
    width: 100%;
    height: 6em;
    box-shadow: 0px -6px 10px 0px rgba(0,0,0,0.18);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    

    @media screen and (max-width: 800px){
        height: 10em;
        flex-direction: column;
    }
`

export const BoxIcons = styled.figure`
    width: 35%;
    height: 4em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 800px){
        width: 50%;
    }
    @media screen and (max-width: 734px){
        width: 60%
    }
`

export const ImgIcon = styled.img`
    width: 45px;
    cursor: pointer;
    transition: 0.5s all;
    &:hover{
        transform: scale(1.1)
    }

    @media screen and (max-width: 980px){
        width: 35px;
    }
    @media screen and (max-width: 734px){
        width: 30px
    }
`

export const Copy = styled.p`
    font-size: 15px;
    font-family:'Montserrat';
    font-weight: 600;

    @media screen and (max-width: 980px){
        font-size: 13px;
    }
    @media screen and (max-width: 980px){
        font-size: 10px;
    }
`