import * as React from "react";
import { useToken } from "./useToken";

export function useOptions(
  name: string,
  options: Record<string, any> = {},
  htmlProps: React.HTMLAttributes<any> & React.RefAttributes<any> = {}
): React.HTMLAttributes<any> & React.RefAttributes<any> {
  const hookName = `${name}Options`;
  React.useDebugValue(hookName);
  const useHook = useToken(hookName);
  if (useHook) {
    return { ...options, ...useHook(options, htmlProps) };
  }
  return htmlProps;
}
