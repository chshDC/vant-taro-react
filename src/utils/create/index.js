"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNamespace = void 0;
var bem_1 = require("./bem");
var translate_1 = require("./translate");
function createNamespace(name) {
    var prefixedName = "van-" + name;
    return [
        prefixedName,
        bem_1.createBEM(prefixedName),
        translate_1.createTranslate(prefixedName),
    ];
}
exports.createNamespace = createNamespace;
