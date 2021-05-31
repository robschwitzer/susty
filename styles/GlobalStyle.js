import { createGlobalStyle } from "styled-components";
import variables from "variables";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  em,
  strong,
  b,
  u,
  i,
  ol,
  ul,
  li,
  figure {
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    scroll-behavior: smooth;
    vertical-align: baseline;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  body {
    background: none;
    font-family: Favorit-Regular, -apple-system, BlinkMacSystemFont, Avenir Next,
      Avenir, Helvetica, sans-serif !important;
    margin: 0;
    line-height: 1;
    overscroll-behavior: none;
    touch-action: pan-y;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
  }
    
  * {
    letter-spacing: -0.02em !important;
    font-smoothing: antialiased;
    &:focus { outline: 0; }
  }
  
  @font-face {
    font-family: "Favorit-Regular";
    src: url("/static/fonts/Favorit-Regular.otf");
    font-weight: 100;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: "Favorit-Medium";
    src: url("/static/fonts/Favorit-Medium.otf");
    font-weight: bold;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: "Mercury-Bold";
    src: url("/static/fonts/MercuryDisplay-Bold.otf");
    font-weight: bold;
    font-display: block;
    font-style: normal;
  }
`;