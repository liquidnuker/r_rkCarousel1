webpackJsonp([1],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// use export default for async wrap
// import {store} from "../js/store.js";

function PrevButton(props) {
  return React.createElement(
    "span",
    { className: "rkCarousel104_previous", onClick: props.pr_onClick },
    React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", className: "rkCarousel104_chevron" },
      React.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
    )
  );
}

function NextButton(props) {
  return React.createElement(
    "span",
    { className: "rkCarousel104_next", onClick: props.pr_onClick },
    React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", className: "rkCarousel104_chevron" },
      React.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
    )
  );
}

var RkCarousel104 = function (_React$Component) {
  _inherits(RkCarousel104, _React$Component);

  function RkCarousel104(props) {
    _classCallCheck(this, RkCarousel104);

    var _this = _possibleConstructorReturn(this, (RkCarousel104.__proto__ || Object.getPrototypeOf(RkCarousel104)).call(this, props));

    _this.state = {
      items: [{
        itemName: "item1",
        description: "desc1",
        imgSrc: "",
        isActive: true
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
      }],
      cIndex: 0,
      activePageButton: 0
    };

    // binders
    return _this;
  }

  // lifecycle hooks

  // methods


  _createClass(RkCarousel104, [{
    key: "nextItem",
    value: function nextItem() {
      var state = this.state; // "this" remover
      state.cIndex = state.cIndex + 1;
      state.cIndex = state.cIndex % state.items.length; // go to first

      this.setActivePageButton(state.cIndex);
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      var state = this.state;
      if (state.cIndex === 0) {
        state.cIndex = state.items.length; // go to last
      }
      state.cIndex = state.cIndex - 1;

      this.setActivePageButton(state.cIndex);
    }
  }, {
    key: "customPage",
    value: function customPage(index) {
      this.state.cIndex = index;
      this.setActivePageButton(index);
    }
  }, {
    key: "setActivePageButton",
    value: function setActivePageButton(index) {
      var activeItem = index;
      var state = this.state;

      state.items[activeItem].isActive = true;

      if (state.activePageButton !== activeItem) {
        state.items[state.activePageButton].isActive = false;

        // set current activePageButton
        state.activePageButton = activeItem;
      }

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

      var items = this.state.items;
      var isActive = this.state.isActive;

      return React.createElement(
        "div",
        { className: "rkCarousel104" },
        React.createElement(
          "div",
          { className: "rkCarousel104_content" },
          items[this.state.cIndex].itemName,
          React.createElement("br", null),
          React.createElement(
            "div",
            { className: "rkCarousel104_description" },
            items[this.state.cIndex].description
          )
        ),
        React.createElement(
          "nav",
          { className: "rkCarousel104_pagination" },
          items.map(function (i, index) {
            return React.createElement("div", { className: items[index].isActive ? 'rkCarousel104_pagebuttons rkCarousel104_active' : 'rkCarousel104_pagebuttons',
              onClick: function onClick() {
                _this3.customPage(index);
              } });
          })
        ),
        React.createElement(
          "div",
          { className: "row rkCarousel104_prevnext" },
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

  return RkCarousel104;
}(React.Component);

exports.default = RkCarousel104;

/***/ })

});