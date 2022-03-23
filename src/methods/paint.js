import React from "react";
import { render } from "react-dom";
import App from "../features/App";

import "./style.css";
var qlik = window.require("qlik");

export default function paint($element, layout) {
  render(<App />, document.getElementById("root_" + layout.qInfo.qId));
}
