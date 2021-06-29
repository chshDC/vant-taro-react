"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = void 0;
var validate_1 = require("./validate");
function deepClone(obj) {
    if (!validate_1.isDef(obj)) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(function (item) { return deepClone(item); });
    }
    if (typeof obj === 'object') {
        var to_1 = {};
        Object.keys(obj).forEach(function (key) {
            to_1[key] = deepClone(obj[key]);
        });
        return to_1;
    }
    return obj;
}
exports.deepClone = deepClone;
