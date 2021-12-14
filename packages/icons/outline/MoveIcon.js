const React = require("react");

function MoveIcon(props) {
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
    d: "m9 3.748 3-3 3 3M15 20.248l-3 3-3-3M12 .748v22.5M3.75 14.998l-3-3 3-3M20.25 8.998l3 3-3 3M.75 11.998h22.5"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
}

module.exports = MoveIcon;