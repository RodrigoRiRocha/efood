import styled from "styled-components";

export const Container = styled.section<{ background: string }>`
  width: 100%;
  height: 280px;
  background-image: url(${(p) => p.background});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0 32px 0;

  @media (max-width: 768px) {
    height: 240px;
    padding: 20px 0 24px 0;
  }

  @media (max-width: 480px) {
    height: 200px;
    padding: 16px 0 20px 0;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  
  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const Category = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 32px;
  line-height: 37.5px;
  color: #FFFFFF;
  opacity: 0.5;
  
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 37.5px;
  color: #FFFFFF;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 28px;
  }
`;