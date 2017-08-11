'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = exports.setConfig = exports.config = undefined;

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _config2.default.func;
var setConfig = _config2.default.set;

// export default {
//
//     env,
//     config,
//     setConfig,
//
// }

// export function base_config.func;
exports.config = config;
exports.setConfig = setConfig;
exports.env = _env2.default;
// export default setConfig;