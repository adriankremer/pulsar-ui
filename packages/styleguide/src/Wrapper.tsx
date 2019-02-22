import React from "react";
import { ThemeProvider } from "namics-ui";
import Theme from "namics-ui-theme-default";

const Wrapper = (props: any) => {
  return <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>;
};

export default Wrapper;
