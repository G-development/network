import { cpAbout, cpString, cpSwitch, cpTextArea } from "./util";

export default {
  type: "items",
  component: "accordion",
  items: {
    dimensions: {
      uses: "dimensions",
      min: 1,
      max: 1,
	  items: {
      // color: cpString("qAttributeExpressions.0.qExpression", "Color", "", "always", "string", "expression"),
      name: cpString("qAttributeExpressions.0.qExpression", "Name", "", "always", "string", "expression"),
      type: cpString("qAttributeExpressions.1.qExpression", "Type", "", "always", "string", "expression"),
      // Navigation
      navSheet: cpString("qAttributeExpressions.2.qExpression", "Sheet Navigation", "", "always", "string", "expression"),
      navSel: cpString("qAttributeExpressions.3.qExpression", "Value to select(Field;value|Field;value:value:..)", "", "always", "string", "expression"),
      navClear: cpString("qAttributeExpressions.4.qExpression", "Value to clear(Field|Field)", "", "always", "string", "expression"),
      },
    },

    link: {
      type: "items",
      label: "Links",
      items: {
        source:  cpString("second.qHyperCubeDef.qDimensions.0.qDef.qFieldDefs.0", "Source", "", "optional", "dimension"),
        target:  cpString("second.qHyperCubeDef.qDimensions.1.qDef.qFieldDefs.0", "Target", "", "optional", "dimension"),
        colorSource: cpString("second.qHyperCubeDef.qMeasures.0.qDef.qDef", "Source color", "", "optional", "measure"),
        colorTarget: cpString("second.qHyperCubeDef.qMeasures.1.qDef.qDef", "Target color", "", "optional", "measure"),
      },
    },

    settings: {
      uses: "settings",
    },
    config: {
      type: "items",
      label: "Configuration",
      items: {
        // Custom text in case of no nodes 
        noNodes: cpString("network.noNodes", "No nodes found text", "", ""),
        // Text
        textColor: cpString("network.textColor", "Text color", "", ""),
        textStrokeColor: cpString("network.textStrokeColor", "Text stroke-color", "", ""),
        textStrokeWidth: cpString("network.textStrokeWidth", "Text stroke-width", "", ""),
        // Link
        linkColor: cpString("network.linkColor", "Links color", "", ""),
        linkToHexagon: cpString("network.linkToHexagon", "Link to hexagons color", "", ""),
        linkToHexDashArray: cpString("network.linkToHexDashArray", "Link to hexs dash-array", "", ""),
        // Circle radius and arrow adjust
        circleRadius: cpString("network.circleRadius", "Circle radius (default: 25)", "", ""),
        arrowAdjust: cpString("network.arrowAdjust", "Arrow adjust RefX (default: 38)", "", ""),
        // Disable navigation on Hexagons
        hexNavigates: cpSwitch("network.hexNavigates", "Hexagon navigates", "Yes", "No", true ),
        // More CSS 
				cssTextArea: cpTextArea("network.cssTextArea", "More CSS", "", 7, 1000),
      },
    },

    about: cpAbout("extension", "1.0.0"),
  },
};
