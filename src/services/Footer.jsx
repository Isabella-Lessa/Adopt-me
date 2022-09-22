import React from 'react';
import * as S from "../styles/FooterStyle.js";
import ImgIcon1 from "../data/assets-services/face-icon.png"; 
import ImgIcon2 from "../data/assets-services/insta-icon.png"; 
import ImgIcon3 from "../data/assets-services/twitter-icon.png"; 
import ImgIcon4 from "../data/assets-services/wpp-icon.png"; 
import ImgIcon5 from "../data/assets-services/yt-icon.png"; 
import ImgIcon6 from "../data/assets-services/linkedin-icon.png"; 

const Footer = () => {
    return(
        <S.Footer>
            <S.BoxFooter>
                <S.BoxIcons>
                    <S.ImgIcon src={ImgIcon1}></S.ImgIcon>
                    <S.ImgIcon src={ImgIcon2}></S.ImgIcon>
                    <S.ImgIcon src={ImgIcon3}></S.ImgIcon>
                    <S.ImgIcon src={ImgIcon4}></S.ImgIcon>
                    <S.ImgIcon src={ImgIcon5}></S.ImgIcon>
                    <S.ImgIcon src={ImgIcon6}></S.ImgIcon>
                </S.BoxIcons>
                <S.Copy>
                    ©  Copyright 2022 - Desenvolvido por Isabella Lessa.
                </S.Copy>
            </S.BoxFooter>
        </S.Footer>
    )
}

export default Footer