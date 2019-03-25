import { css } from "@pulsar-ui/core";
const Montserrat300Italic = require("./fonts/montserrat-v12-latin-300italic.woff");
const Montserrat300 = require("./fonts/montserrat-v12-latin-300.woff");
const Montserrat400 = require("./fonts/montserrat-v12-latin-regular.woff");
const Montserrat400Italic = require("./fonts/montserrat-v12-latin-italic.woff");
const Montserrat800 = require("./fonts/montserrat-v12-latin-800.woff");
const Montserrat800Italic = require("./fonts/montserrat-v12-latin-800italic.woff");

const global = css`
  body {
    font-family: "Montserrat";
  }
  @font-face {
    font-family: "Montserrat";
    font-style: italic;
    font-weight: 300;
    src: url(${Montserrat300Italic});
  }
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    src: url(${Montserrat300});
  }
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    src: url(${Montserrat400});
  }
  @font-face {
    font-family: "Montserrat";
    font-style: italic;
    font-weight: 400;
    src: url(${Montserrat400Italic});
  }
  @font-face {
    font-family: "Montserrat";
    font-style: italic;
    font-weight: 800;
    src: url(${Montserrat800Italic});
  }
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    src: url(${Montserrat800});
  }
`;

export default global;
