import styled from 'styled-components'

export const Container = styled.footer`
  background: var(--cor-fundo-footer);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  @media (max-width: 480px) {
    padding: 24px 0;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 32.5px;
  cursor: pointer;
`

export const Social = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const Texto = styled.p`
  color: var(--cor-primaria);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 11.72px;
  text-align: center;
  max-width: 480px;
  margin: 0;
  padding: 0 24px;
  
  @media (max-width: 480px) {
    padding: 0 16px;
  }
`