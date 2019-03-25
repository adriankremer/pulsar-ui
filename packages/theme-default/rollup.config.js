const createConfig = require("../../rollup.config");
const pkg = require("./package.json");
const copy = require("rollup-plugin-copy-assets");

const copyPlugin = copy({
  assets: ["./src/fonts"]
});
export default [
  createConfig({
    pkg,
    input: "src/index.ts",
    plugins: [copyPlugin]
  }),
  createConfig({ pkg, input: "src/index.ts", umd: true, plugins: [copyPlugin] })
];
