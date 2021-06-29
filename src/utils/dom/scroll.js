"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetScroll = exports.getVisibleTop = exports.getVisibleHeight = exports.getElementTop = exports.setRootScrollTop = exports.getRootScrollTop = exports.setScrollTop = exports.getScrollTop = void 0;
var validate_1 = require("../validate");
function isWindow(val) {
    return val === window;
}
function getScrollTop(el) {
    var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
    // iOS scroll bounce cause minus scrollTop
    return Math.max(top, 0);
}
exports.getScrollTop = getScrollTop;
function setScrollTop(el, value) {
    if ('scrollTop' in el) {
        el.scrollTop = value;
    }
    else {
        el.scrollTo(el.scrollX, value);
    }
}
exports.setScrollTop = setScrollTop;
function getRootScrollTop() {
    return (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0);
}
exports.getRootScrollTop = getRootScrollTop;
function setRootScrollTop(value) {
    setScrollTop(window, value);
    setScrollTop(document.body, value);
}
exports.setRootScrollTop = setRootScrollTop;
// get distance from element top to page top or scroller top
function getElementTop(el, scroller) {
    if (isWindow(el)) {
        return 0;
    }
    var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
    return el.getBoundingClientRect().top + scrollTop;
}
exports.getElementTop = getElementTop;
function getVisibleHeight(el) {
    if (isWindow(el)) {
        return el.innerHeight;
    }
    return el.getBoundingClientRect().height;
}
exports.getVisibleHeight = getVisibleHeight;
function getVisibleTop(el) {
    if (isWindow(el)) {
        return 0;
    }
    return el.getBoundingClientRect().top;
}
exports.getVisibleTop = getVisibleTop;
var isIOS = validate_1.isIOS();
// hack for iOS12 page scroll
// see: https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
function resetScroll() {
    if (isIOS) {
        setRootScrollTop(getRootScrollTop());
    }
}
exports.resetScroll = resetScroll;
