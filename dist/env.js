'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dotObject = require('dot-object');

var _dotObject2 = _interopRequireDefault(_dotObject);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env_object = _dotenv2.default.parse(_fsExtra2.default.readFileSync('.env'));

var env = function env(value) {
    var or = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


    var result = _dotObject2.default.pick(value.toUpperCase(), env_object);

    if (!result) {
        result = or;
    }

    return result;
};

exports.default = env;