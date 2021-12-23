import * as React from "react";

function UndoIcon(props) {
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
    d: "M.75.748v7.5h7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 23.248a11.25 11.25 0 1 0-10.6-15"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
}

export default UndoIcon;