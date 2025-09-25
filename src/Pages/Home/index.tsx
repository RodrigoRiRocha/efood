import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero';
import Listagem from '../../components/Listagem';
import Footer from '../../components/Footer';

const Container = styled.div`
  background-color: var(--cor-fundo-pagina);
  min-height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <Listagem />
      <Footer />
    </Container>
  );
};

export default Home;
