const React = require("react");

function ExpandFullIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9.75 14.248-9 9M23.25 7.498V.748H16.5M.75 16.498v6.75H7.5M23.25.748l-9 9M14.25 14.248l9 9M.75 7.498V.748H7.5M23.25 16.498v6.75H16.5M.75.748l9 9"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
}

module.exports = ExpandFullIcon;