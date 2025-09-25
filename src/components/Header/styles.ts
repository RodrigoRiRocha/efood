import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  background: var(--cor-fundo-footer);
  padding: 18px 0;
`;

export const HeaderContent = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--cor-primaria);
  font-weight: 700;
`;

export const MenuLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 14px;
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 128px;
`;

export const CartInfo = styled.span`
  font-size: 13px;
`;
