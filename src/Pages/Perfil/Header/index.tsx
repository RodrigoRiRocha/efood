import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/logo_efood.png'
import fundoImg from '../../../assets/fundo.png'
import * as S from './styles'

interface PerfilHeaderProps {
  cartCount?: number
}

const PerfilHeader: React.FC<PerfilHeaderProps> = ({ cartCount = 0 }) => {
  return (
    <S.HeaderWrapper backgroundImage={fundoImg}>
      <S.HeaderContent>
        <S.MenuLink to="/">Restaurantes</S.MenuLink>
        <Link to="/">
          <S.LogoImage src={logoImg} alt="efood" />
        </Link>
        <S.CartInfo>{cartCount} produto(s) no carrinho</S.CartInfo>
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}

export default PerfilHeader