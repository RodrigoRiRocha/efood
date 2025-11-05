import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectCartItems,
  selectCartIsOpen,
  selectCartTotal,
  closeCart,
  removeItem,
  type CartItem,
} from '../../store/cartSlice';
import { openCheckout } from '../../store/checkoutSlice';
import * as S from './styles';
import placeholderImg from '../../assets/pizza.png';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const isOpen = useAppSelector(selectCartIsOpen);
  const total = useAppSelector(selectCartTotal);

  if (!isOpen) return null;

  const handleRemove = (id: number | string) => {
    dispatch(removeItem(id));
  };

  const handleClose = () => {
    dispatch(closeCart());
  };

  const handleContinueToCheckout = () => {
    dispatch(closeCart());
    dispatch(openCheckout());
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <S.Overlay onClick={handleClose}>
      <S.Sidebar onClick={(e) => e.stopPropagation()}>
        {items.length === 0 ? (
          <S.EmptyCart>
            O carrinho está vazio. Adicione produtos para continuar!
          </S.EmptyCart>
        ) : (
          <>
            {items.map((item: CartItem) => (
              <S.CartItem key={item.id}>
                <S.ItemImage
                  src={item.foto || placeholderImg}
                  alt={item.nome}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = placeholderImg;
                  }}
                />
                <S.ItemInfo>
                  <S.ItemTitle>{item.nome}</S.ItemTitle>
                  <div>
                    <S.ItemPrice>R$ {formatPrice(item.preco)}</S.ItemPrice>
                    {item.quantity > 1 && (
                      <S.Quantity>Quantidade: {item.quantity}</S.Quantity>
                    )}
                  </div>
                </S.ItemInfo>
                <S.RemoveButton
                  onClick={() => handleRemove(item.id)}
                  aria-label="Remover item"
                  title="Remover do carrinho"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 3.98667L12.0133 2L8 6.01333L3.98667 2L2 3.98667L6.01333 8L2 12.0133L3.98667 14L8 9.98667L12.0133 14L14 12.0133L9.98667 8L14 3.98667Z"
                      fill="#E66767"
                    />
                  </svg>
                </S.RemoveButton>
              </S.CartItem>
            ))}
            <S.TotalSection>
              <S.TotalLabel>Valor total</S.TotalLabel>
              <S.TotalValue>R$ {formatPrice(total)}</S.TotalValue>
            </S.TotalSection>
            <S.CheckoutButton onClick={handleContinueToCheckout}>
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  );
};

export default Cart;
