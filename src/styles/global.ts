import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --bg-page: #f6f3f2;
    --panel-bg: #fff;
    --accent: #e66767;
    --muted: #6b6b6b;
    --card-border: #f2bfb9;
    --peach: #fdeeea;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body,#root {
    height: 100%;
  }

  body {
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: var(--bg-page);
    color: #222;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main { display: block; }

  img { max-width: 100%; height: auto; display: block; }

  a { color: inherit; text-decoration: none; }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  /* small helper for visually hidden labels */
  .sr-only {
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
`;
