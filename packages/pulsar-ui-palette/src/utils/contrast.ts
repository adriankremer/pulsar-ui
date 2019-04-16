import React from "react";
import { useToken } from "@pulsar-ui/core";
import { isLight } from "./isLight";
import { getPalette } from "./palette";
import { Palette } from "../types";

export function contrast(paletteColor?: string) {
  if (!paletteColor) return () => undefined;
  return (palette: Palette) => {
    if (isLight(paletteColor)) return getPalette(palette, "black");
    return getPalette(palette, "white");
  };
}

export function useContrast(paletteColor?: string) {
  React.useDebugValue(paletteColor);
  const palette = useToken("palette");
  return React.useMemo(() => contrast(paletteColor)(palette), [
    paletteColor,
    palette
  ]);
}
