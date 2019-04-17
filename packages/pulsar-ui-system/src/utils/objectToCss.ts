export type CssObject = {
  [key: string]: string;
};

export const getCssValue = (obj: CssObject) =>
  Object.values(obj).map(item => ` ${item}`);
