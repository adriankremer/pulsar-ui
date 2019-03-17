const {
  generateCSSReferences,
  generateJSReferences
} = require("mini-html-webpack-plugin");

const description =
  "Toolkit for building composable, accessible and reliable UIs with React.";

module.exports = ({ title, css, js, publicPath }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${title}</title>
        <link rel="icon" type="image/x-icon" href="/icon.png">
        <base href="/">
        <meta name="description" content="${description}">
        <meta property="og:image:type" content="image/png">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700">
        ${generateCSSReferences(css, publicPath)}
      </head>
      <body>
        <div id="rsg-root"></div>
        ${generateJSReferences(js, publicPath)}
      </body>
    </html>`;
