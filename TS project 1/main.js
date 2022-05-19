"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a;
var b;
var c;
var d = [1, 2, 3];
var e;
var f = [1, " ", 1.1, false, true];
var ColorRed = 0;
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Yellow"] = 2] = "Yellow";
})(Colors || (Colors = {}));
var backgroundColor = Colors.Red;
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
// }
var Points = /** @class */ (function () {
    function Points(x, y) {
        this.x = x;
        this.y = y;
    }
    Points.prototype.draw = function () {
    };
    return Points;
}());
var point_1 = require("./point");
var point = new point_1.Points1(1, 2);
point.draw();
// function drawPoint(point: {x: number, y: number}){
//     //.. do something
// }
// function drawPoint(point: Point){
//     //.. do something
// }
// function getDistance(point: Point, pointB: Point){
//     //...
// }
// drawPoint({
//     x: 1,
//     y: 1
// });
