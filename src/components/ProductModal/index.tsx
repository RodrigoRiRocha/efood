import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addItem, openCart } from '../../store/cartSlice';
import * as S from './styles';

interface Product {
  id?: number | string;
  title: string;
  desc: string;
  image?: string;
  price?: string;
  priceValue?: number;
}

interface Props {
  open: boolean;
  product?: Product | null;
  onClose: () => void;
  onAdd?: (p: Product) => void;
}

const ProductModal: React.FC<Props> = ({ open, product, onClose, onAdd }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !product) return null;

  const handleAddToCart = () => {
    if (!product.id || !product.priceValue) {
      console.warn('Produto sem ID ou preço válido');
      return;
    }

    dispatch(
      addItem({
        id: product.id,
        nome: product.title,
        descricao: product.desc,
        foto: product.image,
        preco: product.priceValue,
        porcao: 'Serve: de 2 a 3 pessoas',
      })
    );

    dispatch(openCart());
    
    if (onAdd) {
      onAdd(product);
    }
    
    onClose();
  };

  return (
    <S.Overlay onClick={onClose} role="dialog" aria-modal="true">
      <S.Dialog onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <S.Close onClick={onClose} aria-label="Fechar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3.98667L12.0133 2L8 6.01333L3.98667 2L2 3.98667L6.01333 8L2 12.0133L3.98667 14L8 9.98667L12.0133 14L14 12.0133L9.98667 8L14 3.98667Z" fill="#FFFFFF"/>
          </svg>
        </S.Close>
        {product.image && (
          <S.ImageWrap>
            <S.Image src={product.image} alt={product.title} />
          </S.ImageWrap>
        )}
        <S.Content>
          <S.Title>{product.title}</S.Title>
          <S.Description>{product.desc}</S.Description>
          <S.Serve>Serve: de 2 a 3 pessoas</S.Serve>
          <S.AddRow>
            <S.AddButton
              onClick={handleAddToCart}
            >
              Adicionar ao carrinho {product.price ? `- ${product.price}` : ''}
            </S.AddButton>
          </S.AddRow>
        </S.Content>
      </S.Dialog>
    </S.Overlay>
  );
};

export default ProductModal;
