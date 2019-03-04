import React from "react";
import { ThemeProvider } from "pulsar-ui";
import Theme from "pulsar-ui-theme-default";

const Wrapper = (props: any) => {
  return <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>;
};

export default Wrapper;
