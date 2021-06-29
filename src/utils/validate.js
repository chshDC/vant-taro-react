"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIOS = exports.isAndroid = exports.isNumeric = exports.isMobile = exports.isDate = exports.isPromise = exports.isObject = exports.isFunction = exports.isDef = void 0;
var base_1 = require("./base");
function isDef(val) {
    return val !== undefined && val !== null;
}
exports.isDef = isDef;
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(val) {
    return typeof val === 'function';
}
exports.isFunction = isFunction;
function isObject(val) {
    return val !== null && typeof val === 'object';
}
exports.isObject = isObject;
function isPromise(val) {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
exports.isPromise = isPromise;
function isDate(val) {
    return (Object.prototype.toString.call(val) === '[object Date]' &&
        !Number.isNaN(val.getTime()));
}
exports.isDate = isDate;
function isMobile(value) {
    value = value.replace(/[^-|\d]/g, '');
    return (/^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value));
}
exports.isMobile = isMobile;
function isNumeric(val) {
    return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}
exports.isNumeric = isNumeric;
function isAndroid() {
    return base_1.inBrowser ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}
exports.isAndroid = isAndroid;
function isIOS() {
    return base_1.inBrowser
        ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
        : false;
}
exports.isIOS = isIOS;
