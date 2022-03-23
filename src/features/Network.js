import { useD3 } from "./useD3";
import React from "react";
import * as d3 from "d3";

function NetWork({ data }) {
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove();

      const links = data.links.map((d) => Object.create(d));
      const nodes = data.nodes.map((d) => Object.create(d));
      const types = Array.from(new Set(links.map((d) => d.type)));
      const color = "#000000"; //d3.scaleOrdinal(types, d3.schemeCategory10);
      const drag = (simulation) => {
        function dragstarted(event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(event, d) {
          d.fx = event.x;
          d.fy = event.y;
        }

        function dragended(event, d) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }

        return d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
      };
      const linkArc = (d) =>
        `M${d.source.x},${d.source.y}A0,0 0 0,1 ${d.target.x},${d.target.y}`;

      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          d3.forceLink(links).id((d) => d.id)
        )
        .force("charge", d3.forceManyBody().strength(-300))
        .force("x", d3.forceX())
        .force("y", d3.forceY())
        .force(
          "collide",
          d3.forceCollide((d) => 65)
        );

      // Per-type markers, as they don't inherit styles.
      svg
        .append("defs")
        .selectAll("marker")
        .data(types)
        .join("marker")
        .attr("id", (d) => `arrow-${d}`)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 38)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", color)
        .attr("d", "M0,-5L10,0L0,5");

      const link = svg
        .append("g")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .selectAll("path")
        .data(links)
        .join("path")
        .attr("stroke", color /*(d) => color(d.type)*/)
        .attr(
          "marker-end",
          (d) => `url(${new URL(`#arrow-${d.type}`, location)})`
        );

      const node = svg
        .append("g")
        .attr("fill", "currentColor")
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .selectAll("g")
        .data(nodes)
        .join("g")
        .call(drag(simulation));

      console.log(node);

      node
        .filter((d) => d.type === "circle")
        .append("circle")
        .attr("id", "circle")
        .attr("stroke", "white")
        .attr("stroke-width", 1.5)
        .attr("r", 25)
        .attr("fill", (d) => d.color);
      node
        .filter((d) => d.type === "hexagon")
        .append("path")
        .style("fill", (d) => d.color)
        .attr(
          "d",
          `M25,0L12.5,21.650635094610966L-12.5,21.650635094610966L-25,0L-12.5,-21.650635094610966L12.5,-21.650635094610966`
        );
      node
        .append("text")
        .attr("x", 0)
        .attr("y", "0.31em")
        .attr("text-anchor", "middle")
        .text((d) => d.name)
        .clone(true)
        .lower()
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 3);

      node.on("dblclick", (e, d) => console.log(nodes[d.index]));

      simulation.on("tick", () => {
        link.attr("d", linkArc);
        node.attr("transform", (d) => `translate(${d.x},${d.y})`);
      });
    },
    [data]
  );
  return (
    <svg
      ref={ref}
      viewBox="-250 -250 250 1000"
      height={500}
      width={500}
      style={{
        // height: 500,
        // width: 500,
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g id="test"></g>
    </svg>
  );
}

export default NetWork;
