import React from "react";
import { useToken } from "@pulsar-ui/core";
import { palette as defaultPalette } from "../palette";

export function getPalette(palette = defaultPalette, name = "primary") {
  if (!name) return undefined;
  return palette[name];
}

export function usePalette(name?: string) {
  React.useDebugValue(name);
  const palette = useToken("palette");
  return getPalette(palette, name);
}
