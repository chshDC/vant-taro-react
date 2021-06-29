"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitToPx = exports.getZIndexStyle = exports.getSizeStyle = exports.addUnit = void 0;
var base_1 = require("../base");
var validate_1 = require("../validate");
function addUnit(value) {
    if (!validate_1.isDef(value)) {
        return undefined;
    }
    return validate_1.isNumeric(value) ? value + "px" : String(value);
}
exports.addUnit = addUnit;
function getSizeStyle(originSize) {
    if (validate_1.isDef(originSize)) {
        var size = addUnit(originSize);
        return {
            width: size,
            height: size,
        };
    }
}
exports.getSizeStyle = getSizeStyle;
function getZIndexStyle(zIndex) {
    var style = {};
    if (zIndex !== undefined) {
        style.zIndex = +zIndex;
    }
    return style;
}
exports.getZIndexStyle = getZIndexStyle;
// cache
var rootFontSize;
function getRootFontSize() {
    if (!rootFontSize) {
        var doc = document.documentElement;
        var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
        rootFontSize = parseFloat(fontSize);
    }
    return rootFontSize;
}
function convertRem(value) {
    value = value.replace(/rem/g, '');
    return +value * getRootFontSize();
}
function convertVw(value) {
    value = value.replace(/vw/g, '');
    return (+value * window.innerWidth) / 100;
}
function convertVh(value) {
    value = value.replace(/vh/g, '');
    return (+value * window.innerHeight) / 100;
}
function unitToPx(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (base_1.inBrowser) {
        if (value.includes('rem')) {
            return convertRem(value);
        }
        if (value.includes('vw')) {
            return convertVw(value);
        }
        if (value.includes('vh')) {
            return convertVh(value);
        }
    }
    return parseFloat(value);
}
exports.unitToPx = unitToPx;
