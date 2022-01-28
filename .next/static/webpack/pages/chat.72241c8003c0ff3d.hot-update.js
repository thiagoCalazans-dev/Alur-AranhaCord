"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./components/MessageList.jsx":
/*!************************************!*\
  !*** ./components/MessageList.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MessageList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction MessageList(props) {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/\".concat(mensagem.de, \".png\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\components\\\\MessageList.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\components\\\\MessageList.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\components\\\\MessageList.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\components\\\\MessageList.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto,\n                    mensagem.texto.startsWith(\":sticker:\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: mensagem.texto.replace(\":sticker:\", \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\components\\\\MessageList.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 15\n                    }, _this) : mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\components\\\\MessageList.jsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\components\\\\MessageList.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n};\n_c = MessageList;\nvar _c;\n$RefreshReg$(_c, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lc3NhZ2VMaXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ2pCO0FBRXZCLFFBQVEsQ0FBQ0ksV0FBVyxDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFDMUMsTUFBTSw2RUFDSEwscURBQUc7UUFDRk0sR0FBRyxFQUFDLENBQUk7UUFDUkMsVUFBVSxFQUFFLENBQUM7WUFDWEMsUUFBUSxFQUFFLENBQVE7WUFDbEJDLE9BQU8sRUFBRSxDQUFNO1lBQ2ZDLGFBQWEsRUFBRSxDQUFnQjtZQUMvQkMsSUFBSSxFQUFFLENBQUM7WUFDUEMsS0FBSyxFQUFFVCxzRUFBcUM7WUFDNUNhLFlBQVksRUFBRSxDQUFNO1FBQ3RCLENBQUM7a0JBRUFYLEtBQUssQ0FBQ1ksU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUssQ0FBQztZQUNsQyxNQUFNLDZFQUNIbEIsc0RBQUk7Z0JBRUhLLEdBQUcsRUFBQyxDQUFJO2dCQUNSQyxVQUFVLEVBQUUsQ0FBQztvQkFDWGEsWUFBWSxFQUFFLENBQUs7b0JBQ25CQyxPQUFPLEVBQUUsQ0FBSztvQkFDZEwsWUFBWSxFQUFFLENBQU07b0JBQ3BCTSxLQUFLLEVBQUUsQ0FBQzt3QkFDTkMsZUFBZSxFQUFFcEIsb0VBQW9DO29CQUN2RCxDQUFDO2dCQUNILENBQUM7O2dHQUVBSCxxREFBRzt3QkFDRk8sVUFBVSxFQUFFLENBQUM7NEJBQ1hTLFlBQVksRUFBRSxDQUFLO3dCQUNyQixDQUFDOzt3R0FFQWQsdURBQUs7Z0NBQ0pLLFVBQVUsRUFBRSxDQUFDO29DQUNYaUIsS0FBSyxFQUFFLENBQU07b0NBQ2JDLE1BQU0sRUFBRSxDQUFNO29DQUNkTCxZQUFZLEVBQUUsQ0FBSztvQ0FDbkJYLE9BQU8sRUFBRSxDQUFjO29DQUN2QmlCLFdBQVcsRUFBRSxDQUFLO2dDQUNwQixDQUFDO2dDQUNEQyxHQUFHLEVBQUcsQ0FBbUIscUJBQWMsTUFBSSxDQUFoQlIsUUFBUSxDQUFDUyxFQUFFLEVBQUMsQ0FBSTs7Ozs7O3dHQUU1QzNCLHNEQUFJO2dDQUFDSyxHQUFHLEVBQUMsQ0FBUTswQ0FBRWEsUUFBUSxDQUFDUyxFQUFFOzs7Ozs7d0dBQzlCM0Isc0RBQUk7Z0NBQ0hNLFVBQVUsRUFBRSxDQUFDO29DQUNYc0IsUUFBUSxFQUFFLENBQU07b0NBQ2hCQyxVQUFVLEVBQUUsQ0FBSztvQ0FDakJsQixLQUFLLEVBQUVULG9FQUFvQztnQ0FDN0MsQ0FBQztnQ0FDREcsR0FBRyxFQUFDLENBQU07MENBRVQsR0FBRyxDQUFDeUIsSUFBSSxHQUFHQyxrQkFBa0I7Ozs7Ozs7Ozs7OztvQkFHakNiLFFBQVEsQ0FBQ2MsS0FBSztvQkFDZGQsUUFBUSxDQUFDYyxLQUFLLENBQUNDLFVBQVUsQ0FBQyxDQUFXLDBGQUNuQ2hDLHVEQUFLO3dCQUFDeUIsR0FBRyxFQUFFUixRQUFRLENBQUNjLEtBQUssQ0FBQ0UsT0FBTyxDQUFDLENBQVcsWUFBRSxDQUFFOzs7OztnQ0FFbERoQixRQUFRLENBQUNjLEtBQUs7O2VBMUNYZCxRQUFRLENBQUNpQixFQUFFOzs7OztRQThDdEIsQ0FBQzs7Ozs7O0FBR1AsQ0FBQztLQWpFdUJoQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVzc2FnZUxpc3QuanN4P2U5MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBJbWFnZSB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAga2V5PXttZW5zYWdlbS5pZH1cclxuICAgICAgICAgICAgdGFnPVwibGlcIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHttZW5zYWdlbS5kZX0ucG5nYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPnttZW5zYWdlbS5kZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cclxuICAgICAgICAgICAge21lbnNhZ2VtLnRleHRvLnN0YXJ0c1dpdGgoXCI6c3RpY2tlcjpcIikgPyAoXHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bWVuc2FnZW0udGV4dG8ucmVwbGFjZShcIjpzdGlja2VyOlwiLCBcIlwiKX0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBtZW5zYWdlbS50ZXh0b1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiTWVzc2FnZUxpc3QiLCJwcm9wcyIsInRhZyIsInN0eWxlU2hlZXQiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImNvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsIm1hcmdpbkJvdHRvbSIsIm1lbnNhZ2VucyIsIm1hcCIsIm1lbnNhZ2VtIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImhvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInNyYyIsImRlIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRleHRvIiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MessageList.jsx\n");

/***/ })

});