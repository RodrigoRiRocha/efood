import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: var(--cor-fundo-footer);
  padding: 40px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

export const Logo = styled.img`
  width: auto;
  height: 58px;
  margin-bottom: 32px;
`;

export const Socials = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  margin-bottom: 80px;
`;

export const SocialLink = styled.a`
  display: inline-block;
  cursor: pointer;
  
  img {
    width: 24px;
    height: 24px;
    display: block;
  }
`;

export const Note = styled.p`
  margin: 0;
  max-width: 480px;
  color: var(--cor-primaria);
  font-size: 10px;
  line-height: 1.2;
  text-align: center;
`;