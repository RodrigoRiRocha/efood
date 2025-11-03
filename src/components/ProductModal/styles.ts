import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

export const Dialog = styled.div`
  background: var(--cor-primaria);
  color: #FFFFFF;
  width: 100%;
  max-width: 1024px;
  display: flex;
  position: relative;
  padding: 32px;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  background: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ImageWrap = styled.div`
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: 280px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 21.09px;
  color: #FFFFFF;
  margin: 0;
`;

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 0;
`;

export const Serve = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 0;
`;

export const AddRow = styled.div`
  margin-top: auto;
`;

export const AddButton = styled.button`
  background: var(--cor-fundo-footer);
  color: var(--cor-primaria);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  border: none;
  padding: 4px 7px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
