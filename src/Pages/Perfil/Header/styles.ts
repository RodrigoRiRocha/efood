import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header<{ backgroundImage?: string }>`
  background: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'var(--cor-fundo-footer)'};
  height: 186px;
  opacity: 1;
`

export const HeaderContent = styled.div`
  max-width: 1366px;
  width: 2031.8128662109375px;
  height: 186px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const MenuLink = styled(Link)`
  color: var(--cor-primaria);
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  
  &:hover {
    text-decoration: underline;
  }
`

export const LogoImage = styled.img`
  width: 125px;
  height: 57.5px;
  transform: rotate(0deg);
  opacity: 1;
`

export const CartInfo = styled.span`
  color: var(--cor-primaria);
  font-weight: 900;
  font-size: 18px;
`
