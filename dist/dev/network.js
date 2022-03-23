/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/methods/controller.js":
/*!***********************************!*\
  !*** ./src/methods/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\"$scope\", \"$element\", function ($scope, $element) {// ..controller code here\n}]);\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/controller.js?");

/***/ }),

/***/ "./src/methods/definition.js":
/*!***********************************!*\
  !*** ./src/methods/definition.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/methods/util.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  type: \"items\",\n  component: \"accordion\",\n  items: {\n    settings: {\n      uses: \"settings\"\n    },\n    config: {\n      type: \"items\",\n      label: \"Configuration\",\n      items: {// Insert component \n      }\n    },\n    about: (0,_util__WEBPACK_IMPORTED_MODULE_0__.cpAbout)(\"extension\", \"1.0.0\")\n  }\n});\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/definition.js?");

/***/ }),

/***/ "./src/methods/index.js":
/*!******************************!*\
  !*** ./src/methods/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"controller\": () => (/* reexport safe */ _controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"definition\": () => (/* reexport safe */ _definition__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"initialProperties\": () => (/* reexport safe */ _initial_properties__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"paint\": () => (/* reexport safe */ _paint__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"resize\": () => (/* reexport safe */ _resize__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"template\": () => (/* reexport safe */ _template_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _initial_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-properties */ \"./src/methods/initial-properties.js\");\n/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ \"./src/methods/template.html\");\n/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definition */ \"./src/methods/definition.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ \"./src/methods/controller.js\");\n/* harmony import */ var _paint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paint */ \"./src/methods/paint.js\");\n/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resize */ \"./src/methods/resize.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/index.js?");

/***/ }),

/***/ "./src/methods/initial-properties.js":
/*!*******************************************!*\
  !*** ./src/methods/initial-properties.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  qHyperCubeDef: {\n    qDimensions: [],\n    qMeasures: [],\n    qInitialDataFetch: [{\n      qWidth: 1,\n      qHeight: 10000\n    }],\n    second: {\n      qHyperCubeDef: {\n        qDimensions: [],\n        qMeasures: [],\n        qInitialDataFetch: [{\n          qWidth: 10,\n          qHeight: 50\n        }]\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/initial-properties.js?");

/***/ }),

/***/ "./src/methods/paint.js":
/*!******************************!*\
  !*** ./src/methods/paint.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ paint)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/methods/style.css\");\n\n\nvar qlik = window.require('qlik');\n\nfunction paint($element, layout) {}\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/paint.js?");

/***/ }),

/***/ "./src/methods/resize.js":
/*!*******************************!*\
  !*** ./src/methods/resize.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($element, layout) {// ..resize code here\n}\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/resize.js?");

/***/ }),

/***/ "./src/methods/util.js":
/*!*****************************!*\
  !*** ./src/methods/util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cpAbout\": () => (/* binding */ cpAbout),\n/* harmony export */   \"cpArray\": () => (/* binding */ cpArray),\n/* harmony export */   \"cpDropDownNumber\": () => (/* binding */ cpDropDownNumber),\n/* harmony export */   \"cpDropDownString\": () => (/* binding */ cpDropDownString),\n/* harmony export */   \"cpMedia\": () => (/* binding */ cpMedia),\n/* harmony export */   \"cpNumber\": () => (/* binding */ cpNumber),\n/* harmony export */   \"cpSlider\": () => (/* binding */ cpSlider),\n/* harmony export */   \"cpString\": () => (/* binding */ cpString),\n/* harmony export */   \"cpSwitch\": () => (/* binding */ cpSwitch),\n/* harmony export */   \"cpText\": () => (/* binding */ cpText),\n/* harmony export */   \"cpTextArea\": () => (/* binding */ cpTextArea)\n/* harmony export */ });\n/**\r\n * @param {*} label label name\r\n * @param {*} defaultValue default Value\r\n * @param {*} expression Type of Expression (none, optional, always)\r\n * @param {*} expressionType (if it is a dimension or a measure)\r\n * @param {*} component component type (expression, textarea)\r\n * @param {*} show function that enables the component\r\n * @returns \r\n */\nfunction cpString(ref, label) {\n  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var expression = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"\";\n  var expressionType = arguments.length > 4 ? arguments[4] : undefined;\n  var component = arguments.length > 5 ? arguments[5] : undefined;\n  var show = arguments.length > 6 ? arguments[6] : undefined;\n  var newString = {\n    ref: ref,\n    label: label,\n    type: \"string\",\n    defaultValue: defaultValue,\n    expression: expression\n  };\n\n  if (expressionType) {\n    newString.expressionType = expressionType;\n  }\n\n  if (component) {\n    newString.component = component;\n  }\n\n  if (show) {\n    newString.show = show;\n  }\n\n  return newString;\n}\nfunction cpNumber(ref, label) {\n  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"integer\";\n  var expression = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"\";\n  var expressionType = arguments.length > 5 ? arguments[5] : undefined;\n  var component = arguments.length > 6 ? arguments[6] : undefined;\n  var show = arguments.length > 7 ? arguments[7] : undefined;\n  var newString = {\n    ref: ref,\n    label: label,\n    type: type,\n    defaultValue: defaultValue,\n    expression: expression\n  };\n\n  if (expressionType) {\n    newString.expressionType = expressionType;\n  }\n\n  if (component) {\n    newString.component = component;\n  }\n\n  if (show) {\n    newString.show = show;\n  }\n\n  return newString;\n}\nfunction cpText(label, show) {\n  var newString = {\n    label: label,\n    component: \"text\"\n  };\n\n  if (show) {\n    newString.show = show;\n  }\n\n  return newString;\n}\n;\nfunction cpMedia(ref, label, show) {\n  var newString = {\n    ref: ref,\n    label: label,\n    layoutRef: ref,\n    component: \"media\",\n    type: \"string\"\n  };\n\n  if (show) {\n    newString.show = show;\n  }\n\n  return newString;\n}\n;\n/**\r\n* push componente Slider\r\n*/\n\nfunction cpSlider(ref, label, min, max, step, defaultValue, show) {\n  var newString = {\n    ref: ref,\n    label: label,\n    min: min,\n    max: max,\n    step: step,\n    component: \"slider\",\n    type: \"number\",\n    defaultValue: defaultValue\n  };\n\n  if (show) {\n    newString.show = show;\n  }\n\n  return newString;\n}\n;\n/** \r\n * push componente switch\r\n */\n\nfunction cpSwitch(ref, label, labelTrue, labelFalse) {\n  var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n  var show = arguments.length > 5 ? arguments[5] : undefined;\n  var newString = {\n    ref: ref,\n    label: label,\n    component: \"switch\",\n    type: \"boolean\",\n    options: [{\n      value: true,\n      label: labelTrue\n    }, {\n      value: false,\n      label: labelFalse\n    }],\n    defaultValue: defaultValue\n  };\n\n  if (show) {\n    newString.show = show;\n  }\n\n  return newString;\n}\n/** \r\n* push componente dropdown Number\r\n*/\n\nfunction cpDropDownNumber(ref, label, options) {\n  var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var newString = {\n    ref: ref,\n    label: label,\n    component: \"dropdown\",\n    type: \"numeric\",\n    options: options,\n    defaultValue: defaultValue\n  };\n  return newString;\n}\n/** \r\n* push componente dropdown String\r\n*/\n\nfunction cpDropDownString(ref, label, options, defaultValue, show) {\n  var newString = {\n    ref: ref,\n    label: label,\n    component: \"dropdown\",\n    type: \"string\",\n    options: options\n  };\n\n  if (defaultValue) {\n    newString.defaultValue = defaultValue;\n  }\n\n  if (show) {\n    newString.show = show;\n  }\n\n  return newString;\n}\n/** \r\n* push componente Array\r\n*/\n\nfunction cpArray(ref, label, itemTitleRef, addTranslation, items) {\n  var newString = {\n    type: \"array\",\n    ref: ref,\n    label: label,\n    itemTitleRef: itemTitleRef,\n    allowAdd: true,\n    allowRemove: true,\n    allowMove: true,\n    addTranslation: addTranslation,\n    items: items\n  };\n  return newString;\n}\n/** \r\n* push componente TextArea\r\n*/\n\nfunction cpTextArea(ref, label) {\n  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var row = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;\n  var maxlength = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3000;\n  var newString = {\n    ref: ref,\n    label: label,\n    component: \"textarea\",\n    type: \"string\",\n    rows: row,\n    maxlength: maxlength,\n    defaultValue: defaultValue\n  };\n  return newString;\n}\n/** \r\n* push componente About\r\n*/\n\nfunction cpAbout(qExtTit, qExtVer) {\n  var newString = {\n    label: \"About\",\n    type: \"string\",\n    component: {\n      template: '<a href=\"https://it.nttdata.com/\" target=\"_blanck\"><svg width=\"249\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"vector-effect: non-scaling-stroke;\" stroke=\"null\">  <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->  <g stroke=\"null\">   <title stroke=\"null\">background</title>   <rect stroke=\"null\" fill=\"#070e27\" id=\"canvas_background\" height=\"122\" width=\"251\" y=\"-1\" x=\"-1\"/>   <g style=\"vector-effect: non-scaling-stroke;\" stroke=\"null\" display=\"none\" overflow=\"visible\" y=\"0\" x=\"0\" height=\"100%\" width=\"100%\" id=\"canvasGrid\">    <rect fill=\"url(#gridpattern)\" stroke-width=\"0\" y=\"0\" x=\"0\" height=\"100%\" width=\"100%\"/>   </g>  </g>  <g stroke=\"null\">   <title stroke=\"null\">Layer 1</title>   <image stroke=\"null\" xlink:href=\"data:image/png;base64,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\" id=\"svg_2\" height=\"75.50075\" width=\"156.99994\" y=\"56.50008\" x=\"12.50002\"/>   <text font-style=\"normal\" font-weight=\"bold\" stroke=\"#000\" transform=\"matrix(1.3379949604350607,0,0,1.3275012291488264,-89.30773578650027,-152.96976727684935) \" xml:space=\"preserve\" text-anchor=\"start\" font-family=\"sans-serif\" font-size=\"18\" id=\"svg_8\" y=\"139.49394\" x=\"75.94225\" stroke-width=\"0\" fill=\"#ffffff\">{{qExtTit}}</text>   <text stroke=\"#000\" transform=\"matrix(0.7439698576927185,0,0,0.7805714011192322,5.672667840495706,15.360001921653748) \" xml:space=\"preserve\" text-anchor=\"start\" font-family=\"sans-serif\" font-size=\"14\" id=\"svg_9\" y=\"58.05079\" x=\"10.73781\" stroke-width=\"0\" fill=\"#ffffff\">Version: {{qExtVer}}</text>  </g> </svg></a>',\n      controller: [\"$scope\", \"$element\", function (scope, $element) {\n        scope.qExtTit = qExtTit;\n        scope.qExtVer = qExtVer;\n      }]\n    }\n  };\n  return newString;\n}\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/util.js?");

/***/ }),

/***/ "./src/network.js":
/*!************************!*\
  !*** ./src/network.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods */ \"./src/methods/index.js\");\n\nwindow.define(['qlik'], function (qlik) {\n  return {\n    initialProperties: _methods__WEBPACK_IMPORTED_MODULE_0__.initialProperties,\n    template: _methods__WEBPACK_IMPORTED_MODULE_0__.template,\n    definition: _methods__WEBPACK_IMPORTED_MODULE_0__.definition,\n    controller: _methods__WEBPACK_IMPORTED_MODULE_0__.controller,\n    paint: _methods__WEBPACK_IMPORTED_MODULE_0__.paint,\n    resize: _methods__WEBPACK_IMPORTED_MODULE_0__.resize\n  };\n});\n\n//# sourceURL=webpack://qlik-extension-fw/./src/network.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/methods/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/methods/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://qlik-extension-fw/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/methods/template.html":
/*!***********************************!*\
  !*** ./src/methods/template.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div id=\\\"root_{{layout.qInfo.qId}}\\\" style=\\\"display: flex;\\r\\njustify-content: center;\\\">qExt Template</div>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/template.html?");

/***/ }),

/***/ "./src/methods/style.css":
/*!*******************************!*\
  !*** ./src/methods/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/methods/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://qlik-extension-fw/./src/methods/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://qlik-extension-fw/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://qlik-extension-fw/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://qlik-extension-fw/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://qlik-extension-fw/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://qlik-extension-fw/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://qlik-extension-fw/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/network.js");
/******/ 	
/******/ })()
;