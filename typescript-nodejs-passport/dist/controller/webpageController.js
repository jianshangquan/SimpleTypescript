"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('*', (req, res, next) => {
    res.send("page router");
});
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}
ZipCodeValidator.numberRegexp = /^[0-9]+$/;
// export = router; // == module.exports = router
// export default router; // ==  module.default = router;
// export = ZipCodeValidator; // == module.exports = ZipCodeValidator;
// export const var2 = 1; // == module.var2 = 1;
// export = router;
module.exports = router;
