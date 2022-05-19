"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const shortid_1 = __importDefault(require("shortid"));
const config_1 = __importDefault(require("./config"));
const utils_1 = require("./utils");
const utils_2 = __importDefault(require("./utils"));
dotenv_1.default.config({ path: './config.env' });
const port = process.env.PORT || 2000;
const app = (0, express_1.default)();
console.log(shortid_1.default.generate());
config_1.default.getWindows();
(0, utils_1.getWindow)();
utils_2.default.getCompany();
console.log(utils_2.default.getWindow());
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(port, () => console.log('Server started on port %s', port));
