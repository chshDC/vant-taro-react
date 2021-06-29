"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locale = void 0;
// import { ref, reactive } from 'vue';
var deep_assign_1 = require("../utils/deep-assign");
var zh_CN_1 = __importDefault(require("./lang/zh-CN"));
var lang = 'zh-CN';
var messages = {
    "zh-CN": zh_CN_1.default,
};
// const lang = ref('zh-CN');
// const messages = reactive<Messages>({
//   'zh-CN': defaultMessages,
// });
var Locale = {
    messages: function () {
        return messages[lang];
    },
    use: function (newLang, newMessages) {
        var _a;
        lang = newLang;
        this.add((_a = {}, _a[newLang] = newMessages, _a));
    },
    add: function (newMessages) {
        if (newMessages === void 0) { newMessages = {}; }
        deep_assign_1.deepAssign(messages, newMessages);
    },
};
exports.Locale = Locale;
exports.default = Locale;
