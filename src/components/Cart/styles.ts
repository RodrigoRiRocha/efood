import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
`;

export const Sidebar = styled.aside`
  width: 360px;
  height: 100%;
  background-color: #E66767;
  padding: 32px 8px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
  }
`;

export const CartItem = styled.div`
  background-color: #FFEBD9;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  gap: 8px;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 21.09px;
  color: #E66767;
  margin: 0 0 16px 0;
`;

export const ItemPrice = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #E66767;
  margin: 0;
`;

export const Quantity = styled.span`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #E66767;
  margin-top: 4px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding: 0;
  
  img, svg {
    width: 16px;
    height: 16px;
  }
`;

export const TotalSection = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFEBD9;
  padding: 0 8px;
`;

export const TotalLabel = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
`;

export const TotalValue = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: #FFEBD9;
  color: #E66767;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  border: none;
  padding: 4px 0;
  cursor: pointer;
  text-align: center;
  margin-bottom: 8px;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const EmptyCart = styled.div`
  color: #FFEBD9;
  text-align: center;
  padding: 40px 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 22px;
`;
