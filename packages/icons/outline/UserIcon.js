const React = require("react");

function UserIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6.75 6a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 0 0-10.5 0v0ZM2.25 23.25a9.75 9.75 0 1 1 19.5 0"
  }));
}

module.exports = UserIcon;