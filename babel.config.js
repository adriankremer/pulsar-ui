const test = process.env.NODE_ENV === "test";
const prod = process.env.NODE_ENV === "production";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: test ? "commonjs" : false,
        loose: true,
        targets: test
          ? { node: "current" }
          : {
              browsers: "defaults"
            }
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    "babel-plugin-dev-expression",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    !prod && [
      "babel-plugin-module-resolver",
      {
        alias: {
          "^pulsar-ui/core$": "pulsar-ui/src",
          "^pulsar-ui/core/(.+)": "pulsar-ui/src/\\1",
          "^pulsar-ui/core([^/]*)$": "pulsar-ui-\\1/src",
          "^pulsar-ui/core([^/]*)/(.+)": "pulsar-ui-\\1/src/\\2"
        }
      }
    ]
  ].filter(Boolean)
};
