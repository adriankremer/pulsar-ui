import React from "react";
import { SystemContext, SystemContextProps } from "./SystemContext";

type ProviderProps = {
  system: SystemContextProps;
  children: React.ReactNode;
};

export const Provider = ({ system, children }: ProviderProps) => {
  return (
    <SystemContext.Provider value={system}>{children}</SystemContext.Provider>
  );
};
