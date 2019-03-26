import Grid from "./Grid";
import GridCell from "./GridCell";

export * from "./Grid";
export * from "./GridCell";

export default Object.assign(Grid, {
  Cell: GridCell
});
