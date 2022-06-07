import * as d3 from "d3";

export const createSVGElem = (elementId, width, height, margin, radiusTolerance) => {
  var extSvg = d3
    .select("#" + elementId)
    .append("svg")
    .attr("viewBox", [
      (-width + parseInt(radiusTolerance) / 2) / 2,
      (-height + parseInt(radiusTolerance) / 2) / 2,
      width - parseInt(radiusTolerance) / 2 + margin.left + margin.right,
      height - parseInt(radiusTolerance) / 2 + margin.top + margin.bottom,
    ]);

  var svg = extSvg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .attr("class", "network")
    .attr("id", "g_" + elementId);

  return svg;
};