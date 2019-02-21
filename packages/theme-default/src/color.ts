import { lighten, darken } from "polished";

const luminanceSteps = (index: number, degree: number) => (index + 1) / degree;

const createColorScale = (color: string, steps: number, degree: number) => {
  return [
    ...Array(Math.floor(steps / 2))
      .fill("")
      .map(index => lighten(luminanceSteps(index, degree), color))
      .reverse(),
    color,
    ...Array(Math.floor(steps / 2))
      .fill("")
      .map(index => darken(luminanceSteps(index, degree), color))
  ];
};
const createColorObject = (color: string, steps: number = 9) => {
  const colorScale = createColorScale(color, steps, 15);
  const colors: { [key: number]: string } = {};
  for (let i = 0; i < colorScale.length; i = i + 1) {
    colors[(i + 1) * 100] = colorScale[i];
  }
  return colors;
};

const colors = {
  main: createColorObject("#D60000")
};

export default colors;
