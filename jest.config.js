module.exports = {
  rootDir: __dirname,
  collectCoverageFrom: [
    "packages/pulsar-ui/src/**/*.{js,ts,tsx}",
    "!**/*-test.{js,ts,tsx}",
    "!packages/pulsar-ui/ts/**/*-test.{js,ts,tsx}"
  ],
  projects: ["<rootDir>/packages/*/jest.config.js"],
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "react-testing-library/cleanup-after-each",
    "raf/polyfill",
    "<rootDir>/jest.setup.js"
  ],
  snapshotSerializers: ["jest-emotion"]
};
