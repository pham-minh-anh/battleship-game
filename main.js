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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: rgb(206, 192, 233);\n  font-family: system-ui, sans-serif;\n  color: #1d2b36;\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n\nh1 {\n  margin: 0 0 8px;\n  font-size: 2.5rem;\n  color: #0b3d5c;\n}\n\nh2 {\n  margin: 16px 0 4px;\n  font-size: 1.25rem;\n  color: #0b3d5c;\n}\n\np {\n  margin: 4px 0;\n  color: #3b4a56;\n}\n\nform {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 12px;\n  margin: 16px 0 8px;\n}\n\ninput {\n  padding: 5px 10px;\n  border: 1px solid #9c8fc0;\n  border-radius: 6px;\n  font-size: 1rem;\n  background: #fff;\n}\n\ninput:focus {\n  outline: 2px solid #4a90b8;\n  border-color: transparent;\n}\n\nbutton {\n  padding: 5px 20px;\n  border: none;\n  border-radius: 6px;\n  background: #0b3d5c;\n  color: #fff;\n  font-size: 0.95rem;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #145a85;\n}\n\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px;\n}\n\ndiv.board_0,\ndiv.board_1 {\n  display: inline-block;\n  padding: 12px;\n  margin: 8px 16px 24px 0;\n  background: #0b3d5c;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n}\n\n.row {\n  display: flex;\n  gap: 3px;\n  margin-bottom: 3px;\n}\n\n.row:last-child {\n  margin-bottom: 0;\n}\n\n.cell {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  background: #4a90b8;\n  color: transparent;\n  font-family: sans-serif;\n  font-size: 14px;\n}\n\n.cell.ship {\n  background: #5f6b73;\n}\n.cell.missed {\n  background: #d9e6ee;\n}\n.cell.hit {\n  background: #e04848;\n}\n.cell.missed::after {\n  color: #4a6a80;\n}\n.cell.hit::after {\n  content: \"✕\";\n  font-size: 40px;\n  color: #fff;\n}\n\n.inactive {\n  opacity: 0.8;\n  pointer-events: none;\n  transition:\n    filter 0.2s,\n    opacity 0.2s;\n}\n\ndialog {\n  border: none;\n  border-radius: 10px;\n  padding: 24px 32px;\n  text-align: center;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n\ndialog::backdrop {\n  background: rgba(0, 0, 0, 0.4);\n}\n\ndialog button {\n  display: block;\n  margin: 16px auto 0;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/Coord.js"
/*!**********************!*\
  !*** ./src/Coord.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Coord: () => (/* binding */ Coord)\n/* harmony export */ });\nclass Coord {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  static random(size) {\n    if (size === 0) {\n      return null;\n    }\n    let x = Math.floor(Math.random() * size);\n    let y = Math.floor(Math.random() * size);\n    return new Coord(x, y);\n  }\n\n  isValid(size) {\n    if (this.x < 0 || this.x >= 10) {\n      return false;\n    } else if (this.y < 0 || this.y >= 10) {\n      return false;\n    }\n    return true;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/Coord.js?\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/game.js */ \"./src/game.js\");\n/* harmony import */ var _src_gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameboard.js */ \"./src/gameboard.js\");\n\n\n\nconst container = document.querySelector(\"div.container\");\nconst board_0 = document.querySelector(\"div.board_0\");\nconst board_1 = document.querySelector(\"div.board_1\");\n\nfunction renderBoards() {\n  board_0.replaceChildren();\n  board_1.replaceChildren();\n  board_0.classList.remove(\"inactive\");\n  board_1.classList.remove(\"inactive\");\n  let currentTarget = (0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentTarget)();\n  let currentPlayer = (0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentPlayer)();\n  let enemyBoard = (0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.viewBoardEnemy)(currentTarget);\n  let myBoard = (0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.viewBoard)(currentPlayer);\n  (currentPlayer === 0 ? board_0 : board_1).classList.add(\"inactive\");\n  const stateClass = { 1: \"missed\", 2: \"hit\", 3: \"ship\" };\n  for (let row of myBoard) {\n    const row_div = document.createElement(\"div\");\n    row_div.classList.add(\"row\");\n    for (let cell of row) {\n      const div = document.createElement(\"div\");\n      if (stateClass[cell]) div.classList.add(stateClass[cell]);\n      div.classList.add(\"cell\");\n      row_div.appendChild(div);\n    }\n    if (currentPlayer === 0) {\n      board_0.appendChild(row_div);\n    } else {\n      board_1.appendChild(row_div);\n    }\n  }\n\n  let row_index = 0;\n  let column_index = 0;\n  for (let row of enemyBoard) {\n    const row_div = document.createElement(\"div\");\n    row_div.classList.add(\"row\");\n    for (let cell of row) {\n      const div = document.createElement(\"div\");\n      if (stateClass[cell]) div.classList.add(stateClass[cell]);\n      div.classList.add(\"cell\");\n      let x_coord = column_index;\n      let y_coord = row_index;\n      div.addEventListener(\"click\", () => {\n        (0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.playOneTurn)(x_coord, y_coord);\n        renderBoards();\n        if ((0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.getWinner)() !== null) {\n          let winner = (0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.getWinner)().name;\n          renderWin(winner);\n        }\n      });\n      row_div.appendChild(div);\n      column_index++;\n    }\n    if (currentTarget === 0) {\n      board_0.appendChild(row_div);\n    } else {\n      board_1.appendChild(row_div);\n    }\n    column_index = 0;\n    row_index++;\n  }\n}\n\nfunction renderWin(winner) {\n  const dialog = document.querySelector(\"#win\");\n  dialog.textContent = `Player ${winner} wins!`;\n  const close_button = document.createElement(\"button\");\n  close_button.addEventListener(\"click\", () => dialog.close());\n  close_button.textContent = \"Close\";\n  dialog.appendChild(close_button);\n  dialog.showModal();\n}\nlet player1 = null;\nlet player2 = null;\nconst form = document.querySelector(\"form\");\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  player1 = form.player1_name.value;\n  form.player1_name.value = \"\";\n  player2 = form.player2_name.value;\n  form.player2_name.value = \"\";\n  let header_0 = document.querySelector(\"h2.board_0\");\n  let header_1 = document.querySelector(\"h2.board_1\");\n  header_0.textContent = player1;\n  header_1.textContent = player2;\n  (0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.reset)(player1, player2);\n  (0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.placeRandomShip)();\n  renderBoards();\n});\n\nconst reset_button = document.querySelector(\"#reset\");\nreset_button.addEventListener(\"click\", () => {\n  if (player1 === null) {\n    return;\n  }\n  ;(0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.reset)(player1, player2);\n  renderBoards();\n});\nconst ship_button = document.querySelector(\"#ship\");\nship_button.addEventListener(\"click\", () => {\n  if (player1 === null) {\n    return;\n  }\n  ;(0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.placeRandomShip)();\n  renderBoards();\n});\n(0,_src_game_js__WEBPACK_IMPORTED_MODULE_0__.reset)(\"Player 1\", \"Player 2\");\nrenderBoards();\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?\n}");

/***/ },

/***/ "./src/game.js"
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Status: () => (/* binding */ Status),\n/* harmony export */   getCurrentPlayer: () => (/* binding */ getCurrentPlayer),\n/* harmony export */   getCurrentTarget: () => (/* binding */ getCurrentTarget),\n/* harmony export */   getWinner: () => (/* binding */ getWinner),\n/* harmony export */   placeRandomShip: () => (/* binding */ placeRandomShip),\n/* harmony export */   playOneTurn: () => (/* binding */ playOneTurn),\n/* harmony export */   reset: () => (/* binding */ reset),\n/* harmony export */   viewBoard: () => (/* binding */ viewBoard),\n/* harmony export */   viewBoardEnemy: () => (/* binding */ viewBoardEnemy)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _Coord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Coord.js */ \"./src/Coord.js\");\n\n\n\n\nlet players = [];\nlet current_target = 1;\nlet game_over = false;\nlet winner = null;\nlet ship_placed = false;\n\nfunction reset(player1, player2) {\n  current_target = 1;\n  game_over = false;\n  winner = null;\n  ship_placed = false;\n  players[0] = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(player1);\n  players[1] = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(player2);\n}\n\nfunction placeRandomShip() {\n  if (ship_placed == true) {\n    return;\n  }\n  ship_placed = true;\n  players[0].gameboard.placeShipRand([3, 2, 1, 1]);\n  players[1].gameboard.placeShipRand([3, 2, 1, 1]);\n}\n\nconst Status = Object.freeze({\n  GAMEOVER: \"PENDING\",\n  INVALID: \"SUCCESS\",\n  VALID: \"FAILED\",\n});\n\nfunction playOneTurn(x, y) {\n  if (ship_placed == false) {\n    return;\n  }\n  let coord = new _Coord_js__WEBPACK_IMPORTED_MODULE_2__.Coord(x, y);\n  if (game_over) {\n    return Status.GAMEOVER;\n  }\n  let attack = players[current_target].gameboard.receiveAttack(coord);\n  if (attack === null) {\n    return Status.INVALID;\n  }\n  if (!checkWin()) {\n    current_target = (current_target + 1) % 2;\n  }\n  return Status.VALID;\n}\n\nfunction checkWin() {\n  if (players[current_target].gameboard.allSunk()) {\n    game_over = true;\n    winner = players[(current_target + 1) % 2];\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction getWinner() {\n  return winner;\n}\n\nfunction viewBoard(playerIndex) {\n  let board = [];\n  for (let i = 0; i < players[0].gameboard.size; i++) {\n    board[i] = [];\n    for (let j = 0; j < players[0].gameboard.size; j++) {\n      board[i][j] = players[playerIndex].gameboard.readCell(new _Coord_js__WEBPACK_IMPORTED_MODULE_2__.Coord(j, i));\n    }\n  }\n  return board;\n}\n\nfunction viewBoardEnemy(enemyIndex) {\n  let board = [];\n  for (let i = 0; i < players[0].gameboard.size; i++) {\n    board[i] = [];\n    for (let j = 0; j < players[0].gameboard.size; j++) {\n      let cell = players[enemyIndex].gameboard.readCell(new _Coord_js__WEBPACK_IMPORTED_MODULE_2__.Coord(j, i));\n      if (cell === _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.SHIP) {\n        cell = _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.EMTY;\n      }\n      board[i][j] = cell;\n    }\n  }\n  return board;\n}\n\nfunction getCurrentTarget() {\n  return current_target;\n}\n\nfunction getCurrentPlayer() {\n  return current_target === 0 ? 1 : 0;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/game.js?\n}");

/***/ },

/***/ "./src/gameboard.js"
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EMTY: () => (/* binding */ EMTY),\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   HIT: () => (/* binding */ HIT),\n/* harmony export */   MISSED: () => (/* binding */ MISSED),\n/* harmony export */   SHIP: () => (/* binding */ SHIP)\n/* harmony export */ });\n/* harmony import */ var _src_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ship.js */ \"./src/ship.js\");\n/* harmony import */ var _src_Coord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Coord.js */ \"./src/Coord.js\");\n\n\n\nconst EMTY = 0;\nconst MISSED = 1;\nconst HIT = 2;\nconst SHIP = 3;\n\nclass Gameboard {\n  constructor(size = 10) {\n    this.size = size;\n    for (let i = 0; i < size; i++) {\n      this.#board[i] = [];\n      for (let j = 0; j < size; j++) {\n        this.#board[i][j] = EMTY;\n      }\n    }\n  }\n  #board = [];\n  #ships = [];\n\n  readCell(coord) {\n    if (!coord.isValid(this.size)) {\n      return null;\n    } else if (\n      this.#board[coord.y][coord.x] == EMTY ||\n      this.#board[coord.y][coord.x] == HIT ||\n      this.#board[coord.y][coord.x] == MISSED\n    ) {\n      return this.#board[coord.y][coord.x];\n    } else {\n      return SHIP;\n    }\n  }\n\n  hitableCellCount() {\n    let count = 0;\n    for (let i = 0; i < this.size; i++) {\n      for (let j = 0; j < this.size; j++) {\n        if (!(\n          this.readCell(new _src_Coord_js__WEBPACK_IMPORTED_MODULE_1__.Coord(i, j)) == HIT ||\n          this.readCell(new _src_Coord_js__WEBPACK_IMPORTED_MODULE_1__.Coord(i, j)) == MISSED\n        )) {\n          count++;\n        }\n      }\n    }\n    return count;\n  }\n\n  checkShipAvail(length, startCoord, direction) {\n    if (length <= 0 || length >= 10) {\n      return null;\n    } else if (!startCoord.isValid(this.size)) {\n      return null;\n    }\n\n    const ship = new _src_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\n\n    if (direction === \"vertical\") {\n      // Check if each cell is emty\n      for (let i = 0; i < length; i++) {\n        let coord = new _src_Coord_js__WEBPACK_IMPORTED_MODULE_1__.Coord(startCoord.x, startCoord.y + i);\n        let cell = this.readCell(coord);\n        if (cell === null || cell !== EMTY) {\n          return null;\n        }\n      }\n      for (let i = 0; i < length; i++) {\n        this.#board[startCoord.y + i][startCoord.x] = ship;\n      }\n    } else if (direction === \"horizontal\") {\n      // Check if each cell is emty\n      for (let i = 0; i < length; i++) {\n        let coord = new _src_Coord_js__WEBPACK_IMPORTED_MODULE_1__.Coord(startCoord.x + i, startCoord.y);\n        let cell = this.readCell(coord);\n        if (cell === null || cell !== EMTY) {\n          return null;\n        }\n      }\n      for (let i = 0; i < length; i++) {\n        this.#board[startCoord.y][startCoord.x + i] = ship;\n      }\n    } else {\n      return null;\n    }\n    return ship;\n  }\n\n  placeShip(length, startCoord, direction) {\n    let ship = this.checkShipAvail(length, startCoord, direction);\n    if (ship !== null) {\n      this.#ships.push(ship);\n    }\n    return ship;\n  }\n\n  placeShipRand(lengths) {\n    let ship = null;\n    let attempt = 0;\n    let ships = [];\n    let coords = [];\n    let coord;\n    const directions = [\"vertical\", \"horizontal\"];\n    for (let len of lengths) {\n      while (ship === null) {\n        coord = _src_Coord_js__WEBPACK_IMPORTED_MODULE_1__.Coord.random(this.size);\n\n        ship = this.checkShipAvail(\n          len,\n          coord,\n          directions[Math.floor(Math.random() * 2)],\n        );\n        attempt++;\n        if (attempt >= 100) {\n          return -1;\n        }\n      }\n      ships.push(ship);\n      coords.push(coord);\n      ship = null;\n      attempt = 0;\n    }\n\n    for (ship of ships) {\n      this.#ships.push(ship);\n    }\n  }\n\n  receiveAttack(coord) {\n    let cell = this.readCell(coord);\n    if (cell === null || cell === MISSED || cell === HIT) {\n      return null;\n    } else if (cell === EMTY) {\n      this.#board[coord.y][coord.x] = MISSED;\n      return false;\n    } else {\n      this.#board[coord.y][coord.x].hit();\n      this.#board[coord.y][coord.x] = HIT;\n      return true;\n    }\n  }\n\n  allSunk() {\n    for (let ship of this.#ships) {\n      if (!ship.isSunk()) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/gameboard.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _Coord_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Coord.js */ \"./src/Coord.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/player.js"
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Coord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coord.js */ \"./src/Coord.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n  }\n\n  gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\n\n  static randomAttack(player) {\n    // Generate a random hitable coord\n    let coord;\n    while (true) {\n      coord = _Coord_js__WEBPACK_IMPORTED_MODULE_0__.Coord.random(player.gameboard.size);\n      if (!(\n        player.gameboard.readCell(coord) == _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.HIT ||\n        player.gameboard.readCell(coord) == _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.MISSED\n      )) {\n        break;\n      }\n      if (player.gameboard.hitableCellCount() === 0) {\n        return null;\n      }\n    }\n    // hit the coord\n    let status = player.gameboard.receiveAttack(coord);\n    return coord;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/player.js?\n}");

/***/ },

/***/ "./src/ship.js"
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n  }\n  #hitNum = 0;\n\n  hit() {\n    if (this.#hitNum < this.length) {\n      this.#hitNum++;\n    }\n    return this.#hitNum;\n  }\n\n  isSunk() {\n    return this.#hitNum >= this.length;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/ship.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;