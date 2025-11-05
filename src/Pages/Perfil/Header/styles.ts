import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header<{ backgroundImage?: string }>`
  background: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'var(--cor-fundo-footer)'};
  background-size: cover;
  background-position: center;
  height: 186px;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    height: 156px;
  }
  
  @media (max-width: 480px) {
    height: 132px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const MenuLink = styled(Link)`
  color: var(--cor-primaria);
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 21.09px;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const LogoImage = styled.img`
  width: 125px;
  height: 57.5px;
  
  @media (max-width: 480px) {
    width: 110px;
    height: auto;
  }
`;

export const CartInfo = styled.span`
  color: var(--cor-primaria);
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 21.09px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
