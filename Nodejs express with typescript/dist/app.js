"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const add = (a, b) => a + b;
app.get('/', (req, res) => {
    console.log(add(4, 5));
    res.send("Hello");
});
app.listen(5000, () => console.log(`typescript server started on port 5000`));
