import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { LogoImage } from "./logo";

const FooterContainer = styled.footer`
  background-color: #fdeeea;
  padding: 28px 20px;
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
`;

const Social = styled.div`
  margin-top: 8px;
  font-size: 1rem;
  color: #d85b59;
`;

const Small = styled.p`
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 10px;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div
        style={{
          display: "inline-block",
          background: "#fff",
          padding: "6px 10px",
          borderRadius: 4,
          border: "1px solid #f0b5b0",
        }}
      >
        <LogoImage src={logo} alt="Logo eFood" />
      </div>
      <Social>● ● ●</Social>
      <Small>© 2025 efood - Todos os direitos reservados</Small>
    </FooterContainer>
  );
};
