'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var _ = _interopDefault(require('lodash'));

// const {join} = require('path');
// const _ = require('lodash');

let config={
    VIEWS_DIR: path.join(__dirname, '..', 'views'),
    STATIC_DIR: path.join(__dirname, '..', 'assets'),
    COMPONENTS_DIR: path.join(__dirname, '..', 'components'),
    baseUrl: "http://www.book.com"
};

{
    let proConfig = {
        PROT: 3001,
    };
    config = _.extend(config, proConfig);
}

module.exports = config;
