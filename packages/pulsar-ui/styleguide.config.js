const template = require("./template");
const {
  ignore,
  webpackConfig,
  logger,
  compilerConfig,
  skipComponentsWithoutExample,
  updateExample
} = require("@pulsar-ui/styleguide/styleguide.config");

module.exports = {
  title: "StyleGuide. Namics.",
  components: "src/[A-Z]*/*.{js,ts,jsx,tsx}",
  propsParser: require("react-docgen-typescript").withDefaultConfig().parse,
  ignore,
  pagePerSection: true,
  template,
  webpackConfig,
  logger,
  compilerConfig,
  skipComponentsWithoutExample,
  updateExample
};
