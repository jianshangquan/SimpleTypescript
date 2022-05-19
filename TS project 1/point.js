"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Points1 = void 0;
var Points1 = /** @class */ (function () {
    function Points1(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Points1.prototype.draw = function () {
    };
    Object.defineProperty(Points1.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("");
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Points1.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("");
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Points1;
}());
exports.Points1 = Points1;
