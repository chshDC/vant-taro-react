"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padZero = exports.camelize = void 0;
var camelizeRE = /-(\w)/g;
function camelize(str) {
    return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); });
}
exports.camelize = camelize;
function padZero(num, targetLength) {
    if (targetLength === void 0) { targetLength = 2; }
    var str = num + '';
    while (str.length < targetLength) {
        str = '0' + str;
    }
    return str;
}
exports.padZero = padZero;
