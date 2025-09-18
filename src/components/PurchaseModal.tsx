import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Product = {
  id: number;
  name: string;
  desc: string;
  price: string;
  image: string;
};

interface Props {
  product: Product | null;
  onClose: () => void;
  onConfirm: (p: Product, qty: number) => void;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 10, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  padding: 24px;
`;

const Box = styled.div`
  width: 100%;
  max-width: 560px;
  background: #fff;
  color: #222;
  border-radius: 8px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.32);
  padding: 18px;
  position: relative;
  display: flex;
  gap: 16px;
`;

const Thumb = styled.img`
  width: 160px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1rem;
`;

const Desc = styled.p`
  margin: 0 0 12px 0;
  color: var(--muted);
  line-height: 1.3;
  font-size: 0.95rem;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Qty = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--card-border);
  border-radius: 6px;
  overflow: hidden;
`;

const QtyBtn = styled.button`
  padding: 8px 10px;
  background: transparent;
  border: none;
  font-weight: 700;
`;

const QtyValue = styled.div`
  padding: 8px 12px;
  min-width: 44px;
  text-align: center;
`;

const Price = styled.div`
  margin-left: auto;
  font-weight: 700;
  color: #b94141;
`;

const Confirm = styled.button`
  margin-top: 12px;
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  font-weight: 700;
`;

const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
`;

function parsePrice(price: string) {
  if (!price) return 0;
  const num = String(price).replace("R$", "").replace(/\s/g, "").replace(".", "").replace(",", ".");
  const n = parseFloat(num);
  return Number.isFinite(n) ? n : 0;
}

export const PurchaseModal: React.FC<Props> = ({ product, onClose, onConfirm }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  useEffect(() => {
    setQty(1);
  }, [product]);

  if (!product) return null;

  const priceNum = parsePrice(product.price);
  const total = (priceNum * qty).toFixed(2).replace(".", ",");

  const handleOverlay = (e: React.MouseEvent) => {
    if (e.target === ref.current) onClose();
  };

  return (
    <Overlay ref={ref} onClick={handleOverlay} role="presentation">
      <Box role="dialog" aria-modal="true" aria-labelledby="purchase-title">
        <Close aria-label="Fechar" onClick={onClose}>✕</Close>
        <Thumb src={product.image} alt={product.name} />
        <Body>
          <Title id="purchase-title">{product.name}</Title>
          <Desc>{product.desc}</Desc>

          <Row>
            <Qty>
              <QtyBtn aria-label="Diminuir quantidade" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</QtyBtn>
              <QtyValue aria-live="polite">{qty}</QtyValue>
              <QtyBtn aria-label="Aumentar quantidade" onClick={() => setQty((q) => q + 1)}>+</QtyBtn>
            </Qty>

            <Price>R$ {total}</Price>
          </Row>

          <Confirm
            onClick={() => {
              onConfirm(product, qty);
            }}
            aria-label={`Confirmar compra de ${product.name}`}
          >
            Confirmar compra
          </Confirm>
        </Body>
      </Box>
    </Overlay>
  );
};