import React from "react";
import * as S from "./styles";
import logoImg from "../../../assets/logo_efood.png";
import instagramIcon from "../../../assets/instagram.png";
import facebookIcon from "../../../assets/facebook.png";
import twitterIcon from "../../../assets/twitter.png";

const FooterPerfil: React.FC = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.Logo src={logoImg} alt="efood" />

        <S.Socials>
          <S.SocialLink>
            <img src={instagramIcon} alt="Instagram" />
          </S.SocialLink>
          <S.SocialLink>
            <img src={facebookIcon} alt="Facebook" />
          </S.SocialLink>
          <S.SocialLink>
            <img src={twitterIcon} alt="Twitter" />
          </S.SocialLink>
        </S.Socials>

        <S.Note>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade
          pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </S.Note>
      </S.Inner>
    </S.Container>
  );
};

export default FooterPerfil;