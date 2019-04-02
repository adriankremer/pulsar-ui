const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const importToRequire = require("./src/utils/importToRequire");
// const template = require("./src/template");

const primitives = ["Box"];
const containers = ["Grid", "Box"];
const allGrouped = [...primitives, ...containers];

const webpackCommonConfig = {
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader", options: { cacheDirectory: true } }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        use: "file-loader"
      },
      {
        test: /\.(gif|jpe?g|png|svg|webp)$/,
        use: { loader: "url-loader", options: { limit: 10000 } }
      }
    ]
  },
  resolve: {
    alias: { "pulsar-ui": path.join(__dirname, "../pulsar-ui/src") },
    extensions: [".ts", ".tsx", ".jsx", ".js"]
  }
};

const webpackDevConfig = {
  ...webpackCommonConfig,
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    hotOnly: true,
    historyApiFallback: { index: "/" },
    inline: true,
    clientLogLevel: "error",
    stats: "errors-only"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
module.exports = {
  title: "Pulsar UI",
  pagePerSection: true,
  webpackConfig:
    process.env.NODE_ENV === "development"
      ? webpackDevConfig
      : webpackCommonConfig,
  updateDocs(docs, filePath) {
    const contents = fs.readFileSync(filePath, "utf8");
    const regex = /import ([A-Z][A-Za-z0-9]*)(, \{[^}]+\})? from "\.\.\/[A-Z][^."]*"/gm;
    const uses = (contents.match(regex) || []).map(x => x.replace(regex, "$1"));
    return {
      ...docs,
      uses
    };
  },
  updateExample(props) {
    return {
      ...props,
      content: importToRequire(props.content)
    };
  },
  logger: {
    warn: () => {}
  },
  // template,
  styleguideDir: "dist",
  context: {
    defaultTheme: "@pulsar-ui/theme-default"
  },
  styleguideComponents: {
    StyleGuide: path.join(__dirname, "src")
  },
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true
    },
    objectAssign: "Object.assign"
  },
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: "Components",
      components: `../pulsar-ui/src/!(${allGrouped.join(
        "|"
      )})/index.{js,ts,jsx,tsx}`,
      sectionDepth: 1
    },
    {
      name: "Primitives",
      components: `../pulsar-ui/src/{${primitives.join(",")}}/*.{js,ts,tsx}`,
      sectionDepth: 1
    },
    {
      name: "Containers",
      components: `../pulsar-ui/src/{${containers.join(
        ","
      )}}/index.{js,ts,tsx}`,
      sectionDepth: 1
    }
  ]
};
