import styled from "styled-components";

export const HeroContainer = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 40px 0;

  @media (max-width: 768px) {
    height: 320px;
    padding: 24px 0 24px 0;
  }

  @media (max-width: 480px) {
    height: 280px;
    padding: 20px 0 20px 0;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 110px;
    height: auto;
  }
`;

export const Titulo = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 42.19px;
  text-align: center;
  color: var(--cor-primaria);
  max-width: 539px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    max-width: 460px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    line-height: 32px;
    max-width: 420px;
  }
`;
