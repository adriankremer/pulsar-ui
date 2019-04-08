import React from "react";
import { css, Global } from "@pulsar-ui/core";
import Comfortaa from "./fonts/Comfortaa.ttf";

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: "Comfortaa";
      }
      @font-face {
        font-family: "Montserrat";
        src: url(${Comfortaa});
      }
    `}
  />
);

export default GlobalStyles;
