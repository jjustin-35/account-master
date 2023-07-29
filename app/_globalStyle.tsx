'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, iframe,
  h1, h2, h3, h4, h5, h6, p, a, img, ol, ul, li, fieldset, form, label, legend,
  article, aside, details, footer, header, menu, nav, output, section, summary,
  time, mark, audio, video, button, input, textarea {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
  }
  html {
      overflow: -moz-hidden-unscrollable;
      height: 100%;
      scroll-behavior: smooth;
  }

  body::-webkit-scrollbar {
      display: none;
  }

  body {
      -ms-overflow-style: none;
      height: 100%;
      overflow: auto;
  }

  *:lang(en) {
      font-family: 'Clear Sans', sans-serif;
  }
  *:lang(zh-tw) {
      font-family: 'Noto Sans TC', sans-serif;
  }
  article, aside, details, footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1.2;
  }
  ol, ul {
      list-style: none;
  }
  a{
      color: black;
      text-decoration: none;
  }
`;

export default GlobalStyle;
