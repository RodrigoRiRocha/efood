import React, { useEffect } from 'react';
import * as S from './styles';

interface Product {
  id?: number | string;
  title: string;
  desc: string;
  image?: string;
  price?: string;
}

interface Props {
  open: boolean;
  product?: Product | null;
  onClose: () => void;
  onAdd?: (p: Product) => void;
}

const ProductModal: React.FC<Props> = ({ open, product, onClose, onAdd }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !product) return null;

  return (
    <S.Overlay onClick={onClose} role="dialog" aria-modal="true">
      <S.Dialog onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <S.Close onClick={onClose} aria-label="Fechar">×</S.Close>
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
              onClick={() => onAdd && onAdd(product)}
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
