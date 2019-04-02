import React from "react";
import { ThemeProvider } from "@pulsar-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from "@pulsar-ui/theme-default";
import Home from "./pages/Home";
import GlobalStyles from "./GlobalStyles";
import { Provider } from "./containers/ThemeContext";

interface Sections {
  slug: string;
}

interface StyleGudistProps {
  allSections: Sections[];
}

interface initialState {
  styleguidist: {
    sections: Sections[];
  };
}

const initialState = ({
  allSections,
  ...props
}: StyleGudistProps): initialState => ({
  styleguidist: {
    ...props,
    sections: allSections
  }
});

const App = (props: StyleGudistProps) => {
  return (
    <Provider value={initialState(props)}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/components" component={Components} /> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
