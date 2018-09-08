(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var store = {
  items: [{
    itemName: "item1",
    description: "desc1",
    imgSrc: "",
    isActive: false
  }, {
    itemName: "item2",
    description: "desc2",
    imgSrc: "",
    isActive: false
  }, {
    itemName: "item3",
    description: "desc3",
    imgSrc: "",
    isActive: false
  }]
};

exports.store = store;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(30);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(56);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(57);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(61);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(108);

var _inherits3 = _interopRequireDefault(_inherits2);

var _store = __webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PrevButton(props) {
  return React.createElement(
    "button",
    { className: "rkCarousel101_previous", onClick: props.pr_onClick },
    React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
    ),
    React.createElement(
      "span",
      null,
      "Previous"
    )
  );
} // use export default for async wrap


function NextButton(props) {
  return React.createElement(
    "button",
    { className: "rkCarousel101_next", onClick: props.pr_onClick },
    React.createElement(
      "span",
      null,
      "Next"
    ),
    React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
    )
  );
}

var RkCarousel101 = function (_React$Component) {
  (0, _inherits3.default)(RkCarousel101, _React$Component);

  function RkCarousel101(props) {
    (0, _classCallCheck3.default)(this, RkCarousel101);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RkCarousel101.__proto__ || (0, _getPrototypeOf2.default)(RkCarousel101)).call(this, props));

    _this.state = {
      items: _store.store.items,
      cIndex: 0
    };

    // binders
    return _this;
  }

  // lifecycle hooks

  // methods


  (0, _createClass3.default)(RkCarousel101, [{
    key: "nextItem",
    value: function nextItem() {
      var state = this.state; // "this" remover
      state.cIndex = state.cIndex + 1;
      state.cIndex = state.cIndex % state.items.length; // go to first
      // return state.items[state.cIndex];  
      this.refresh();
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      var state = this.state;
      if (state.cIndex === 0) {
        state.cIndex = state.items.length; // go to last
      }
      state.cIndex = state.cIndex - 1;
      // return this.state.items[this.state.cIndex];
      this.refresh();
    }
  }, {
    key: "customPage",
    value: function customPage(index) {
      this.state.cIndex = index;
      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this2 = this;

      this.setState(function (prevState) {
        return {
          cIndex: _this2.state.cIndex
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "rkCarousel101" },
        React.createElement(
          "div",
          { className: "rkCarousel101_content" },
          this.state.items[this.state.cIndex].itemName
        ),
        React.createElement(
          "nav",
          { className: "rkCarousel101_pagination" },
          this.state.items.map(function (i, index) {
            return React.createElement(
              "button",
              { className: "rkCarousel101_pagebuttons", onClick: function onClick() {
                  _this3.customPage(index);
                } },
              index
            );
          })
        ),
        React.createElement(
          "div",
          { className: "rkCarousel101_prevnext" },
          React.createElement(PrevButton, { pr_onClick: function pr_onClick() {
              _this3.prevItem();
            } }),
          React.createElement(NextButton, { pr_onClick: function pr_onClick() {
              _this3.nextItem();
            } })
        )
      );
    }
  }]);
  return RkCarousel101;
}(React.Component);

exports.default = RkCarousel101;

/***/ })

}]);