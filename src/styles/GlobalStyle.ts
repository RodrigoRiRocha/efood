import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

  :root {
    --cor-primaria: #E66767;
    --cor-fundo-card: #fff;
    --cor-titulo-card: #E66767;
    --cor-tag: #E66767;
    --cor-tag-texto: #fff;
    --cor-nota: #ffb800;
    --cor-descricao: #333;
    --cor-botao: #E66767;
    --cor-botao-texto: #fff;
    --cor-sombra: rgba(0,0,0,0.08);
    --cor-fundo-footer: #FFEBD9;
    --cor-fundo-pagina: #FFF8F2;
    --cor-accent: #E57373;
    --cor-accent-light: #E1CDB8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: var(--cor-fundo-pagina);
    color: var(--cor-descricao);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyle;