"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepAssign = void 0;
var validate_1 = require("./validate");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function assignKey(to, from, key) {
    var val = from[key];
    if (!validate_1.isDef(val)) {
        return;
    }
    if (!hasOwnProperty.call(to, key) || !validate_1.isObject(val)) {
        to[key] = val;
    }
    else {
        // eslint-disable-next-line no-use-before-define
        to[key] = deepAssign(Object(to[key]), from[key]);
    }
}
function deepAssign(to, from) {
    Object.keys(from).forEach(function (key) {
        assignKey(to, from, key);
    });
    return to;
}
exports.deepAssign = deepAssign;
