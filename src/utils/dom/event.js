"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trigger = exports.preventDefault = exports.stopPropagation = void 0;
function stopPropagation(event) {
    event.stopPropagation();
}
exports.stopPropagation = stopPropagation;
function preventDefault(event, isStopPropagation) {
    /* istanbul ignore else */
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
    }
    if (isStopPropagation) {
        stopPropagation(event);
    }
}
exports.preventDefault = preventDefault;
function trigger(target, type) {
    var inputEvent = document.createEvent('HTMLEvents');
    inputEvent.initEvent(type, true, true);
    target.dispatchEvent(inputEvent);
}
exports.trigger = trigger;
