import React from "react";
import { ThemeProvider } from "@pulsar-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from "@pulsar-ui/theme-default";
import Home from "./pages/Home";
import { Components } from "./pages/Components";
import GlobalStyles from "./GlobalStyles";
import { StyleguideProvider } from "./containers/StyleguideContext";

interface initialState {
  styleguidist: any;
}

const initialState = (props: any): initialState => ({
  styleguidist: {
    ...props,
    sections: props.allSections
  }
});

const App = (props: any) => {
  return (
    <StyleguideProvider value={initialState(props)}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/components" component={Components} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StyleguideProvider>
  );
};

export default App;
