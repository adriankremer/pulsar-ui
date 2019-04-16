import React from "react";
import color from "color";

export function darken(paletteColor?: string, ratio?: number) {
  if (!ratio) return paletteColor;
  if (!paletteColor) return undefined;
  return color(paletteColor)
    .darken(ratio)
    .hex()
    .toString();
}

export function useDarken(paletteColor?: string, ratio?: number) {
  React.useDebugValue(`${paletteColor}[${ratio}]`);
  return React.useMemo(
    () => darken(paletteColor, ratio) as string | undefined,
    [paletteColor, ratio]
  );
}
