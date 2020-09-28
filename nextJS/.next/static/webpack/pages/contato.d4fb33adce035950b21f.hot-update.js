webpackHotUpdate_N_E("pages/contato",{

/***/ "./pages/contato.js":
/*!**************************!*\
  !*** ./pages/contato.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./pages/header.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\nextJS\\pages\\contato.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Contato() {
  function sendForm(e) {
    e.preventDefault(); // Fazer requisiçao no back-end e enviar o formulario.
    // recuperar os valores do input.

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
    var requestOpitions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        msg: msg
      })
    };
    fetch('http://localhost/requisicao.php', requestOpitions).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    });
    alert(nome);
  }

  return __jsx("div", {
    className: "jsx-2153485803",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2153485803",
    __self: this
  }, "*{margin:0;padding:0;box-sizing:border-box;}body{background-color:rgb(225,225,225);}form{width:40%;max-width:500px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:20px;background:white;}input[type=text],input[type=email]{width:100%;height:35px;display:block;margin-bottom:15px;font-size:15px;border:1px solid #ccc;padding-left:8px;}textarea{width:100%;height:120px;display:block;margin-bottom:15px;font-size:15px;border:1px solid #ccc;padding:8px;resize:none;}input[type=submit]{width:100%;height:35px;background-color:#069;color:white;cursor:pointer;border:0;}form h2{text-align:center;padding:10px 0;color:#069;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXh0SlNcXHBhZ2VzXFxjb250YXRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDMkIsQUFHMEIsQUFNeUIsQUFJeEIsQUFXQyxBQVVBLEFBV0EsQUFTTyxTQWxEUixDQVVNLENBV0osQUFVQyxBQVdELE9BU0csQ0FsRE8sSUFxQlIsQUFxQlEsQ0FYUixFQXJCSSxPQXlDUCxDQTlDZixHQWlCdUIsQ0FVQSxHQS9CdkIsR0FVYSxBQTBDYixDQVZnQixRQS9CSixHQVdPLENBVUEsQUFXQSxJQS9CaUIsVUFXVixDQVVBLEFBV2IsU0FDYixZQXJCcUIsQ0FVTCxZQUNBLElBVmhCLFFBV0EsZ0RBdkJpQixhQUNJLGlCQUNyQiIsImZpbGUiOiJDOlxcbmV4dEpTXFxwYWdlc1xcY29udGF0by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGF0bygpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRm9ybShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gRmF6ZXIgcmVxdWlzacOnYW8gbm8gYmFjay1lbmQgZSBlbnZpYXIgbyBmb3JtdWxhcmlvLlxyXG4gICAgICAgIC8vIHJlY3VwZXJhciBvcyB2YWxvcmVzIGRvIGlucHV0LlxyXG5cclxuICAgICAgICBsZXQgbm9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21lJykudmFsdWVcclxuICAgICAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZVxyXG4gICAgICAgIGxldCBtc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnJykudmFsdWVcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9waXRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe25vbWU6bm9tZSwgZW1haWw6ZW1haWwsIG1zZzogbXNnfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0L3JlcXVpc2ljYW8ucGhwJyxyZXF1ZXN0T3BpdGlvbnMpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYWxlcnQobm9tZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsMjI1LDIyNSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTsgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY5O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3JtIGgyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDY5O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnNlbmRGb3JtKGUpfT5cclxuICAgICAgICAgICAgPGgyPkVudHJhciBlbSBjb250YXRvPC9oMj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibm9tZVwiIHBsYWNlaG9sZGVyPVwiU2V1IE5vbWUuLi5cIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiU2V1IEUtbWFpbC4uLlwiIHR5cGU9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1zZ1wiIHBsYWNlaG9sZGVyPVwiU3VhIG1lbnNzYWdlbS4uLlwiID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9XCJFbnZpYXIhXCIgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+KVxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhdG8iXX0= */\n/*@ sourceURL=C:\\\\nextJS\\\\pages\\\\contato.js */"), __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }), __jsx("form", {
    onSubmit: function onSubmit(e) {
      return sendForm(e);
    },
    className: "jsx-2153485803",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2153485803",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Entrar em contato"), __jsx("input", {
    id: "nome",
    placeholder: "Seu Nome...",
    type: "text",
    className: "jsx-2153485803",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx("input", {
    id: "email",
    placeholder: "Seu E-mail...",
    type: "email",
    className: "jsx-2153485803",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx("textarea", {
    id: "msg",
    placeholder: "Sua menssagem...",
    className: "jsx-2153485803",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), __jsx("input", {
    value: "Enviar!",
    type: "submit",
    className: "jsx-2153485803",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  })));
}

_c = Contato;
/* harmony default export */ __webpack_exports__["default"] = (Contato);

var _c;

$RefreshReg$(_c, "Contato");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGF0by5qcyJdLCJuYW1lcyI6WyJDb250YXRvIiwic2VuZEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJub21lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZW1haWwiLCJtc2ciLCJyZXF1ZXN0T3BpdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxPQUFULEdBQW1CO0FBRWYsV0FBU0MsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBcUI7QUFDakJBLEtBQUMsQ0FBQ0MsY0FBRixHQURpQixDQUVqQjtBQUNBOztBQUVBLFFBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUEzQztBQUNBLFFBQUlDLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUE3QztBQUNBLFFBQUlFLEdBQUcsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLEVBQStCQyxLQUF6QztBQUVBLFFBQU1HLGVBQWUsR0FBRztBQUNwQkMsWUFBTSxFQUFFLE1BRFk7QUFFcEJDLGFBQU8sRUFBQztBQUFDLHdCQUFlO0FBQWhCLE9BRlk7QUFHcEJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ1gsWUFBSSxFQUFDQSxJQUFOO0FBQVlJLGFBQUssRUFBQ0EsS0FBbEI7QUFBeUJDLFdBQUcsRUFBRUE7QUFBOUIsT0FBZjtBQUhjLEtBQXhCO0FBTUFPLFNBQUssQ0FBQyxpQ0FBRCxFQUFtQ04sZUFBbkMsQ0FBTCxDQUNDTyxJQURELENBQ00sVUFBQUMsUUFBUTtBQUFBLGFBQUVBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFGO0FBQUEsS0FEZCxFQUVDRixJQUZELENBRU0sVUFBQUcsSUFBSSxFQUFFO0FBQ1JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0gsS0FKRDtBQU1BRyxTQUFLLENBQUNuQixJQUFELENBQUw7QUFDSDs7QUFFRCxTQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1N0tBNERJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVESixFQTZESTtBQUFNLFlBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLGFBQUtELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFiO0FBQUEsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUk7QUFBTyxNQUFFLEVBQUMsTUFBVjtBQUFpQixlQUFXLEVBQUMsYUFBN0I7QUFBMkMsUUFBSSxFQUFDLE1BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBUSxNQUFFLEVBQUMsT0FBWDtBQUFtQixlQUFXLEVBQUMsZUFBL0I7QUFBK0MsUUFBSSxFQUFDLE9BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBVSxNQUFFLEVBQUMsS0FBYjtBQUFtQixlQUFXLEVBQUMsa0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBTyxTQUFLLEVBQUMsU0FBYjtBQUF1QixRQUFJLEVBQUMsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0E3REosQ0FEQTtBQXNFSDs7S0FoR1FGLE87QUFrR01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhdG8uZDRmYjMzYWRjZTAzNTk1MGIyMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGF0bygpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRm9ybShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gRmF6ZXIgcmVxdWlzacOnYW8gbm8gYmFjay1lbmQgZSBlbnZpYXIgbyBmb3JtdWxhcmlvLlxyXG4gICAgICAgIC8vIHJlY3VwZXJhciBvcyB2YWxvcmVzIGRvIGlucHV0LlxyXG5cclxuICAgICAgICBsZXQgbm9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21lJykudmFsdWVcclxuICAgICAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZVxyXG4gICAgICAgIGxldCBtc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnJykudmFsdWVcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9waXRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe25vbWU6bm9tZSwgZW1haWw6ZW1haWwsIG1zZzogbXNnfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0L3JlcXVpc2ljYW8ucGhwJyxyZXF1ZXN0T3BpdGlvbnMpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYWxlcnQobm9tZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsMjI1LDIyNSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTsgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY5O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3JtIGgyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDY5O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnNlbmRGb3JtKGUpfT5cclxuICAgICAgICAgICAgPGgyPkVudHJhciBlbSBjb250YXRvPC9oMj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibm9tZVwiIHBsYWNlaG9sZGVyPVwiU2V1IE5vbWUuLi5cIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiU2V1IEUtbWFpbC4uLlwiIHR5cGU9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1zZ1wiIHBsYWNlaG9sZGVyPVwiU3VhIG1lbnNzYWdlbS4uLlwiID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9XCJFbnZpYXIhXCIgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+KVxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhdG8iXSwic291cmNlUm9vdCI6IiJ9