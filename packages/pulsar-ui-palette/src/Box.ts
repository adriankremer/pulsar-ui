import { BoxOptions, BoxProps } from "@pulsar-ui/core";
import { usePalette } from "./utils/palette";
import { useContrast } from "./utils/contrast";
export type PaletteBoxProps = BoxOptions & {
  system: {
    palette?: string;
  };
};

export function useBoxProps(
  { system = {} }: PaletteBoxProps,
  htmlProps?: BoxProps
) {
  const color = usePalette(system.palette);
  const contrast = useContrast(color);
  const style = {
    backgroundColor: color,
    color: contrast
  };

  return {
    ...htmlProps,
    style: {
      ...style
    }
  };
}
