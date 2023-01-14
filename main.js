/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./app/images/brown-wooden-flooring.jpg */ "./src/app/images/brown-wooden-flooring.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./app/images/restaurant-bg.jpg */ "./src/app/images/restaurant-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n/* eslint-disable */\n/* prettier-ignore */\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/* @font-face{\n    font-family: 'Rowdies', cursive;\nfont-family: 'Space Mono', monospace;\n} */\n\n* {\n    text-decoration: none;\n    font-family: 'Rowdies', cursive;\n}\n\nheader {\n    display: grid;\n    grid-template-areas:\n        \"logo socials\"\n        \"nav nav\";\n    padding: 2rem;\n    z-index: 1;\n    border-bottom: solid 0.25rem black;\n    box-shadow: 0px 0px 15px 5px black;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n.logo {\n    grid-area: logo;\n}\n\n.socials {\n    grid-area: socials;\n}\n\n.nav,\nfooter {\n    grid-area: nav;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10rem;\n    height: 40px;\n}\n\n.button {\n    --background: #efefef;\n    --border-color: linear-gradient(to bottom right, red, black);\n    --border-width: 0.25em;\n    --edge-size: 0.5em;\n\n    position: relative;\n    isolation: isolate;\n    cursor: pointer;\n\n    display: inline-grid;\n    padding: 0.5em 1.5em;\n    border: 0px;\n    background: var(--background);\n    font-family: 'Rowdies', cursive;\n    clip-path: polygon(0% var(--edge-size),\n            /* top left 1 */\n            var(--edge-size) 0%,\n            /* top-left 2 */\n            100% 0,\n            /* top right */\n            100% calc(100% - var(--edge-size)),\n            /* bottom right 1*/\n            calc(100% - var(--edge-size)) 100%,\n            /* bottom right 2*/\n            0 100%);\n    /* bottom left*/\n}\n\n.button::before,\n.button::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n}\n\n.button::before {\n    background: var(--border-color);\n    z-index: -2;\n}\n\n.button::after {\n    background-color: var(--background);\n    z-index: -1;\n    clip-path: polygon(var(--border-width) calc(var(--edge-size) + var(--border-width) * 0.5),\n            calc(var(--edge-size) + var(--border-width) * 0.5) var(--border-width),\n            calc(100% - var(--border-width)) var(--border-width),\n            calc(100% - var(--border-width)) calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),\n            calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width)),\n            calc(var(--border-width)) calc(100% - var(--border-width)));\n    transition: 250ms;\n}\n\n.button:hover {\n    color: #efefef;\n}\n\n.button:where(:hover, :focus)::after {\n    clip-path: polygon(calc(100% - var(--border-width)) calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),\n            calc(100% - var(--border-width)) var(--border-width),\n            calc(100% - var(--border-width)) var(--border-width),\n            calc(100% - var(--border-width)) calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),\n            calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width)),\n            calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width)));\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    font-family: 'Rowdies', cursive;\n    font-weight: 300;\n}\n\n.content-bg {\n    /* background: url(./app/images/brown-wooden-flooring.jpg); */\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n.container {\n    background-color: rgba(0, 0, 0, 0.55);\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 5rem;\n}\n\n.container>:first-child {\n    margin-top: 140px;\n}\n\n.container>:last-child {\n    margin-bottom: 50px;\n}\n\n.wrapper>div {\n    padding: 3rem;\n}\n\n.wrapper>div>*,\nbutton {\n    /* font-size: 1.5rem; */\n    font-size: clamp(1rem, 0.5rem + 5vw, 2rem);\n\n}\n\n.wrapper {\n    background-color: white;\n    width: 93%;\n}\n\ndiv>img {\n    width: 70%;\n}\n\n.wrapper-border {\n    background-color: red;\n    width: clamp(300px, 50%, 700px);\n    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);\n}\n\nfooter>* {\n    display: flex;\n    justify-content: space-around;\n    height: 2rem;\n    align-items: center;\n}\n\n\n.purple {\n    background-color: darkorchid;\n}\n\n.clip {\n    clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);\n}\n\n.flex-center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sticky {\n    position: fixed;\n    top: 0;\n    width: 100%\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/contactPage.js":
/*!********************************!*\
  !*** ./src/app/contactPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/wrapInHexagon */ "./src/app/utils/wrapInHexagon.js");
/* harmony import */ var _images_contact1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/contact1.jpg */ "./src/app/images/contact1.jpg");
/* harmony import */ var _images_contact2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/contact2.jpg */ "./src/app/images/contact2.jpg");
/* harmony import */ var _images_contact3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/contact3.jpg */ "./src/app/images/contact3.jpg");





const contactPage = (parent) => {
  // Chef div
  const chefDiv = document.createElement("div");
  const chefName = document.createElement("p");
  const chefContact = document.createElement("p");
  const chefPhoto = new Image();

  chefName.textContent = "Chef: Prabhat Chaudhuri";
  chefContact.innerHTML =
    "Phone Number: 999-1231-232<br> E-mail: dominionschef@kebab.com";
  chefPhoto.src = _images_contact1_jpg__WEBPACK_IMPORTED_MODULE_1__;

  chefDiv.appendChild(chefName);
  chefDiv.appendChild(chefPhoto);
  chefDiv.appendChild(chefContact);

  const chiefDivWrapped = (0,_utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__["default"])(chefDiv);
  parent.appendChild(chiefDivWrapped);

  // Manager div
  const managerDiv = document.createElement("div");
  const managerName = document.createElement("p");
  const managerContact = document.createElement("p");
  const managerPhoto = new Image();

  managerName.textContent = "Manager: Sumit Kulkarni";
  managerContact.innerHTML =
    "Phone Number: 999-1231-233<br> E-mail: dominionsmanager@kebab.com";
  managerPhoto.src = _images_contact3_jpg__WEBPACK_IMPORTED_MODULE_3__;

  managerDiv.appendChild(managerName);
  managerDiv.appendChild(managerPhoto);
  managerDiv.appendChild(managerContact);

  const managerDivWrapped = (0,_utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__["default"])(managerDiv);
  parent.appendChild(managerDivWrapped);

  // Delivery guy div
  const deliveryGuyDiv = document.createElement("div");
  const deliveryGuyName = document.createElement("p");
  const deliveryGuyContact = document.createElement("p");
  const deliveryGuyPhoto = new Image();

  deliveryGuyName.textContent = "Delivery driver: Devadas Divan";
  deliveryGuyContact.innerHTML =
    "Phone Number: 999-1231-234<br> E-mail: dominionsdeliveryguy@kebab.com";
  deliveryGuyPhoto.src = _images_contact2_jpg__WEBPACK_IMPORTED_MODULE_2__;

  deliveryGuyDiv.appendChild(deliveryGuyName);
  deliveryGuyDiv.appendChild(deliveryGuyPhoto);
  deliveryGuyDiv.appendChild(deliveryGuyContact);

  const deliveryGuyDivWrapped = (0,_utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__["default"])(deliveryGuyDiv);
  parent.appendChild(deliveryGuyDivWrapped);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);


/***/ }),

/***/ "./src/app/homePage.js":
/*!*****************************!*\
  !*** ./src/app/homePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/wrapInHexagon */ "./src/app/utils/wrapInHexagon.js");


const homePage = (parent) => {
  // Opinion div
  const opinionDiv = document.createElement("div");
  const opinionP = document.createElement("p");
  const signatureP = document.createElement("p");

  opinionP.textContent =
    "Dominion's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  signatureP.textContent = "Son Goku";

  opinionDiv.appendChild(opinionP);
  opinionDiv.appendChild(signatureP);
  const opinionDivWrapped = (0,_utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__["default"])(opinionDiv);
  parent.appendChild(opinionDivWrapped);

  // Opening hours div
  const hoursDiv = document.createElement("div");
  const hoursHeader = document.createElement("p");
  const hoursP = document.createElement("p");

  hoursHeader.textContent = "Hours";
  hoursP.innerHTML =
    "Sunday: 8am - 8pm<br> Monday: 6am - 6pm<br> Tuesday: 6am - 6pm<br> Wednesday: 6am - 6pm<br> Thursday: 6am - 10pm<br> Friday: 6am - 10pm<br> Saturday: 8am - 10pm";

  hoursDiv.appendChild(hoursHeader);
  hoursDiv.appendChild(hoursP);
  const hoursDivWrapped = (0,_utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__["default"])(hoursDiv);
  parent.appendChild(hoursDivWrapped);

  // Location
  const locationDiv = document.createElement("div");
  const locationHeader = document.createElement("p");

  const locationP = document.createElement("p");
  locationHeader.textContent = "Location";
  locationP.textContent = "Bruchkobel 63485, Hanauerstrasse 8 Germany";
  locationDiv.appendChild(locationHeader);
  locationDiv.appendChild(locationP);
  parent.appendChild((0,_utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__["default"])(locationDiv));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);


/***/ }),

/***/ "./src/app/menuPage.js":
/*!*****************************!*\
  !*** ./src/app/menuPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/wrapInHexagon */ "./src/app/utils/wrapInHexagon.js");
/* harmony import */ var _images_kebab1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/kebab1.png */ "./src/app/images/kebab1.png");
/* harmony import */ var _images_kebab2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/kebab2.png */ "./src/app/images/kebab2.png");
/* harmony import */ var _images_kebab3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/kebab3.png */ "./src/app/images/kebab3.png");





const menuPage = (parent) => {
  // kebab1
  const kebab1Div = document.createElement("div");
  const kebab1Name = document.createElement("p");
  const kebab1Photo = new Image();
  const kebab1Price = document.createElement("p");

  kebab1Name.textContent = "Doner Kebab";
  kebab1Photo.src = _images_kebab1_png__WEBPACK_IMPORTED_MODULE_1__;
  kebab1Price.textContent = "Price: 1$";

  kebab1Div.classList.add("menu-item");
  kebab1Div.appendChild(kebab1Name);
  kebab1Div.appendChild(kebab1Photo);
  kebab1Div.appendChild(kebab1Price);

  const kebab1DivWrapped = (0,_utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__["default"])(kebab1Div);
  parent.appendChild(kebab1DivWrapped);

  // kebab2
  const kebab2Div = document.createElement("div");
  const kebab2Name = document.createElement("p");
  const kebab2Photo = new Image();
  const kebab2Price = document.createElement("p");

  kebab2Name.textContent = "Plate Kebab";
  kebab2Photo.src = _images_kebab2_png__WEBPACK_IMPORTED_MODULE_2__;
  kebab2Price.textContent = "Price: 1$";

  kebab2Div.classList.add("menu-item");
  kebab2Div.appendChild(kebab2Name);
  kebab2Div.appendChild(kebab2Photo);
  kebab2Div.appendChild(kebab2Price);

  const kebab2DivWrapped = (0,_utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__["default"])(kebab2Div);
  parent.appendChild(kebab2DivWrapped);
  // kebab3
  const kebab3Div = document.createElement("div");
  const kebab3Name = document.createElement("p");
  const kebab3Photo = new Image();
  const kebab3Price = document.createElement("p");

  kebab3Name.textContent = "Rollo Kebab";
  kebab3Photo.src = _images_kebab3_png__WEBPACK_IMPORTED_MODULE_3__;
  kebab3Price.textContent = "Price: 1$";

  kebab3Div.classList.add("menu-item");
  kebab3Div.appendChild(kebab3Name);
  kebab3Div.appendChild(kebab3Photo);
  kebab3Div.appendChild(kebab3Price);

  const kebab3DivWrapped = (0,_utils_wrapInHexagon__WEBPACK_IMPORTED_MODULE_0__["default"])(kebab3Div);
  parent.appendChild(kebab3DivWrapped);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);


/***/ }),

/***/ "./src/app/utils/wrapInHexagon.js":
/*!****************************************!*\
  !*** ./src/app/utils/wrapInHexagon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wrapInHexagon = (child) => {
  const wrapperDivBorder = document.createElement("div");
  wrapperDivBorder.classList.add("wrapper-border");
  wrapperDivBorder.classList.add("clip");
  wrapperDivBorder.classList.add("flex-center");
  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("wrapper");
  wrapperDiv.classList.add("clip");

  wrapperDivBorder.appendChild(wrapperDiv);
  wrapperDiv.appendChild(child);
  return wrapperDivBorder;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapInHexagon);


/***/ }),

/***/ "./src/app/images/brown-wooden-flooring.jpg":
/*!**************************************************!*\
  !*** ./src/app/images/brown-wooden-flooring.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f576faa0253fc46fb6a.jpg";

/***/ }),

/***/ "./src/app/images/contact1.jpg":
/*!*************************************!*\
  !*** ./src/app/images/contact1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d7724ae5f4a0b5abbfb.jpg";

/***/ }),

/***/ "./src/app/images/contact2.jpg":
/*!*************************************!*\
  !*** ./src/app/images/contact2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ed86e27470e3c1795cc.jpg";

/***/ }),

/***/ "./src/app/images/contact3.jpg":
/*!*************************************!*\
  !*** ./src/app/images/contact3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46bb8a47564b7f66a268.jpg";

/***/ }),

/***/ "./src/app/images/kebab1.png":
/*!***********************************!*\
  !*** ./src/app/images/kebab1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e823a42ec14cbf15bd2c.png";

/***/ }),

/***/ "./src/app/images/kebab2.png":
/*!***********************************!*\
  !*** ./src/app/images/kebab2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ccc5b2827fe90fff4e2e.png";

/***/ }),

/***/ "./src/app/images/kebab3.png":
/*!***********************************!*\
  !*** ./src/app/images/kebab3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35a7a468ebb5bb1d1f95.png";

/***/ }),

/***/ "./src/app/images/restaurant-bg.jpg":
/*!******************************************!*\
  !*** ./src/app/images/restaurant-bg.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6a8b611ad649cc05d5f.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _app_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/homePage */ "./src/app/homePage.js");
/* harmony import */ var _app_menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/menuPage */ "./src/app/menuPage.js");
/* harmony import */ var _app_contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/contactPage */ "./src/app/contactPage.js");





// const menuPage = new MenuPage();

const myDiv = document.querySelector(".container");
// const niceText = document.createElement("h1");
(0,_app_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])(myDiv);

const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    myDiv.innerHTML = "";
    if (button.value === "home") {
      (0,_app_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])(myDiv);
    }
    if (button.value === "menu") {
      (0,_app_menuPage__WEBPACK_IMPORTED_MODULE_2__["default"])(myDiv);
    }
    if (button.value === "contact") {
      (0,_app_contactPage__WEBPACK_IMPORTED_MODULE_3__["default"])(myDiv);
    }
  });
});

})();

/******/ })()
;