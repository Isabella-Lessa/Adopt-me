import React from 'react';
import Header from '../services/Header.jsx';
import Footer from '../services/Footer.jsx';
import * as S from "../styles/HomeStyle.js";
import ImgCard1 from "../data/assets-pages/adopt-card1.jpg";
import ImgCard2 from "../data/assets-pages/adopt-card2.jpg";
import ImgCard3 from "../data/assets-pages/adopt-card3.jpg";
import ImgCard4 from "../data/assets-pages/adopt-card4.jpg";
import ImgCard5 from "../data/assets-pages/adopt-card5.jpg";
import ImgCard6 from "../data/assets-pages/adopt-card6.jpg";

const Home = () => {

    return(
           <S.HomeContainer>
                <Header/>
                <S.Container>
                    <S.BoxText>
                        <S.TextFriend>À procura de um amigo?</S.TextFriend>
                        <S.TextAdopt>Encontre seu fiel amigo pet no Adopt Me!</S.TextAdopt>
                    </S.BoxText>
                </S.Container>
                <S.ContainerInfo>
                    <S.BoxInfo>
                        <S.Card1>
                            <S.ImgCard src={ImgCard1}/>
                            <S.TitleCards>Nossa missão</S.TitleCards>
                            <S.PCards>Somos uma ONG fundada no RJ - Brasil que possui a missão de resgatar cães e gatos carentes sem dono.</S.PCards>
                            <S.PCards>Adopt Me possui vários animais disponíveis para adoção e que esperam ansiosamente por seus novos lares.</S.PCards>
                        </S.Card1>
                        <S.Card2>
                            <S.ImgCard src={ImgCard2}/>
                            <S.TitleCards>Por que adotar?</S.TitleCards>
                            <S.PCards>A escolha de adotar é uma atitude consciente, visto que vários animais trazidos pra cá sofreram abandono ou até maus-tratos.</S.PCards>
                            <S.PCards>Adotar um novo amigo é dar a ele uma chance de receber seu tão merecido carinho e afeto que tanto esperou.</S.PCards>
                        </S.Card2>
                        <S.Card3>
                            <S.ImgCard src={ImgCard3}/>
                            <S.TitleCards>Ser responsável</S.TitleCards>
                            <S.PCards>É importante lembrar de como o dono deve ter a consciência de que é importante ter condições de dar um lar amoroso e confortável ao seu novo amigo.</S.PCards>
                            <S.PCards>Seja um dono consciente e responsável ao cuidar do seu novo pet!</S.PCards>
                        </S.Card3>
                        <S.Card4>
                            <S.ImgCard src={ImgCard4}/>
                            <S.TitleCards>Pets pandêmicos</S.TitleCards>
                            <S.PCards>De acordo com pesquisas realizadas pela ONG "Ampara Animal", o índice de abandono e de recolhimento de animais aumentou, em média, 61% entre 2020 e 2021.</S.PCards>
                            <S.PCards>No ápice da pandemia vários animais sofreram abandono e foram recolhidos por nossa equipe.</S.PCards>
                        </S.Card4>
                        <S.Card5>
                            <S.ImgCard src={ImgCard5}/>
                            <S.TitleCards>Não compre, adote!</S.TitleCards>
                            <S.PCards>Exitem tantos animais todos os dias chegando cada vez mais na nossa ONG apenas em busca de um lar.</S.PCards>
                            <S.PCards>Amigo não se compra, se encontra. Adote um novo amigo conosco!</S.PCards>
                        </S.Card5>
                        <S.Card6>
                            <S.ImgCard src={ImgCard6}/>
                            <S.TitleCards>Compartilhe</S.TitleCards>
                            <S.PCards>Nos ajude a encontrar novos donos para nossos queridos amigos. Compartilhe nosso o site e assim o Adopt Me alcançará cada vez mais pessoas.</S.PCards>
                            <S.PCards>Acesse as nossas redes sociais onde postamos várias informações sobre o nosso projeto todos os dias.</S.PCards>
                        </S.Card6>
                    </S.BoxInfo>
                </S.ContainerInfo>
                <Footer />
           </S.HomeContainer>
    )
}

export default Home