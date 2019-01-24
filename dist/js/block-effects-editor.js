/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = (function () {\n\treturn ['core/heading', 'core/paragraph', 'core/image', 'core/button'];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYmxvY2stZWZmZWN0cy9ibG9ja3MuanM/ZmM3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBZSxxRUFBVTtBQUN4QixRQUFPLENBQ04sY0FETSxFQUVOLGdCQUZNLEVBR04sWUFITSxFQUlOLGFBSk0sQ0FBUDtBQU1BLEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG5cdHJldHVybiBbXG5cdFx0J2NvcmUvaGVhZGluZycsXG5cdFx0J2NvcmUvcGFyYWdyYXBoJyxcblx0XHQnY29yZS9pbWFnZScsXG5cdFx0J2NvcmUvYnV0dG9uJyxcblx0XVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2Jsb2NrLWVmZmVjdHMvYmxvY2tzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(7);
module.exports = __webpack_require__(8);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes_js__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_js__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspector_js__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save_js__ = __webpack_require__(6);\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYmxvY2stZWZmZWN0cy9pbmRleC5qcz85NTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9hdHRyaWJ1dGVzLmpzJ1xuaW1wb3J0ICcuL2VkaXQuanMnXG5pbXBvcnQgJy4vaW5zcGVjdG9yLmpzJ1xuaW1wb3J0ICcuL3NhdmUuanMnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYmxvY2stZWZmZWN0cy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks__ = __webpack_require__(0);\n\n\nwp.hooks.addFilter('blocks.registerBlockType', 'horttcore/block-effects/attribute', function (settings, name) {\n\n\tif (!window.lodash.includes(Object(__WEBPACK_IMPORTED_MODULE_0__blocks__[\"a\" /* default */])(), name)) return settings;\n\n\tsettings = window.lodash.assign({}, settings, {\n\t\tattributes: window.lodash.assign({}, settings.attributes, {\n\t\t\tanimation: {\n\t\t\t\ttype: 'string'\n\t\t\t},\n\t\t\tanimationAnchor: {\n\t\t\t\ttype: 'string'\n\t\t\t},\n\t\t\tanimationDelay: {\n\t\t\t\ttype: 'number'\n\t\t\t},\n\t\t\tanimationDuration: {\n\t\t\t\ttype: 'string'\n\t\t\t}\n\t\t})\n\t});\n\treturn settings;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYmxvY2stZWZmZWN0cy9hdHRyaWJ1dGVzLmpzPzQ2MTEiXSwibmFtZXMiOlsid3AiLCJob29rcyIsImFkZEZpbHRlciIsInNldHRpbmdzIiwibmFtZSIsIndpbmRvdyIsImxvZGFzaCIsImluY2x1ZGVzIiwic3VwcG9ydGVkQmxvY2tzIiwiYXNzaWduIiwiYXR0cmlidXRlcyIsImFuaW1hdGlvbiIsInR5cGUiLCJhbmltYXRpb25BbmNob3IiLCJhbmltYXRpb25EZWxheSIsImFuaW1hdGlvbkR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOztBQUVBQSxHQUFHQyxLQUFILENBQVNDLFNBQVQsQ0FDQywwQkFERCxFQUVDLG1DQUZELEVBR0MsVUFBVUMsUUFBVixFQUFvQkMsSUFBcEIsRUFBMkI7O0FBRTFCLEtBQUssQ0FBQ0MsT0FBT0MsTUFBUCxDQUFjQyxRQUFkLENBQXVCQyxnRUFBZUEsRUFBdEMsRUFBeUNKLElBQXpDLENBQU4sRUFDVSxPQUFPRCxRQUFQOztBQUVWQSxZQUFXRSxPQUFPQyxNQUFQLENBQWNHLE1BQWQsQ0FBc0IsRUFBdEIsRUFBMEJOLFFBQTFCLEVBQW9DO0FBQzlDTyxjQUFZTCxPQUFPQyxNQUFQLENBQWNHLE1BQWQsQ0FBc0IsRUFBdEIsRUFBMEJOLFNBQVNPLFVBQW5DLEVBQStDO0FBQzFEQyxjQUFXO0FBQ1ZDLFVBQU07QUFESSxJQUQrQztBQUkxREMsb0JBQWlCO0FBQ2hCRCxVQUFNO0FBRFUsSUFKeUM7QUFPMURFLG1CQUFnQjtBQUNmRixVQUFNO0FBRFMsSUFQMEM7QUFVMURHLHNCQUFtQjtBQUNsQkgsVUFBTTtBQURZO0FBVnVDLEdBQS9DO0FBRGtDLEVBQXBDLENBQVg7QUFnQkEsUUFBT1QsUUFBUDtBQUNBLENBekJGIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VwcG9ydGVkQmxvY2tzIGZyb20gJy4vYmxvY2tzJztcblxud3AuaG9va3MuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJyxcblx0J2hvcnR0Y29yZS9ibG9jay1lZmZlY3RzL2F0dHJpYnV0ZScsXG5cdGZ1bmN0aW9uKCBzZXR0aW5ncywgbmFtZSApIHtcblxuXHRcdGlmICggIXdpbmRvdy5sb2Rhc2guaW5jbHVkZXMoc3VwcG9ydGVkQmxvY2tzKCksbmFtZSkpXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG5cblx0XHRzZXR0aW5ncyA9IHdpbmRvdy5sb2Rhc2guYXNzaWduKCB7fSwgc2V0dGluZ3MsIHtcblx0XHRcdGF0dHJpYnV0ZXM6IHdpbmRvdy5sb2Rhc2guYXNzaWduKCB7fSwgc2V0dGluZ3MuYXR0cmlidXRlcywge1xuXHRcdFx0XHRhbmltYXRpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0YW5pbWF0aW9uQW5jaG9yOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFuaW1hdGlvbkRlbGF5OiB7XG5cdFx0XHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFuaW1hdGlvbkR1cmF0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdH1cblx0XHRcdH0gKSxcblx0XHR9ICk7XG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2Jsb2NrLWVmZmVjdHMvYXR0cmlidXRlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks__ = __webpack_require__(0);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\n\n\n\n\nvar withDataAnimation = createHigherOrderComponent(function (BlockListBlock) {\n    return function (props) {\n\n        if (!window.lodash.includes(Object(__WEBPACK_IMPORTED_MODULE_0__blocks__[\"a\" /* default */])(), props.block.name)) return React.createElement(BlockListBlock, props);\n\n        var _props$block$attribut = props.block.attributes,\n            animation = _props$block$attribut.animation,\n            animationAnchor = _props$block$attribut.animationAnchor,\n            animationDuration = _props$block$attribut.animationDuration;\n\n\n        var wrapperProps = props.wrapperProps;\n        wrapperProps = _extends({}, wrapperProps, {\n            'data-aos': animation,\n            'data-aos-anchor-placement': animationAnchor,\n            'data-aos-duration': animationDuration\n        });\n\n        return React.createElement(BlockListBlock, _extends({}, props, { wrapperProps: wrapperProps }));\n    };\n}, 'withDataAnimation');\n\nwp.hooks.addFilter('editor.BlockListBlock', 'block-effects/animate-on-scroll/edit', withDataAnimation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYmxvY2stZWZmZWN0cy9lZGl0LmpzPzM5MDciXSwibmFtZXMiOlsiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJ3cCIsImNvbXBvc2UiLCJ3aXRoRGF0YUFuaW1hdGlvbiIsIkJsb2NrTGlzdEJsb2NrIiwicHJvcHMiLCJ3aW5kb3ciLCJsb2Rhc2giLCJpbmNsdWRlcyIsInN1cHBvcnRlZEJsb2NrcyIsImJsb2NrIiwibmFtZSIsImF0dHJpYnV0ZXMiLCJhbmltYXRpb24iLCJhbmltYXRpb25BbmNob3IiLCJhbmltYXRpb25EdXJhdGlvbiIsIndyYXBwZXJQcm9wcyIsImhvb2tzIiwiYWRkRmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7SUFBUUEsMEIsR0FBK0JDLEdBQUdDLE8sQ0FBbENGLDBCOzs7QUFFUjs7QUFFQSxJQUFNRyxvQkFBb0JILDJCQUE0QixVQUFFSSxjQUFGLEVBQXNCO0FBQ3hFLFdBQU8sVUFBRUMsS0FBRixFQUFhOztBQUVoQixZQUFLLENBQUNDLE9BQU9DLE1BQVAsQ0FBY0MsUUFBZCxDQUF1QkMsZ0VBQWVBLEVBQXRDLEVBQTBDSixNQUFNSyxLQUFOLENBQVlDLElBQXRELENBQU4sRUFDSSxPQUFPLG9CQUFDLGNBQUQsRUFBcUJOLEtBQXJCLENBQVA7O0FBSFksb0NBSzBDQSxNQUFNSyxLQUFOLENBQVlFLFVBTHREO0FBQUEsWUFLUkMsU0FMUSx5QkFLUkEsU0FMUTtBQUFBLFlBS0dDLGVBTEgseUJBS0dBLGVBTEg7QUFBQSxZQUtvQkMsaUJBTHBCLHlCQUtvQkEsaUJBTHBCOzs7QUFPaEIsWUFBSUMsZUFBZVgsTUFBTVcsWUFBekI7QUFDQUEsb0NBQ09BLFlBRFA7QUFFSSx3QkFBWUgsU0FGaEI7QUFHSSx5Q0FBNkJDLGVBSGpDO0FBSUksaUNBQXFCQztBQUp6Qjs7QUFPQSxlQUFPLG9CQUFDLGNBQUQsZUFBcUJWLEtBQXJCLElBQTZCLGNBQWVXLFlBQTVDLElBQVA7QUFDSCxLQWhCRDtBQWlCSCxDQWxCeUIsRUFrQnZCLG1CQWxCdUIsQ0FBMUI7O0FBb0JBZixHQUFHZ0IsS0FBSCxDQUFTQyxTQUFULENBQW9CLHVCQUFwQixFQUE2QyxzQ0FBN0MsRUFBcUZmLGlCQUFyRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9ID0gd3AuY29tcG9zZTtcblxuaW1wb3J0IHN1cHBvcnRlZEJsb2NrcyBmcm9tICcuL2Jsb2Nrcyc7XG5cbmNvbnN0IHdpdGhEYXRhQW5pbWF0aW9uID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoICggQmxvY2tMaXN0QmxvY2sgKSA9PiB7XG4gICAgcmV0dXJuICggcHJvcHMgKSA9PiB7XG5cbiAgICAgICAgaWYgKCAhd2luZG93LmxvZGFzaC5pbmNsdWRlcyhzdXBwb3J0ZWRCbG9ja3MoKSwgcHJvcHMuYmxvY2submFtZSkpXG4gICAgICAgICAgICByZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsgLi4ucHJvcHMgfSAvPjtcblxuICAgICAgICBjb25zdCB7IGFuaW1hdGlvbiwgYW5pbWF0aW9uQW5jaG9yLCBhbmltYXRpb25EdXJhdGlvbiB9ID0gcHJvcHMuYmxvY2suYXR0cmlidXRlcztcblxuICAgICAgICBsZXQgd3JhcHBlclByb3BzID0gcHJvcHMud3JhcHBlclByb3BzO1xuICAgICAgICB3cmFwcGVyUHJvcHMgPSB7XG4gICAgICAgICAgICAuLi53cmFwcGVyUHJvcHMsXG4gICAgICAgICAgICAnZGF0YS1hb3MnOiBhbmltYXRpb24sXG4gICAgICAgICAgICAnZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudCc6IGFuaW1hdGlvbkFuY2hvcixcbiAgICAgICAgICAgICdkYXRhLWFvcy1kdXJhdGlvbic6IGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiA8QmxvY2tMaXN0QmxvY2sgeyAuLi5wcm9wcyB9IHdyYXBwZXJQcm9wcz17IHdyYXBwZXJQcm9wcyB9IC8+O1xuICAgIH07XG59LCAnd2l0aERhdGFBbmltYXRpb24nICk7XG5cbndwLmhvb2tzLmFkZEZpbHRlciggJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdibG9jay1lZmZlY3RzL2FuaW1hdGUtb24tc2Nyb2xsL2VkaXQnLCB3aXRoRGF0YUFuaW1hdGlvbiApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2Jsb2NrLWVmZmVjdHMvZWRpdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks__ = __webpack_require__(0);\nvar __ = wp.i18n.__;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar Fragment = wp.element.Fragment;\nvar InspectorControls = wp.editor.InspectorControls;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl,\n    PanelBody = _wp$components.PanelBody,\n    IconButton = _wp$components.IconButton;\n\n\n\n\nvar withInspectorControls = createHigherOrderComponent(function (BlockEdit) {\n    return function (props) {\n\n        if (!window.lodash.includes(Object(__WEBPACK_IMPORTED_MODULE_0__blocks__[\"a\" /* default */])(), props.name)) return React.createElement(BlockEdit, props);\n\n        return React.createElement(\n            Fragment,\n            null,\n            React.createElement(BlockEdit, props),\n            React.createElement(\n                InspectorControls,\n                { key: 'inspector' },\n                React.createElement(\n                    PanelBody,\n                    { title: __('Animations', 'block-effects'), initialOpen: true },\n                    React.createElement(SelectControl, {\n                        label: __('Animation', 'block-effects'),\n                        value: props.attributes.animation,\n                        options: [{ label: __('Default', 'block-effects'), value: '' }, { label: __('Fade', 'block-effects'), value: 'fade' }, { label: __('Fade up', 'block-effects'), value: 'fade-up' }, { label: __('Fade down', 'block-effects'), value: 'fade-down' }, { label: __('Fade left', 'block-effects'), value: 'fade-left' }, { label: __('Fade right', 'block-effects'), value: 'fade-right' }, { label: __('Fade up right', 'block-effects'), value: 'fade-up-right' }, { label: __('Fade up left', 'block-effects'), value: 'fade-up-left' }, { label: __('Fade down right', 'block-effects'), value: 'fade-down-right' }, { label: __('Fade down left', 'block-effects'), value: 'fade-down-left' }, { label: __('Flip Up', 'block-effects'), value: 'flip-up' }, { label: __('Flip Down', 'block-effects'), value: 'flip-down' }, { label: __('Flip Left', 'block-effects'), value: 'flip-left' }, { label: __('Flip Right', 'block-effects'), value: 'flip-right' }, { label: __('Slide up', 'block-effects'), value: 'slide-up' }, { label: __('Slide down', 'block-effects'), value: 'slide-down' }, { label: __('Slide left', 'block-effects'), value: 'slide-left' }, { label: __('Slide right', 'block-effects'), value: 'slide-right' }, { label: __('Zoom in', 'block-effects'), value: 'zoom-in' }, { label: __('Zoom in up', 'block-effects'), value: 'zoom-in-up' }, { label: __('Zoom in down', 'block-effects'), value: 'zoom-in-down' }, { label: __('Zoom in left', 'block-effects'), value: 'zoom-in-left' }, { label: __('Zoom in right', 'block-effects'), value: 'zoom-in-right' }, { label: __('Zoom out', 'block-effects'), value: 'zoom-out' }, { label: __('Zoom out up', 'block-effects'), value: 'zoom-out-up' }, { label: __('Zoom out down', 'block-effects'), value: 'zoom-out-down' }, { label: __('Zoom out left', 'block-effects'), value: 'zoom-out-left' }, { label: __('Zoom out right', 'block-effects'), value: 'zoom-out-right' }],\n                        onChange: function onChange(value) {\n                            return props.setAttributes({ animation: value });\n                        }\n                    }),\n                    React.createElement(SelectControl, {\n                        label: __('Anchor', 'block-effects')\n                        // value={ animationAnchor }\n                        , options: [{ label: __('Default', 'block-effects'), value: '' }, { label: __('Top-Bottom', 'block-effects'), value: 'top-bottom' }, { label: __('Top-Center', 'block-effects'), value: 'top-center' }, { label: __('Top-Top', 'block-effects'), value: 'top-top' }, { label: __('Center-Bottom', 'block-effects'), value: 'center-bottom' }, { label: __('Center-Center', 'block-effects'), value: 'center-center' }, { label: __('Center-Top', 'block-effects'), value: 'center-top' }, { label: __('Bottom-Bottom', 'block-effects'), value: 'bottom-bottom' }, { label: __('Bottom-Center', 'block-effects'), value: 'bottom-center' }, { label: __('Bottom-Top', 'block-effects'), value: 'bottom-top' }],\n                        onChange: function onChange(value) {\n                            return props.setAttributes({ animationAnchor: value });\n                        }\n                    }),\n                    React.createElement(TextControl, {\n                        label: __(\"Duration\")\n                        // value={animationDuration}\n                        , onChange: function onChange(value) {\n                            return props.setAttributes({ animationDuration: value });\n                        }\n                    }),\n                    React.createElement(TextControl, {\n                        label: __(\"Delay\")\n                        // value={animationDuration}\n                        , onChange: function onChange(value) {\n                            return props.setAttributes({ animationDelay: value });\n                        }\n                    })\n                )\n            )\n        );\n    };\n}, \"withInspectorControl\");\n\nwp.hooks.addFilter('editor.BlockEdit', 'block-effects/animate-on-scroll/inspector', withInspectorControls);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYmxvY2stZWZmZWN0cy9pbnNwZWN0b3IuanM/NzJjOCJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsImNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IiwiY29tcG9zZSIsIkZyYWdtZW50IiwiZWxlbWVudCIsIkluc3BlY3RvckNvbnRyb2xzIiwiZWRpdG9yIiwiY29tcG9uZW50cyIsIlRleHRDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlBhbmVsQm9keSIsIkljb25CdXR0b24iLCJ3aXRoSW5zcGVjdG9yQ29udHJvbHMiLCJCbG9ja0VkaXQiLCJwcm9wcyIsIndpbmRvdyIsImxvZGFzaCIsImluY2x1ZGVzIiwic3VwcG9ydGVkQmxvY2tzIiwibmFtZSIsImF0dHJpYnV0ZXMiLCJhbmltYXRpb24iLCJsYWJlbCIsInZhbHVlIiwic2V0QXR0cmlidXRlcyIsImFuaW1hdGlvbkFuY2hvciIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uRGVsYXkiLCJob29rcyIsImFkZEZpbHRlciJdLCJtYXBwaW5ncyI6IjtJQUFRQSxFLEdBQU9DLEdBQUdDLEksQ0FBVkYsRTtJQUVBRywwQixHQUErQkYsR0FBR0csTyxDQUFsQ0QsMEI7SUFDQUUsUSxHQUFhSixHQUFHSyxPLENBQWhCRCxRO0lBQ0FFLGlCLEdBQXNCTixHQUFHTyxNLENBQXpCRCxpQjtxQkFDc0ROLEdBQUdRLFU7SUFBekRDLFcsa0JBQUFBLFc7SUFBYUMsYSxrQkFBQUEsYTtJQUFlQyxTLGtCQUFBQSxTO0lBQVdDLFUsa0JBQUFBLFU7OztBQUUvQzs7QUFFQSxJQUFNQyx3QkFBeUJYLDJCQUE0QixVQUFFWSxTQUFGLEVBQWlCO0FBQ3hFLFdBQU8sVUFBRUMsS0FBRixFQUFhOztBQUVoQixZQUFLLENBQUNDLE9BQU9DLE1BQVAsQ0FBY0MsUUFBZCxDQUF1QkMsZ0VBQWVBLEVBQXRDLEVBQTBDSixNQUFNSyxJQUFoRCxDQUFOLEVBQ0ksT0FDSSxvQkFB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akIscUJBQXJGIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gPSB3cC5jb21wb3NlO1xuY29uc3QgeyBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgVGV4dENvbnRyb2wsIFNlbGVjdENvbnRyb2wsIFBhbmVsQm9keSwgSWNvbkJ1dHRvbiB9ID0gd3AuY29tcG9uZW50cztcblxuaW1wb3J0IHN1cHBvcnRlZEJsb2NrcyBmcm9tICcuL2Jsb2Nrcyc7XG5cbmNvbnN0IHdpdGhJbnNwZWN0b3JDb250cm9scyA9ICBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCggKCBCbG9ja0VkaXQgKSA9PiB7XG4gICAgcmV0dXJuICggcHJvcHMgKSA9PiB7XG5cbiAgICAgICAgaWYgKCAhd2luZG93LmxvZGFzaC5pbmNsdWRlcyhzdXBwb3J0ZWRCbG9ja3MoKSwgcHJvcHMubmFtZSkpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCbG9ja0VkaXQgeyAuLi5wcm9wcyB9IC8+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPEJsb2NrRWRpdCB7IC4uLnByb3BzIH0gLz5cbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHMga2V5PVwiaW5zcGVjdG9yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdBbmltYXRpb25zJywgJ2Jsb2NrLWVmZmVjdHMnKSB9IGluaXRpYWxPcGVuPXt0cnVlfT5cblxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eyBfXyggJ0FuaW1hdGlvbicsICdibG9jay1lZmZlY3RzJyApIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5hbmltYXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ0RlZmF1bHQnLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ0ZhZGUnLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ2ZhZGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdGYWRlIHVwJywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICdmYWRlLXVwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnRmFkZSBkb3duJywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICdmYWRlLWRvd24nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdGYWRlIGxlZnQnLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ2ZhZGUtbGVmdCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ0ZhZGUgcmlnaHQnLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ2ZhZGUtcmlnaHQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdGYWRlIHVwIHJpZ2h0JywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICdmYWRlLXVwLXJpZ2h0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnRmFkZSB1cCBsZWZ0JywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICdmYWRlLXVwLWxlZnQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdGYWRlIGRvd24gcmlnaHQnLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ2ZhZGUtZG93bi1yaWdodCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ0ZhZGUgZG93biBsZWZ0JywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICdmYWRlLWRvd24tbGVmdCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ0ZsaXAgVXAnLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ2ZsaXAtdXAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdGbGlwIERvd24nLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ2ZsaXAtZG93bicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ0ZsaXAgTGVmdCcsJ2Jsb2NrLWVmZmVjdHMnICksIHZhbHVlOiAnZmxpcC1sZWZ0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnRmxpcCBSaWdodCcsJ2Jsb2NrLWVmZmVjdHMnICksIHZhbHVlOiAnZmxpcC1yaWdodCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ1NsaWRlIHVwJywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICdzbGlkZS11cCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ1NsaWRlIGRvd24nLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ3NsaWRlLWRvd24nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdTbGlkZSBsZWZ0JywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICdzbGlkZS1sZWZ0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnU2xpZGUgcmlnaHQnLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ3NsaWRlLXJpZ2h0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnWm9vbSBpbicsJ2Jsb2NrLWVmZmVjdHMnICksIHZhbHVlOiAnem9vbS1pbicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ1pvb20gaW4gdXAnLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ3pvb20taW4tdXAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdab29tIGluIGRvd24nLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ3pvb20taW4tZG93bicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ1pvb20gaW4gbGVmdCcsJ2Jsb2NrLWVmZmVjdHMnICksIHZhbHVlOiAnem9vbS1pbi1sZWZ0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnWm9vbSBpbiByaWdodCcsJ2Jsb2NrLWVmZmVjdHMnICksIHZhbHVlOiAnem9vbS1pbi1yaWdodCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ1pvb20gb3V0JywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICd6b29tLW91dCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ1pvb20gb3V0IHVwJywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICd6b29tLW91dC11cCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ1pvb20gb3V0IGRvd24nLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ3pvb20tb3V0LWRvd24nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdab29tIG91dCBsZWZ0JywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICd6b29tLW91dC1sZWZ0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnWm9vbSBvdXQgcmlnaHQnLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ3pvb20tb3V0LXJpZ2h0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gcHJvcHMuc2V0QXR0cmlidXRlcyh7IGFuaW1hdGlvbjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsgX18oICdBbmNob3InLCAnYmxvY2stZWZmZWN0cycgKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17IGFuaW1hdGlvbkFuY2hvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnRGVmYXVsdCcsJ2Jsb2NrLWVmZmVjdHMnICksIHZhbHVlOiAnJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnVG9wLUJvdHRvbScsJ2Jsb2NrLWVmZmVjdHMnICksIHZhbHVlOiAndG9wLWJvdHRvbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ1RvcC1DZW50ZXInLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ3RvcC1jZW50ZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdUb3AtVG9wJywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICd0b3AtdG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnQ2VudGVyLUJvdHRvbScsJ2Jsb2NrLWVmZmVjdHMnICksIHZhbHVlOiAnY2VudGVyLWJvdHRvbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ0NlbnRlci1DZW50ZXInLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ2NlbnRlci1jZW50ZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdDZW50ZXItVG9wJywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICdjZW50ZXItdG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCAnQm90dG9tLUJvdHRvbScsJ2Jsb2NrLWVmZmVjdHMnICksIHZhbHVlOiAnYm90dG9tLWJvdHRvbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXyggJ0JvdHRvbS1DZW50ZXInLCdibG9jay1lZmZlY3RzJyApLCB2YWx1ZTogJ2JvdHRvbS1jZW50ZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oICdCb3R0b20tVG9wJywnYmxvY2stZWZmZWN0cycgKSwgdmFsdWU6ICdib3R0b20tdG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gcHJvcHMuc2V0QXR0cmlidXRlcyh7IGFuaW1hdGlvbkFuY2hvcjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oXCJEdXJhdGlvblwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXthbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgYW5pbWF0aW9uRHVyYXRpb246IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiRGVsYXlcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17YW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gcHJvcHMuc2V0QXR0cmlidXRlcyh7IGFuaW1hdGlvbkRlbGF5OiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuXG4gICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH07XG59LCBcIndpdGhJbnNwZWN0b3JDb250cm9sXCIgKTtcblxud3AuaG9va3MuYWRkRmlsdGVyKCAnZWRpdG9yLkJsb2NrRWRpdCcsICdibG9jay1lZmZlY3RzL2FuaW1hdGUtb24tc2Nyb2xsL2luc3BlY3RvcicsIHdpdGhJbnNwZWN0b3JDb250cm9scyApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2Jsb2NrLWVmZmVjdHMvaW5zcGVjdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks__ = __webpack_require__(0);\n\n\nwp.hooks.addFilter('blocks.getSaveElement', 'horttcore/block-effects/save', function (element, blockType, attributes) {\n\n    if (!window.lodash.includes(Object(__WEBPACK_IMPORTED_MODULE_0__blocks__[\"a\" /* default */])(), blockType.name)) return element;\n\n    if (attributes.animation) {\n        element = window.lodash.assign({}, element, {\n            props: window.lodash.assign({}, element.props, {\n                'data-aos': attributes.animation\n            })\n        });\n    }\n\n    if (attributes.animationAnchor) {\n        element = window.lodash.assign({}, element, {\n            props: window.lodash.assign({}, element.props, {\n                'data-aos-anchor-placement': attributes.animationAnchor\n            })\n        });\n    }\n\n    if (attributes.animationDuration) {\n        element = window.lodash.assign({}, element, {\n            props: window.lodash.assign({}, element.props, {\n                'data-aos-duration': attributes.animationDuration\n            })\n        });\n    }\n\n    if (attributes.animationDuration) {\n        element = window.lodash.assign({}, element, {\n            props: window.lodash.assign({}, element.props, {\n                'data-aos-delay': attributes.animationDelay\n            })\n        });\n    }\n\n    return element;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYmxvY2stZWZmZWN0cy9zYXZlLmpzP2RlMGMiXSwibmFtZXMiOlsid3AiLCJob29rcyIsImFkZEZpbHRlciIsImVsZW1lbnQiLCJibG9ja1R5cGUiLCJhdHRyaWJ1dGVzIiwid2luZG93IiwibG9kYXNoIiwiaW5jbHVkZXMiLCJzdXBwb3J0ZWRCbG9ja3MiLCJuYW1lIiwiYW5pbWF0aW9uIiwiYXNzaWduIiwicHJvcHMiLCJhbmltYXRpb25BbmNob3IiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkRlbGF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOztBQUVBQSxHQUFHQyxLQUFILENBQVNDLFNBQVQsQ0FDSSx1QkFESixFQUVJLDhCQUZKLEVBR0ksVUFBU0MsT0FBVCxFQUFrQkMsU0FBbEIsRUFBNkJDLFVBQTdCLEVBQXdDOztBQUVwQyxRQUFLLENBQUNDLE9BQU9DLE1BQVAsQ0FBY0MsUUFBZCxDQUF1QkMsZ0VBQWVBLEVBQXRDLEVBQTBDTCxVQUFVTSxJQUFwRCxDQUFOLEVBQ0ksT0FBT1AsT0FBUDs7QUFFSixRQUFLRSxXQUFXTSxTQUFoQixFQUE0QjtBQUN4QlIsa0JBQVVHLE9BQU9DLE1BQVAsQ0FBY0ssTUFBZCxDQUFzQixFQUF0QixFQUEwQlQsT0FBMUIsRUFBbUM7QUFDekNVLG1CQUFPUCxPQUFPQyxNQUFQLENBQWNLLE1BQWQsQ0FBc0IsRUFBdEIsRUFBMEJULFFBQVFVLEtBQWxDLEVBQXlDO0FBQzVDLDRCQUFZUixXQUFXTTtBQURxQixhQUF6QztBQURrQyxTQUFuQyxDQUFWO0FBS0g7O0FBRUQsUUFBS04sV0FBV1MsZUFBaEIsRUFBaUM7QUFDN0JYLGtCQUFVRyxPQUFPQyxNQUFQLENBQWNLLE1BQWQsQ0FBc0IsRUFBdEIsRUFBMEJULE9BQTFCLEVBQW1DO0FBQ3pDVSxtQkFBT1AsT0FBT0MsTUFBUCxDQUFjSyxNQUFkLENBQXNCLEVBQXRCLEVBQTBCVCxRQUFRVSxLQUFsQyxFQUF5QztBQUM1Qyw2Q0FBNkJSLFdBQVdTO0FBREksYUFBekM7QUFEa0MsU0FBbkMsQ0FBVjtBQUtIOztBQUVELFFBQUtULFdBQVdVLGlCQUFoQixFQUFvQztBQUNoQ1osa0JBQVVHLE9BQU9DLE1BQVAsQ0FBY0ssTUFBZCxDQUFzQixFQUF0QixFQUEwQlQsT0FBMUIsRUFBbUM7QUFDekNVLG1CQUFPUCxPQUFPQyxNQUFQLENBQWNLLE1BQWQsQ0FBc0IsRUFBdEIsRUFBMEJULFFBQVFVLEtBQWxDLEVBQXlDO0FBQzVDLHFDQUFxQlIsV0FBV1U7QUFEWSxhQUF6QztBQURrQyxTQUFuQyxDQUFWO0FBS0g7O0FBRUQsUUFBS1YsV0FBV1UsaUJBQWhCLEVBQW9DO0FBQ2hDWixrQkFBVUcsT0FBT0MsTUFBUCxDQUFjSyxNQUFkLENBQXNCLEVBQXRCLEVBQTBCVCxPQUExQixFQUFtQztBQUN6Q1UsbUJBQU9QLE9BQU9DLE1BQVAsQ0FBY0ssTUFBZCxDQUFzQixFQUF0QixFQUEwQlQsUUFBUVUsS0FBbEMsRUFBeUM7QUFDNUMsa0NBQWtCUixXQUFXVztBQURlLGFBQXpDO0FBRGtDLFNBQW5DLENBQVY7QUFLSDs7QUFFUCxXQUFPYixPQUFQO0FBQ0EsQ0F6Q0YiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBwb3J0ZWRCbG9ja3MgZnJvbSAnLi9ibG9ja3MnO1xuXG53cC5ob29rcy5hZGRGaWx0ZXIoXG4gICAgJ2Jsb2Nrcy5nZXRTYXZlRWxlbWVudCcsXG4gICAgJ2hvcnR0Y29yZS9ibG9jay1lZmZlY3RzL3NhdmUnLFxuICAgIGZ1bmN0aW9uKGVsZW1lbnQsIGJsb2NrVHlwZSwgYXR0cmlidXRlcyl7XG5cbiAgICAgICAgaWYgKCAhd2luZG93LmxvZGFzaC5pbmNsdWRlcyhzdXBwb3J0ZWRCbG9ja3MoKSwgYmxvY2tUeXBlLm5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCBhdHRyaWJ1dGVzLmFuaW1hdGlvbiApIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSB3aW5kb3cubG9kYXNoLmFzc2lnbigge30sIGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBwcm9wczogd2luZG93LmxvZGFzaC5hc3NpZ24oIHt9LCBlbGVtZW50LnByb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgICdkYXRhLWFvcyc6IGF0dHJpYnV0ZXMuYW5pbWF0aW9uLFxuICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBhdHRyaWJ1dGVzLmFuaW1hdGlvbkFuY2hvcikge1xuICAgICAgICAgICAgZWxlbWVudCA9IHdpbmRvdy5sb2Rhc2guYXNzaWduKCB7fSwgZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIHByb3BzOiB3aW5kb3cubG9kYXNoLmFzc2lnbigge30sIGVsZW1lbnQucHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQnOiBhdHRyaWJ1dGVzLmFuaW1hdGlvbkFuY2hvcixcbiAgICAgICAgICAgICAgICB9IClcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggYXR0cmlidXRlcy5hbmltYXRpb25EdXJhdGlvbiApIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSB3aW5kb3cubG9kYXNoLmFzc2lnbigge30sIGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBwcm9wczogd2luZG93LmxvZGFzaC5hc3NpZ24oIHt9LCBlbGVtZW50LnByb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgICdkYXRhLWFvcy1kdXJhdGlvbic6IGF0dHJpYnV0ZXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGF0dHJpYnV0ZXMuYW5pbWF0aW9uRHVyYXRpb24gKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gd2luZG93LmxvZGFzaC5hc3NpZ24oIHt9LCBlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgcHJvcHM6IHdpbmRvdy5sb2Rhc2guYXNzaWduKCB7fSwgZWxlbWVudC5wcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAnZGF0YS1hb3MtZGVsYXknOiBhdHRyaWJ1dGVzLmFuaW1hdGlvbkRlbGF5LFxuICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9ibG9jay1lZmZlY3RzL3NhdmUuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9ibG9jay1lZmZlY3RzLnNhc3M/MGIyMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zYXNzL2Jsb2NrLWVmZmVjdHMuc2Fzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9ibG9jay1lZmZlY3RzLWVkaXRvci5zYXNzPzVkYzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9ibG9jay1lZmZlY3RzLWVkaXRvci5zYXNzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);