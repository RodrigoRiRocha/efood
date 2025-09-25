import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 40px 0;
  max-width: 900px;
  margin: 0 auto 40px auto;
`;

export const Card = styled.div`
  background: var(--cor-fundo-card);
  overflow: hidden;
  box-shadow: 0 2px 8px var(--cor-sombra);
  display: flex;
  flex-direction: column;
  min-height: 398px;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 220px; /* altura fixa para não alterar o tamanho dos cards */
  object-fit: cover;
  display: block;
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 160px;
  }
`;

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  background: var(--cor-tag);
  color: var(--cor-tag-texto);
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  padding: 4px 8px;
`;

export const Conteudo = styled.div`
  padding: 16px;
  position: relative;
  border-bottom: 1px solid var(--cor-primaria);
  border-left: 1px solid var(--cor-primaria);
  border-right: 1px solid var(--cor-primaria);
  height: 100%;
`;

export const Titulo = styled.h2`
  color: var(--cor-titulo-card);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nota = styled.span`
  color: var(--cor-nota);
  font-weight: bold;
  font-size: 16px;
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

export const Descricao = styled.p`
  color: var(--cor-primaria);
  font-size: 14px;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
`;

export const Botao = styled.button`
  background: var(--cor-botao);
  color: var(--cor-botao-texto);
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;
`;
