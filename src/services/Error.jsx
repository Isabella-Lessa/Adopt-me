import React from 'react';
import * as S from "../styles/ErrorStyle.js";
import ErrorDog from "../data/assets-services/error-dogmeme1.jpg"

const Error = () => {

    return (
        <S.ErrorContainer>
            <S.ErrorTxt>
                <S.ErrorTitle>Error 404 - Not Found</S.ErrorTitle>
                <S.ErrorMsg>Ops! Parece que você errou o caminho do site...</S.ErrorMsg>
                <S.ErrorMsg>Para voltar para o "Adopt me!" clique no botão abaixo:</S.ErrorMsg>
                <S.BTN><S.LINK to='/'>Voltar</S.LINK></S.BTN>
            </S.ErrorTxt>
            <S.FIG>
                <S.IMG src={ErrorDog}></S.IMG>
            </S.FIG>
        </S.ErrorContainer>
    )
}

export default Error
