import * as React from "react";
import { SystemContext } from "./SystemContext";

export function useToken(token: string) {
  React.useDebugValue(token);
  const context = React.useContext(SystemContext);
  return context[token];
}
