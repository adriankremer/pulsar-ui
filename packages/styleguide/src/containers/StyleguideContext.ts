import { createContext } from "react";

const StyleguideContext = createContext({
  styleguidist: {}
});

const { Provider, Consumer } = StyleguideContext;

export { Provider as StyleguideProvider, Consumer as StyleguideConsumer };
