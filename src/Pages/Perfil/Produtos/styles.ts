import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 56px 24px 120px;
  background: var(--cor-fundo-pagina);
  min-height: 400px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: start;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  background-color: var(--cor-accent);
  padding: 0;
  width: 320px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;          /* evita que a imagem aumente o card */
  display: flex;
  flex-direction: column;    /* garante que Image + CardContent fiquem em coluna */
  min-height: 360px;         /* mantém altura mínima consistente */
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;            /* altura fixa para não alterar o tamanho do card */
  object-fit: cover;        /* corta a imagem mantendo o foco central */
  display: block;
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 900px) {
    height: 180px;
  }
  @media (max-width: 600px) {
    height: 140px;
  }
`;

export const CardContent = styled.div`
  padding: 8px;
  color: var(--cor-fundo-footer);
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const Title = styled.h3`
font-family: Roboto;
font-weight: 900;
font-style: Black;
font-size: 16px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;

`;

export const Desc = styled.p`
font-family: Roboto;
font-weight: 400;
font-style: Regular;
font-size: 14px;
leading-trim: NONE;
line-height: 22px;
letter-spacing: 0%;
`;

export const AddButton = styled.button`
  background: var(--cor-fundo-footer);
  color: var(--cor-primaria);
  border: none;
  padding: 4px 7px;
  font-weight: 700;
  cursor: pointer;
  align-self: stretch;
  font-size: 14px;
  &:hover {
    background: var(--cor-accent-light);
  }
`;