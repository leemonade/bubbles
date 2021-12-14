const React = require("react");

function AttachedIcon(props) {
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
    d: "m7.618 15.345 8.666-8.666a2.04 2.04 0 1 1 2.883 2.883L7.461 21.305a4.078 4.078 0 0 1-5.767-5.768L13.928 3.305a5.606 5.606 0 0 1 7.929 7.928L13.192 19.9"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
}

module.exports = AttachedIcon;