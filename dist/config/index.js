"use strict";

var _path = require("path");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const {join} = require('path');
// const _ = require('lodash');
if (false) {
  console.log('aaaa');
}

let config = {
  VIEWS_DIR: (0, _path.join)(__dirname, '..', 'views'),
  STATIC_DIR: (0, _path.join)(__dirname, '..', 'assets'),
  COMPONENTS_DIR: (0, _path.join)(__dirname, '..', 'components'),
  baseUrl: "http://www.book.com"
};

if (process.env.NODE_ENV === 'development') {
  let devConfig = {
    PROT: 3000
  };
  config = _lodash2.default.extend(config, devConfig);
}

if (process.env.NODE_ENV === 'production') {
  let proConfig = {
    PROT: 3001
  };
  config = _lodash2.default.extend(config, proConfig);
}

module.exports = config;