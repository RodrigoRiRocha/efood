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
  
  @media (max-width: 480px) {
    padding: 24px 8px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 18.75px;
  color: #FFEBD9;
  margin: 0 0 16px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  color: #FFEBD9;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #FFEBD9;
  border: none;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  color: #4B4B4B;
  
  &::placeholder {
    color: #4B4B4B;
  }
  
  &:focus {
    outline: 2px solid #FFFFFF;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const Button = styled.button`
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
  margin-top: 8px;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const BackButton = styled(Button)`
  background-color: transparent;
  color: #FFEBD9;
  border: 1px solid #FFEBD9;
  margin-top: 0;
`;

export const ConfirmationText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
  margin: 0 0 16px 0;
`;

export const OrderId = styled.span`
  font-weight: 700;
`;

export const ErrorMessage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #FFD700;
  margin: 4px 0 0 0;
`;
