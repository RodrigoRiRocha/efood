import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;
  padding: 80px 0 120px 0;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    padding: 80px 24px 120px 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const Card = styled.div`
  background: var(--cor-fundo-card);
  border: 1px solid var(--cor-primaria);
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`;

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  background: var(--cor-tag);
  color: var(--cor-tag-texto);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14.06px;
  padding: 6px 4px;
`;

export const Conteudo = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Titulo = styled.h2`
  color: var(--cor-titulo-card);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.09px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nota = styled.span`
  color: var(--cor-primaria);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.09px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Descricao = styled.p`
  color: var(--cor-primaria);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
`;

export const Botao = styled.button`
  background: var(--cor-botao);
  color: var(--cor-botao-texto);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  border: none;
  padding: 4px 6px;
  cursor: pointer;
  display: inline-block;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
  }
`;
