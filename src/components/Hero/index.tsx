import React from "react";
import fundoImg from "../../assets/fundo.png";
import logoImg from "../../assets/logo_efood.png";
import { HeroContainer, Logo, Titulo } from "./styles";

interface HeroProps {
  titulo?: string;
  subtitulo?: string;
  imagemFundo?: string;
}

const Hero: React.FC<HeroProps> = ({
  titulo = "Viva experiências gastronômicas no conforto da sua casa",
  imagemFundo,
}) => {
  return (
    <HeroContainer background={imagemFundo || fundoImg}>
      <div>
        <Logo src={logoImg} alt="Logo Efood" />
      </div>
      <div>
        <Titulo>{titulo}</Titulo>
      </div>
    </HeroContainer>
  );
};

export default Hero;
