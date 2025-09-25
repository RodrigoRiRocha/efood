import styled from "styled-components";

export const HeroContainer = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 384px;
  margin-top: -24px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-top: 40px;
`;

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 138px;
  opacity: 1;
  position: static;
  transform: none;
  cursor: pointer;
`;

export const Titulo = styled.h1`
  font-style: normal;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: var(--cor-primaria);
  margin: 0 auto;
  width: 539px;
`;
