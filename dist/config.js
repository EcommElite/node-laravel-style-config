'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dotObject = require('dot-object');

var _dotObject2 = _interopRequireDefault(_dotObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conf = {

    config: {},

    func: function func(value) {
        var or = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


        var result = _dotObject2.default.pick(value, conf.config);

        if (!result) {
            result = or;
        }

        return result;
    },

    set: function set(config) {
        conf.config = config;
    }
};

exports.default = conf;