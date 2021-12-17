const React = require("react");

function AddIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M.75 12h22.5M12 .75v22.5"
  }));
}

module.exports = AddIcon;