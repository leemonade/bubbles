const React = require("react");

function HouseIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M22.272 23.247a.981.981 0 0 0 .978-.978V9.747a1.181 1.181 0 0 0-.377-.8L12 .747l-10.873 8.2c-.225.208-.36.495-.377.8V22.27a.98.98 0 0 0 .978.978h20.544Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
}

module.exports = HouseIcon;