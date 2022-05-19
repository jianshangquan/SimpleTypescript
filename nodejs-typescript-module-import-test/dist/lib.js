"use strict";
// global.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.add = void 0;
let value = [];
function add(newValue) {
    value.push(newValue);
}
exports.add = add;
function get() {
    return value;
}
exports.get = get;
