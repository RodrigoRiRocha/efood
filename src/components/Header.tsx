import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import vector from "../assets/Vector.png";
import { LogoImage } from "./logo";

/* topo com padrão e caixa do logo centralizada */
const HeaderContainer = styled.header`
  background-color: #fdeeea; /* peach claro */
  background-image: url(${vector});
  background-repeat: repeat;
  text-align: center;
  padding: 22px 20px 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;

/* caixa branca pequena para o logo (como no Figma) */
const LogoWrap = styled.div`
  display: inline-block;
  background: #fff;
  padding: 8px 14px;
  border-radius: 4px;
  border: 2px solid #f0b5b0;
`;

/* título central abaixo do topo principal */
const Title = styled.h1`
  font-size: 1.05rem;
  font-weight: 700;
  color: #d85b59;
  margin-top: 14px;
  margin-bottom: 0;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoWrap>
        <LogoImage src={logo} alt="Logo eFood" />
      </LogoWrap>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderContainer>
  );
};
