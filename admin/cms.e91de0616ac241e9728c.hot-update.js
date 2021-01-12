webpackHotUpdate("cms",{

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1610474153425
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/components/VideoPlayer.js":
/*!***************************************!*\
  !*** ./src/components/VideoPlayer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player/lazy */ "./node_modules/react-player/lazy/index.js");
/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player_lazy__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tom.nguyen/Dev/mama-lynns-site/src/components/VideoPlayer.js",
    _this = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var VideoPlayer = function VideoPlayer(props) {
  var player = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      play = _useState[0],
      setPlay = _useState[1];

  return (
    /*#__PURE__*/
    // <video
    //   onMouseOver={handlePlayVideo}
    //   ref={vidRef}
    //   src={props.src}
    //   // type="video/mp4"
    // ></video>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player_lazy__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onMouseOver: function onMouseOver() {
        setPlay(true);
      },
      onMouseOut: function onMouseOut() {
        setPlay(false);
      },
      ref: player,
      url: props.src,
      playing: play,
      loop: true,
      playbackRate: 0.5,
      width: 250,
      onReady: function onReady() {
        setPlay(true);
      },
      muted: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }
    })
  );
};

__signature__(VideoPlayer, "useRef{player}\nuseState{[play, setPlay](false)}");

var _default = VideoPlayer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VideoPlayer, "VideoPlayer", "/Users/tom.nguyen/Dev/mama-lynns-site/src/components/VideoPlayer.js");
  reactHotLoader.register(_default, "default", "/Users/tom.nguyen/Dev/mama-lynns-site/src/components/VideoPlayer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/all.sass":
/*!*********************************!*\
  !*** ./src/components/all.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1610474158400
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "?7682":
false,

/***/ "?d2da":
false

})
//# sourceMappingURL=cms.e91de0616ac241e9728c.hot-update.js.map