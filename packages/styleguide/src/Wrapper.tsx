import React from "react";
import { ThemeProvider, Global } from "@pulsar-ui/core/styled";
import Theme from "@pulsar-ui/theme-default";

const Wrapper = (props: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global styles={Theme.Global} />
      {props.children}
    </ThemeProvider>
  );
};

export default Wrapper;
