import React from 'react'
import logoImg from '../../assets/logo_efood.png'
import { HeaderWrapper, HeaderContent, MenuLink, LogoLink, LogoImage, CartInfo } from './styles'

interface HeaderProps {
  cartCount?: number
}

const Header: React.FC<HeaderProps> = ({ cartCount = 0 }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <MenuLink to="/">Restaurantes</MenuLink>
        <LogoLink to="/">
          <LogoImage src={logoImg} alt="efood" />
        </LogoLink>
        <CartInfo>{cartCount} produto(s) no carrinho</CartInfo>
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
