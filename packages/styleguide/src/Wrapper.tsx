import React from "react";
import { ThemeProvider, Global } from "@pulsar-ui/core/styled";
import Theme from "@pulsar-ui/theme-default";
import GlobalStyles from "./GlobalStyles";
const Wrapper = (props: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyles} />
      {props.children}
    </ThemeProvider>
  );
};

export default Wrapper;
