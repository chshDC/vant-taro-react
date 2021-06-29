"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTranslate = void 0;
var base_1 = require("../base");
var string_1 = require("../format/string");
var validate_1 = require("../validate");
var locale_1 = __importDefault(require("../../locale"));
function createTranslate(name) {
    var prefix = string_1.camelize(name) + '.';
    return function (path) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var messages = locale_1.default.messages();
        var message = base_1.get(messages, prefix + path) || base_1.get(messages, path);
        return validate_1.isFunction(message) ? message.apply(void 0, args) : message;
    };
}
exports.createTranslate = createTranslate;
