import React, { useState } from 'react';
import * as S from "../styles/HeaderStyle.js";
import PetHouse from "../data/assets-services/pethouse.png";
import ClosedMenu from "../data/assets-services/menuclosed - icon.png";
import OpenMenu from "../data/assets-services/menuopen - icon.png"

const Header = () => {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleList = () => {

        return(
            <>
                <S.UL2>
                    <S.LI2><S.LINK2 to='/'>Sobre</S.LINK2></S.LI2>
                    <S.LI2><S.LINK2 to='/dogpages'>Cachorros</S.LINK2></S.LI2>
                    <S.LI2><S.LINK2 to='/catpages'>Gatos</S.LINK2></S.LI2>
                </S.UL2>
            </>
        )
    }

    const handleLogo = () => {
        
        return(
            <>
                <S.FigLogo>
                    <S.ImgLogo src={PetHouse} alt='logo'/>
                </S.FigLogo>
                <S.Title>Adopt Me!</S.Title>
            </>
        )
    }

    return(
        <S.Header>
            <S.HomeMenu>
                <S.FigMenu onClick={ handleMenu }>
                    <S.ImgMenu src={menu === true ? OpenMenu : ClosedMenu} alt='menu'/>
                </S.FigMenu>
                { menu && handleList() }
                { menu === false ? handleLogo() : "" }
                <S.UL>
                    <S.LI><S.LINK to='/'>Sobre</S.LINK></S.LI>
                    <S.LI><S.LINK to='/dogpages'>Cachorros</S.LINK></S.LI>
                    <S.LI><S.LINK to='/catpages'>Gatos</S.LINK></S.LI>
                </S.UL>
            </S.HomeMenu>
        </S.Header>
    )
}

export default Header