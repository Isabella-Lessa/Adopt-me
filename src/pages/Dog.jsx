import React, { useState } from 'react';
import * as S from "../styles/DogStyle.js";
import DogGif from "../data/assets-pages/dog-gif1.gif";
import Header from "../services/Header.jsx";
import Footer from "../services/Footer.jsx";
import axios from 'axios'

const Dog = () => {

    const [dog, setDog] = useState()

    const [status, setStatus] = useState(false)
    
    const dogAPI = ('https://dog.ceo/api/breeds/image/random')

    
    const changeDog = () => {

        axios
        .get(dogAPI)
        .then( (res) => {
            setDog(res.data.message)
            setStatus(true)
        } )
        .catch( (error) => {
            console.log('Sorry, it seems the happened a mistake in our site. Wait a moment so we can resolve!' + error)
        } )
    }

    const adoptDog = () => {
        alert('Parabéns por escolher seu novo amigo canino! Nossa equipe entrará em contato em breve para o cadastro da adoção.')
    }

    return(
        <S.DogContainer>
            <Header />
            <S.Box>
                <S.AdoptInfo>
                    <S.BoxTxt>
                        <S.TitleTxt>Dogs para adoção!</S.TitleTxt>
                        <S.P>Conheça nossos amigos caninos ansiosos por um novo dono:</S.P>
                    </S.BoxTxt>
                    <S.FIG>
                        <S.DogGif src={DogGif}></S.DogGif>
                    </S.FIG>
                </S.AdoptInfo>
                <S.CardDog>
                    <S.BoxImg>
                        { status && <S.ImgDog src={dog} alt='dog imagem'></S.ImgDog>} 
                    </S.BoxImg>
                    <S.BoxBtns>
                        <S.BTN onClick={ () => {changeDog()} } >Próximo</S.BTN>
                        <S.BTN onClick={ () => {adoptDog()} }>Adotar!</S.BTN>
                    </S.BoxBtns>
                </S.CardDog>
            </S.Box>
            <Footer />
        </S.DogContainer>
    )
}

export default Dog