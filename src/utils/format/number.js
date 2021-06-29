"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumber = exports.formatNumber = exports.clamp = void 0;
/** clamps number within the inclusive lower and upper bounds */
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
exports.clamp = clamp;
function trimExtraChar(value, char, regExp) {
    var index = value.indexOf(char);
    if (index === -1) {
        return value;
    }
    if (char === '-' && index !== 0) {
        return value.slice(0, index);
    }
    return value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}
function formatNumber(value, allowDot, allowMinus) {
    if (allowDot === void 0) { allowDot = true; }
    if (allowMinus === void 0) { allowMinus = true; }
    if (allowDot) {
        value = trimExtraChar(value, '.', /\./g);
    }
    else {
        value = value.split('.')[0];
    }
    if (allowMinus) {
        value = trimExtraChar(value, '-', /-/g);
    }
    else {
        value = value.replace(/-/, '');
    }
    var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
    return value.replace(regExp, '');
}
exports.formatNumber = formatNumber;
// add num and avoid float number
function addNumber(num1, num2) {
    var cardinal = Math.pow(10, 10);
    return Math.round((num1 + num2) * cardinal) / cardinal;
}
exports.addNumber = addNumber;
