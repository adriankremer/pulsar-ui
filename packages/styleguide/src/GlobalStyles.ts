import { css } from "@pulsar-ui/core";
import Montserrat300Italic from "./fonts/montserrat-v12-latin-300italic.woff";
import Montserrat300 from "./fonts/montserrat-v12-latin-300.woff";
import Montserrat400 from "./fonts/montserrat-v12-latin-regular.woff";
import Montserrat400Italic from "./fonts/montserrat-v12-latin-italic.woff";
import Montserrat800 from "./fonts/montserrat-v12-latin-800.woff";
import Montserrat800Italic from "./fonts/montserrat-v12-latin-800italic.woff";

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
