'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contacts = require('./v1/contacts');

var _contacts2 = _interopRequireDefault(_contacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  v1: {
    contacts: _contacts2.default
  }
};