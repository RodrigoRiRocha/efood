import styled from 'styled-components'

export const Container = styled.footer`
  background: var(--cor-fundo-footer); 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 24px 0;
`

export const Logo = styled.img`
  width: 160px;
  margin-bottom: 32px;
  cursor: pointer;
`

export const Social = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  cursor: pointer;
`

export const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 80px;

`

export const Texto = styled.p`
  color: var(--cor-primaria);
  font-size: 14px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 40px;

`