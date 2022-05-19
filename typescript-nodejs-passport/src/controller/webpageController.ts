import express from 'express';
const router = express.Router();


router.get('*', (req, res, next) => {
    res.send("page router");
})


class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
      return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}

// export = router; // == module.exports = router
// export default router; // ==  module.default = router;
// export = ZipCodeValidator; // == module.exports = ZipCodeValidator;
// export const var2 = 1; // == module.var2 = 1;


// export = router;
module.exports = router;