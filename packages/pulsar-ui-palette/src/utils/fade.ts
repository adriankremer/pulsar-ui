import React from "react";
import color from "color";

export function fade(paletteColor?: string, ratio?: number) {
  if (!ratio) return paletteColor;
  if (!paletteColor) return undefined;
  return color(paletteColor)
    .fade(ratio)
    .rgb()
    .toString();
}

export function useFade(paletteColor?: string, ratio?: number) {
  React.useDebugValue(`${paletteColor}[${ratio}]`);
  return React.useMemo(() => fade(paletteColor, ratio) as string | undefined, [
    paletteColor,
    ratio
  ]);
}
