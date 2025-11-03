import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { selectCartItemsCount, toggleCart } from '../../../store/cartSlice'
import logoImg from '../../../assets/logo_efood.png'
import fundoImg from '../../../assets/fundo.png'
import * as S from './styles'

const PerfilHeader: React.FC = () => {
  const dispatch = useAppDispatch()
  const cartCount = useAppSelector(selectCartItemsCount)

  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  return (
    <S.HeaderWrapper backgroundImage={fundoImg}>
      <S.HeaderContent>
        <S.MenuLink to="/">Restaurantes</S.MenuLink>
        <Link to="/">
          <S.LogoImage src={logoImg} alt="efood" />
        </Link>
        <S.CartInfo onClick={handleCartClick} role="button" tabIndex={0}>
          {cartCount} produto(s) no carrinho
        </S.CartInfo>
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}

export default PerfilHeader