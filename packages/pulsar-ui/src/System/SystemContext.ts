import React from "react";
import { useCreateElement } from "../utils/useCreateElement";

export type SystemContextProps = {
  createElement?: typeof useCreateElement;
  [key: string]: any;
};

export const SystemContext = React.createContext<SystemContextProps>({});
