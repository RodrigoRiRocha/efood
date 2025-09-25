import styled from "styled-components";

export const Container = styled.section<{ background: string }>`
  width: 100vw;
  height: 280px;
  background-image: url(${(p) => p.background});
  background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 32px;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`;

export const Category = styled.span`
  display: block;
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  opacity: 0.95;
  margin-bottom: 156px;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
`;