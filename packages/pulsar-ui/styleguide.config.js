const {
  webpackConfig,
  logger,
  compilerConfig,
  skipComponentsWithoutExample,
  updateExample
} = require("@pulsar-ui/styleguide/styleguide.config");

module.exports = {
  title: "Dev Styleguide",
  serverPort: 6061,
  pagePerSection: true,
  components: "src/[A-Z]*/*.{js,ts,jsx,tsx}",
  webpackConfig,
  skipComponentsWithoutExample,
  logger,
  compilerConfig,
  updateExample
};
