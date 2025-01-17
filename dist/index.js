(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-multi-bar-slider"] = factory();
	else
		root["react-multi-bar-slider"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpreact_multi_bar_slider([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var processStyle = function processStyle(style, props) {
  return typeof style === 'function' ? style(props) : style;
};

exports.default = processStyle;

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var transition = 'all 450ms cubic-bezier(.23, 1, .32, 1) 0ms';
exports.default = transition;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getHalf = function getHalf(value) {
  if (typeof value === 'number') return value / 2;
  var asNumber = parseFloat(value);
  var unit = value.slice(asNumber.toString().length, value.length);
  return '' + asNumber / 2 + unit;
};

exports.default = getHalf;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dot = exports.Progress = undefined;

var _MultiSlider = __webpack_require__(17);

var _MultiSlider2 = _interopRequireDefault(_MultiSlider);

var _Progress = __webpack_require__(42);

var _Progress2 = _interopRequireDefault(_Progress);

var _Dot = __webpack_require__(44);

var _Dot2 = _interopRequireDefault(_Dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MultiSlider2.default;
exports.Progress = _Progress2.default;
exports.Dot = _Dot2.default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getProgressFromMousePosition = __webpack_require__(24);

var _getProgressFromMousePosition2 = _interopRequireDefault(_getProgressFromMousePosition);

var _progressEqual = __webpack_require__(27);

var _progressEqual2 = _interopRequireDefault(_progressEqual);

var _sortProgress = __webpack_require__(28);

var _sortProgress2 = _interopRequireDefault(_sortProgress);

var _Slider = __webpack_require__(29);

var _Slider2 = _interopRequireDefault(_Slider);

var _SlidableZone = __webpack_require__(41);

var _SlidableZone2 = _interopRequireDefault(_SlidableZone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiSlider = function (_Component) {
  _inherits(MultiSlider, _Component);

  function MultiSlider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MultiSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiSlider.__proto__ || Object.getPrototypeOf(MultiSlider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { mouseDown: false }, _this.componentDidMount = function () {
      if (!_this.props.readOnly && !_this.props.onSlide) {
        // eslint-disable-next-line
        console.error('[MultiSlider] No onSlide callback provided, but slider is not read-only!');
      }
    }, _this.handleSlide = function (e) {
      var _this$props = _this.props,
          onSlide = _this$props.onSlide,
          reversed = _this$props.reversed,
          readOnly = _this$props.readOnly,
          max = _this$props.max;

      if (readOnly) return;

      var newProgress = (0, _getProgressFromMousePosition2.default)(e, reversed, max);
      if (newProgress === null) return;
      onSlide(newProgress);
    }, _this.handleMouseMoveActivate = function (e) {
      var max = _this.props.max;


      var isLeftButton = !e.button || e.button === 0;
      if (!isLeftButton) return;

      if (_this.state.mouseDown) return;
      _this.setState({ mouseDown: true });

      var _this$props2 = _this.props,
          onDragStart = _this$props2.onDragStart,
          reversed = _this$props2.reversed;

      if (!onDragStart) return;

      var newProgress = (0, _getProgressFromMousePosition2.default)(e, reversed, max);
      if (newProgress === null) return;
      onDragStart(newProgress);
    }, _this.handleMouseMoveDeactivate = function (e) {
      var max = _this.props.max;


      if (!_this.state.mouseDown) return;
      _this.setState({ mouseDown: false });

      _this.handleSlide(e);

      var _this$props3 = _this.props,
          onDragStop = _this$props3.onDragStop,
          reversed = _this$props3.reversed;

      if (!onDragStop) return;

      var newProgress = (0, _getProgressFromMousePosition2.default)(e, reversed, max);
      if (newProgress === null) return;
      onDragStop(newProgress);
    }, _this.handleMouseMove = function (e) {
      if (!_this.state.mouseDown) return;
      _this.handleSlide(e);
    }, _this.render = function () {
      var _this$props4 = _this.props,
          max = _this$props4.max,
          width = _this$props4.width,
          height = _this$props4.height,
          slidableZoneSize = _this$props4.slidableZoneSize,
          backgroundColor = _this$props4.backgroundColor,
          equalColor = _this$props4.equalColor,
          style = _this$props4.style,
          onSlide = _this$props4.onSlide,
          onDragStart = _this$props4.onDragStart,
          onDragStop = _this$props4.onDragStop,
          roundedCorners = _this$props4.roundedCorners,
          reversed = _this$props4.reversed,
          readOnly = _this$props4.readOnly,
          children = _this$props4.children,
          props = _objectWithoutProperties(_this$props4, ['max', 'width', 'height', 'slidableZoneSize', 'backgroundColor', 'equalColor', 'style', 'onSlide', 'onDragStart', 'onDragStop', 'roundedCorners', 'reversed', 'readOnly', 'children']);

      var childrenArr = _react.Children.toArray(children);
      var allProgressEqual = (0, _progressEqual2.default)(childrenArr);
      var sortedProgress = (0, _sortProgress2.default)(childrenArr);

      return _react2.default.createElement(
        _Slider2.default,
        _extends({
          max: max,
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          style: style,
          onMouseMoveActivate: _this.handleMouseMoveActivate,
          onMouseMoveDeactivate: _this.handleMouseMoveDeactivate,
          onMouseMove: _this.handleMouseMove,
          roundedCorners: roundedCorners,
          readOnly: readOnly
        }, props),
        childrenArr.map(function (child) {
          return _react2.default.cloneElement(child, {
            height: height,
            progressEqual: allProgressEqual,
            equalColor: equalColor,
            roundedCorners: roundedCorners,
            reversed: reversed,
            mouseDown: _this.state.mouseDown,
            zIndex: sortedProgress.indexOf(child)
          });
        }),
        _react2.default.createElement(_SlidableZone2.default, { size: slidableZoneSize, zIndex: childrenArr.length })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return MultiSlider;
}(_react.Component);

MultiSlider.displayName = 'MultiSlider';
MultiSlider.propTypes = {
  max: _propTypes2.default.number,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  slidableZoneSize: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  backgroundColor: _propTypes2.default.string,
  equalColor: _propTypes2.default.string,
  style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  onSlide: _propTypes2.default.func,
  onDragStart: _propTypes2.default.func,
  onDragStop: _propTypes2.default.func,
  roundedCorners: _propTypes2.default.bool,
  reversed: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired
};
MultiSlider.defaultProps = {
  max: 100,
  width: '100%',
  height: 14,
  slidableZoneSize: 7,
  backgroundColor: '#EEEEEE',
  style: {},
  roundedCorners: false,
  reversed: false,
  readOnly: false
};
exports.default = MultiSlider;

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSliderElement = __webpack_require__(25);

var _getSliderElement2 = _interopRequireDefault(_getSliderElement);

var _limitProgress = __webpack_require__(26);

var _limitProgress2 = _interopRequireDefault(_limitProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getProgressFromMousePosition = function getProgressFromMousePosition(e, reversed) {
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

  var sliderElement = (0, _getSliderElement2.default)(e);
  var boundingRect = sliderElement.getBoundingClientRect();
  var xOffset = getXOffset(e);

  if (typeof xOffset !== 'number') {
    return null;
  }

  var eventOffsetFromLeftWrapperBoundary = xOffset - boundingRect.left;
  var progressWithinWrapperBoundaries = eventOffsetFromLeftWrapperBoundary / boundingRect.width;
  var progressPercentage = Math.round(progressWithinWrapperBoundaries * max);

  if (reversed) {
    return (0, _limitProgress2.default)(max - progressPercentage, max);
  }

  return (0, _limitProgress2.default)(progressPercentage, max);
};

var getXOffset = function getXOffset(e) {
  var firstTouch = e.touches && e.touches[0];

  if (typeof e.pageX === 'number') {
    return e.pageX;
  }

  return firstTouch && firstTouch.clientX;
};

exports.default = getProgressFromMousePosition;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSliderElement = function getSliderElement(e) {
  var sliderElement = e.target;
  var elementClass = sliderElement.classList[1];

  if (elementClass === 'icon') {
    return sliderElement.parentNode.parentNode;
  }

  if (elementClass === 'dot' || elementClass === 'progress') {
    return sliderElement.parentNode;
  }

  return sliderElement;
};

exports.default = getSliderElement;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var limitProgress = function limitProgress(progress) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return Math.max(Math.min(progress, max), 0);
};
exports.default = limitProgress;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var progressEqual = function progressEqual(progress) {
  return progress.reduce(function (acc, progressBar, i) {
    if (!acc) return acc;
    if (!progress[i - 1]) return true;
    return progressBar.props.progress === progress[i - 1].props.progress;
  }, true);
};

exports.default = progressEqual;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sortProgress = function sortProgress(progress) {
  return [].concat(_toConsumableArray(progress)).sort(function (a, b) {
    return b.props.progress - a.props.progress;
  });
};

exports.default = sortProgress;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _processStyle = __webpack_require__(6);

var _processStyle2 = _interopRequireDefault(_processStyle);

var _StyledSlider = __webpack_require__(30);

var _StyledSlider2 = _interopRequireDefault(_StyledSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Slider = function Slider(_ref) {
  var max = _ref.max,
      width = _ref.width,
      height = _ref.height,
      backgroundColor = _ref.backgroundColor,
      style = _ref.style,
      onMouseMoveActivate = _ref.onMouseMoveActivate,
      onMouseMoveDeactivate = _ref.onMouseMoveDeactivate,
      onMouseMove = _ref.onMouseMove,
      roundedCorners = _ref.roundedCorners,
      readOnly = _ref.readOnly,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['max', 'width', 'height', 'backgroundColor', 'style', 'onMouseMoveActivate', 'onMouseMoveDeactivate', 'onMouseMove', 'roundedCorners', 'readOnly', 'children']);

  return _react2.default.createElement(
    _StyledSlider2.default,
    _extends({
      max: max,
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      roundedCorners: roundedCorners,
      readOnly: readOnly,
      css: (0, _processStyle2.default)(style, {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        roundedCorners: roundedCorners,
        readOnly: readOnly
      }),
      onMouseDown: onMouseMoveActivate,
      onMouseUp: onMouseMoveDeactivate,
      onMouseLeave: onMouseMoveDeactivate,
      onMouseMove: onMouseMove,
      onTouchStart: onMouseMoveActivate,
      onTouchEnd: onMouseMoveDeactivate,
      onTouchCancel: onMouseMoveDeactivate,
      onTouchMove: onMouseMove
    }, props),
    children
  );
};

Slider.displayName = 'Slider';

Slider.propTypes = {
  max: _propTypes2.default.number,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  backgroundColor: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]).isRequired,
  onMouseMoveActivate: _propTypes2.default.func.isRequired,
  onMouseMoveDeactivate: _propTypes2.default.func.isRequired,
  onMouseMove: _propTypes2.default.func.isRequired,
  roundedCorners: _propTypes2.default.bool.isRequired,
  readOnly: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = Slider;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = __webpack_require__(3);

var _styled2 = _interopRequireDefault(_styled);

var _transition = __webpack_require__(8);

var _transition2 = _interopRequireDefault(_transition);

var _getHalf = __webpack_require__(15);

var _getHalf2 = _interopRequireDefault(_getHalf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledSlider = (0, _styled2.default)('div')({
  position: 'relative',
  height: 14,
  boxSizing: 'border-box',
  transition: _transition2.default
}, function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      backgroundColor = _ref.backgroundColor,
      roundedCorners = _ref.roundedCorners,
      readOnly = _ref.readOnly,
      css = _ref.css;
  return _extends({
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: roundedCorners ? (0, _getHalf2.default)(height) : 0,
    cursor: readOnly ? 'auto' : 'pointer'
  }, css);
});

StyledSlider.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  backgroundColor: _propTypes2.default.string.isRequired,
  roundedCorners: _propTypes2.default.bool.isRequired,
  readOnly: _propTypes2.default.bool.isRequired,
  css: _propTypes2.default.object.isRequired
};

StyledSlider.defaultProps = {
  css: null
};

exports.default = StyledSlider;

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = __webpack_require__(3);

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlidableZone = (0, _styled2.default)('div')({
  position: 'absolute',
  width: '100%'
}, function (_ref) {
  var size = _ref.size,
      zIndex = _ref.zIndex;
  return {
    top: -size,
    bottom: -size,
    zIndex: zIndex
  };
});

SlidableZone.propTypes = {
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  zIndex: _propTypes2.default.number.isRequired
};

exports.default = SlidableZone;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _processStyle = __webpack_require__(6);

var _processStyle2 = _interopRequireDefault(_processStyle);

var _StyledProgress = __webpack_require__(43);

var _StyledProgress2 = _interopRequireDefault(_StyledProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Progress = function Progress(_ref) {
  var max = _ref.max,
      color = _ref.color,
      progress = _ref.progress,
      style = _ref.style,
      height = _ref.height,
      progressEqual = _ref.progressEqual,
      equalColor = _ref.equalColor,
      roundedCorners = _ref.roundedCorners,
      reversed = _ref.reversed,
      mouseDown = _ref.mouseDown,
      zIndex = _ref.zIndex,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['max', 'color', 'progress', 'style', 'height', 'progressEqual', 'equalColor', 'roundedCorners', 'reversed', 'mouseDown', 'zIndex', 'children']);

  return _react2.default.createElement(
    _StyledProgress2.default,
    _extends({
      max: max || 100,
      className: 'multi-bar-progress',
      color: color,
      progress: progress,
      height: height,
      equal: progressEqual,
      equalColor: equalColor,
      roundedCorners: roundedCorners,
      reversed: reversed,
      noTransition: mouseDown,
      zIndex: zIndex,
      css: (0, _processStyle2.default)(style, {
        color: color,
        progress: progress,
        height: height,
        progressEqual: progressEqual,
        equalColor: equalColor,
        roundedCorners: roundedCorners,
        reversed: reversed,
        mouseDown: mouseDown,
        zIndex: zIndex
      })
    }, props),
    children && _react.Children.map(children, function (child) {
      return _react2.default.cloneElement(child, {
        progressColor: color,
        reversed: reversed,
        mouseDown: mouseDown
      });
    })
  );
};

Progress.displayName = 'Progress';

Progress.propTypes = {
  max: _propTypes2.default.number,
  color: _propTypes2.default.string.isRequired,
  progress: _propTypes2.default.number.isRequired,
  style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  progressEqual: _propTypes2.default.bool,
  equalColor: _propTypes2.default.string,
  roundedCorners: _propTypes2.default.bool,
  reversed: _propTypes2.default.bool,
  mouseDown: _propTypes2.default.bool,
  zIndex: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = Progress;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = __webpack_require__(3);

var _styled2 = _interopRequireDefault(_styled);

var _transition = __webpack_require__(8);

var _transition2 = _interopRequireDefault(_transition);

var _getHalf = __webpack_require__(15);

var _getHalf2 = _interopRequireDefault(_getHalf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledProgress = (0, _styled2.default)('div')({
  position: 'absolute',
  top: 0
}, function (_ref) {
  var max = _ref.max,
      color = _ref.color,
      progress = _ref.progress,
      height = _ref.height,
      equal = _ref.equal,
      equalColor = _ref.equalColor,
      roundedCorners = _ref.roundedCorners,
      reversed = _ref.reversed,
      noTransition = _ref.noTransition,
      zIndex = _ref.zIndex,
      css = _ref.css;
  return _extends({
    left: reversed ? 'auto' : 0,
    right: reversed ? 0 : 'auto',
    width: (100 - (max - progress) / max * 100 || 0) + '%',
    height: height,
    backgroundColor: equal && equalColor ? equalColor : color,
    borderRadius: roundedCorners ? (0, _getHalf2.default)(height) : 0,
    zIndex: zIndex,
    transition: noTransition ? 'none' : _transition2.default
  }, css);
});

StyledProgress.propTypes = {
  max: _propTypes2.default.number.isRequired,
  color: _propTypes2.default.string.isRequired,
  progress: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  equal: _propTypes2.default.bool.isRequired,
  equalColor: _propTypes2.default.string,
  roundedCorners: _propTypes2.default.bool.isRequired,
  reversed: _propTypes2.default.bool.isRequired,
  noTransition: _propTypes2.default.bool.isRequired,
  zIndex: _propTypes2.default.number.isRequired,
  css: _propTypes2.default.object
};

StyledProgress.defaultProps = {
  equal: false,
  css: null
};

exports.default = StyledProgress;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _processStyle = __webpack_require__(6);

var _processStyle2 = _interopRequireDefault(_processStyle);

var _StyledDot = __webpack_require__(45);

var _StyledDot2 = _interopRequireDefault(_StyledDot);

var _DotIcon = __webpack_require__(46);

var _DotIcon2 = _interopRequireDefault(_DotIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Dot = function Dot(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      icon = _ref.icon,
      style = _ref.style,
      iconStyle = _ref.iconStyle,
      progressColor = _ref.progressColor,
      reversed = _ref.reversed,
      mouseDown = _ref.mouseDown,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['width', 'height', 'color', 'icon', 'style', 'iconStyle', 'progressColor', 'reversed', 'mouseDown', 'children']);

  return _react2.default.createElement(
    _StyledDot2.default,
    _extends({
      className: 'dot',
      hasIcon: !!icon,
      width: width,
      height: height,
      color: color || progressColor,
      reversed: reversed,
      noTransition: mouseDown,
      css: (0, _processStyle2.default)(style, {
        width: width,
        height: height,
        color: color,
        icon: icon,
        progressColor: progressColor,
        reversed: reversed,
        mouseDown: mouseDown
      })
    }, props),
    icon && _react2.default.createElement(_DotIcon2.default, {
      className: 'icon',
      src: icon,
      width: width,
      height: height,
      draggable: false,
      css: (0, _processStyle2.default)(iconStyle, {
        width: width,
        height: height,
        color: color,
        icon: icon,
        progressColor: progressColor,
        mouseDown: mouseDown
      })
    }),
    children
  );
};

Dot.displayName = 'Dot';

Dot.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  color: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  iconStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  progressColor: _propTypes2.default.string,
  reversed: _propTypes2.default.bool,
  mouseDown: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

exports.default = Dot;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = __webpack_require__(3);

var _styled2 = _interopRequireDefault(_styled);

var _transition = __webpack_require__(8);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDot = (0, _styled2.default)('span')({
  position: 'absolute',
  right: 0,
  display: 'block',
  zIndex: 5,
  borderRadius: '50%'
}, function (_ref) {
  var hasIcon = _ref.hasIcon,
      width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      reversed = _ref.reversed,
      noTransition = _ref.noTransition,
      css = _ref.css;
  return _extends({
    top: hasIcon ? 0 : '50%',
    left: reversed ? 0 : 'auto',
    right: reversed ? 'auto' : 0,
    transform: hasIcon ? 'translateX(-50%)' : reversed ? 'translate(-50%, -50%)' : 'translate(50%, -50%)',
    width: hasIcon ? 0 : width,
    height: hasIcon ? 0 : height,
    backgroundColor: hasIcon ? 'transparent' : color,
    transition: noTransition ? 'none' : _transition2.default
  }, css);
});

StyledDot.propTypes = {
  hasIcon: _propTypes2.default.bool.isRequired,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  color: _propTypes2.default.string.isRequired,
  reversed: _propTypes2.default.bool.isRequired,
  noTransition: _propTypes2.default.bool.isRequired,
  css: _propTypes2.default.object
};

StyledDot.defaultProps = {
  width: 28,
  height: 28,
  css: null
};

exports.default = StyledDot;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = __webpack_require__(3);

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DotIcon = (0, _styled2.default)('img')({
  position: 'absolute',
  transform: 'translateX(-50%)',
  userDrag: 'none',
  userSelect: 'none'
}, function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      css = _ref.css;
  return _extends({
    width: width,
    height: height
  }, css);
});

DotIcon.displayName = 'DotIcon';

DotIcon.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  css: _propTypes2.default.object
};

DotIcon.defaultProps = {
  width: 50,
  height: 50,
  css: null
};

exports.default = DotIcon;

/***/ })
],[16]);
});