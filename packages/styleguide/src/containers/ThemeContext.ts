import { createContext } from "react";

const ThemeContext = createContext({
  styleguidist: {
    sections: [
      {
        slug: ""
      }
    ]
  }
});

const { Provider } = ThemeContext;

export { ThemeContext, Provider };
