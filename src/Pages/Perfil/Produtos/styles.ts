import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 56px 0 120px 0;
  background: var(--cor-fundo-pagina);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const Card = styled.article`
  background-color: var(--cor-primaria);
  width: 100%;
  height: 338px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  
  @media (max-width: 600px) {
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;
  
  @media (max-width: 600px) {
    height: 160px;
  }
`;

export const CardContent = styled.div`
  padding: 8px;
  color: var(--cor-fundo-footer);
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  
  @media (max-width: 600px) {
    gap: 6px;
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 18.75px;
  color: var(--cor-fundo-footer);
  margin: 0;
`;

export const Desc = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--cor-fundo-footer);
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (max-width: 600px) {
    -webkit-line-clamp: 3;
  }
`;

export const AddButton = styled.button`
  background: var(--cor-fundo-footer);
  color: var(--cor-primaria);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  border: none;
  padding: 4px 0;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`;