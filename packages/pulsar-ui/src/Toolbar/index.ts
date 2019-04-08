import Toolbar from "./Toolbar";
import ToolbarContent from "./ToolbarContent";
import ToolbarItem from "./ToolbarItem";

export * from "./Toolbar";
export * from "./ToolbarContent";
export * from "./ToolbarItem";

export default Object.assign(Toolbar, {
  Content: ToolbarContent,
  Item: ToolbarItem
});
