"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var relativeTimeRounding = require("moment").relativeTimeRounding;
var AuthComponent = (function (Component) {
  function AuthComponent() {
    _classCallCheck(this, AuthComponent);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(AuthComponent, Component);

  _prototypeProperties(AuthComponent, null, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "h1",
            null,
            "Login Form"
          ),
          React.createElement(
            "form",
            null,
            React.createElement(
              "label",
              { id: "usernameLabel" },
              "Username"
            ),
            React.createElement("input", { className: "form-control", type: "text", id: "usernameInput", required: true }),
            React.createElement(
              "label",
              null,
              "Password"
            ),
            React.createElement("input", { className: "form-control", type: "password", id: "passwordInput", required: true }),
            React.createElement(
              "button",
              null,
              "Login"
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return AuthComponent;
})(Component);

module.exports = AuthComponent;