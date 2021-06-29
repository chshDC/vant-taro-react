"use strict";
// import { PropType, ComponentPublicInstance } from 'vue';
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.get = exports.truthProp = exports.inBrowser = exports.extend = exports.noop = void 0;
function noop() { }
exports.noop = noop;
exports.extend = Object.assign;
exports.inBrowser = typeof window !== 'undefined';
// PropTypes
// export const unknownProp = (null as unknown) as PropType<unknown>;
exports.truthProp = {
    type: Boolean,
    default: true,
};
// eslint-disable-next-line
// export type ComponentInstance = ComponentPublicInstance<{}, any>;
function get(object, path) {
    var keys = path.split('.');
    var result = object;
    keys.forEach(function (key) {
        var _a;
        result = (_a = result[key]) !== null && _a !== void 0 ? _a : '';
    });
    return result;
}
exports.get = get;
function pick(obj, keys, ignoreUndefined) {
    return keys.reduce(function (ret, key) {
        if (!ignoreUndefined || obj[key] !== undefined) {
            ret[key] = obj[key];
        }
        return ret;
    }, {});
}
exports.pick = pick;
