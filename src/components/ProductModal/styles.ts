import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: flex-start; 
  justify-content: center;
  z-index: 1000;
  padding: 72px 24px 24px 24px;
`;

export const Dialog = styled.div`
  background: var(--cor-accent);
  color: var(--cor-botao-texto);
  width: 100%;
  max-width: 920px;
  border-radius: 6px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
  display: flex;
  gap: 16px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 700px) {
    flex-direction: column;
    max-width: 92%;
    align-items: stretch;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  background: rgba(255,255,255,0.12);
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  line-height: 1;
  padding: 6px 8px;
  border-radius: 4px;
  transition: background .12s ease, transform .08s ease;
  &:hover{ background: rgba(255,255,255,0.18); transform: translateY(-1px); }
`;

export const ImageWrap = styled.div`
  box-sizing: border-box;
  overflow: hidden;   
  display: flex;      
  align-items: center;
  justify-content: center;
  padding: 32px 0 32px 32px;
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;       
  display: block;
  

  @media (max-width: 700px) {
    height: 220px;            /* no mobile, limita a altura */
    width: 100%;
    border-radius: 6px 6px 0 0;
  }
`;

export const Content = styled.div`
  padding: 28px 32px;
  flex: 1;
  overflow: auto;
  max-height: calc(100vh - 120px);
`;

export const Title = styled.h3`
  margin: 0 0 8px 0;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;


export const Description = styled.p`
  color: rgba(255,255,255,0.95);
  line-height: 1.5;
`;

export const Serve = styled.p`
  color: rgba(255,255,255,0.85);
  font-size: 13px;
  margin-top: 12px;
`;

export const AddRow = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-start;
`;

export const AddButton = styled.button`
  background: var(--cor-fundo-footer);
  color: var(--cor-primaria);
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0 2px 0 rgba(0,0,0,0.06) inset;
`;
