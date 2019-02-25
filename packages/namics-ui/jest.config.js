const { join } = require("path");
const { ...baseConfig } = require("../../jest.config");
const pkg = require("./package.json");

module.exports = {
  ...baseConfig,
  displayName: pkg.name,
  testMatch: [join(__dirname, "src/**/*-test.{js,ts,tsx}")]
};
