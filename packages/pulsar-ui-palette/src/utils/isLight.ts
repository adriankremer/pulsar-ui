import React from "react";
import color from "color";

export function isLight(paletteColor: string) {
  return color(paletteColor).isLight();
}

export function useIsLight(paletteColor: string) {
  React.useDebugValue(paletteColor);
  return React.useMemo(() => isLight(paletteColor), [paletteColor]);
}
