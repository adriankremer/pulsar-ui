const { renderToString } = require("react-dom/server");
const { renderStylesToString } = require("emotion-server");

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const bodyHtml = renderStylesToString(renderToString(bodyComponent));
  replaceBodyHTMLString(bodyHtml);
};
