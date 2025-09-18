import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface Product {
  id: number;
  name: string;
  desc: string;
  price: string;
  image: string;
}

interface Props {
  product: Product | null;
  onClose: () => void;
  onAdd: (p: Product) => void;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 10, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  padding: 24px;
`;

const ModalBox = styled.div`
  width: 100%;
  max-width: 760px;
  background: #f46868; /* tom rosado/avermelhado do modal */
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
  display: flex;
  gap: 18px;
  padding: 18px;
  align-items: flex-start;
  position: relative;
`;

const Thumb = styled.img`
  width: 210px;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  border: 6px solid rgba(255,255,255,0.06);
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 0 0 8px 0;
  color: #fff;
`;

const Desc = styled.p`
  font-size: 0.92rem;
  color: rgba(255,255,255,0.95);
  line-height: 1.4;
  margin: 0 0 12px 0;
`;

const FooterRow = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;

const Price = styled.div`
  font-weight: 700;
  color: #fff;
  background: rgba(0,0,0,0.06);
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.95rem;
`;

const AddBtn = styled.button`
  background: #ffffff;
  color: #e65b5b;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;

  &:hover { filter: brightness(0.98); }
`;

const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.95);
  font-size: 1.1rem;
  cursor: pointer;
`;

export const ProductModal: React.FC<Props> = ({ product, onClose, onAdd }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!product) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  if (!product) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <Overlay ref={overlayRef} onClick={handleOverlayClick} role="presentation" aria-hidden={false}>
      <ModalBox role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <Close aria-label="Fechar" onClick={onClose}>✕</Close>
        <Thumb src={product.image} alt={product.name} />
        <Body>
          <Title id="modal-title">{product.name}</Title>
          <Desc>{product.desc}</Desc>
          <FooterRow>
            <Price>{product.price}</Price>
            <AddBtn
              onClick={() => {
                onAdd(product);
                onClose();
              }}
              aria-label={`Adicionar ${product.name} ao carrinho`}
            >
              Adicionar ao carrinho
            </AddBtn>
          </FooterRow>
        </Body>
      </ModalBox>
    </Overlay>
  );
};