import React, { useState } from 'react';
import * as S from '../styles/CatStyle.js';
import CatGif from "../data/assets-pages/cat-gif2.gif";
import Header from "../services/Header.jsx";
import Footer from "../services/Footer.jsx";
import axios from 'axios'

const Cat = () => {

    const [ cat, setCat ] = useState()

    const [ status, setStatus ] = useState(false)

    const catAPI = ('https://api.thecatapi.com/v1/images/search')

    const changeCat = () => {

        axios
        .get(catAPI)
        .then( (res) => {
            setCat(res.data[0].url)
            setStatus(true)
        } )
        .catch( (error) => {
            console.log('Sorry, it seems the happened a mistake in our site. Wait a moment so we can resolve!' + error)
        } )
    }

    const adoptCat = () => {
        alert('Parabéns por escolher seu novo amigo felino! Nossa equipe entrará em contato em breve para o cadastro da adoção.')
    }

    return(
        <S.CatContainer>
            <Header />
            <S.Box>
                <S.Info>
                    <S.BoxTxt>
                        <S.TitleTxt>Cats para adoção!</S.TitleTxt>
                        <S.P>Conheça nossos amigos felinos ansiosos por um novo dono:</S.P>
                    </S.BoxTxt>
                    <S.FIG>
                        <S.CatGif src={CatGif}></S.CatGif>
                    </S.FIG>
                </S.Info>
                <S.CardCat>
                    <S.BoxImg>
                        { status && <S.ImgCat src={cat} alt='imagem de gato'></S.ImgCat>} 
                    </S.BoxImg>
                    <S.BoxBtns>
                        <S.BTN onClick={ () => {changeCat()} } >Próximo</S.BTN>
                        <S.BTN onClick={ () => {adoptCat()} }>Adotar!</S.BTN>
                    </S.BoxBtns>
                </S.CardCat>
            </S.Box>
            <Footer />
        </S.CatContainer>
    )
}

export default Cat