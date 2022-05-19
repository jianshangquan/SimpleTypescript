"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
dotenv_1.default.config({ path: './config.env' });
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
// mongoose.connect(url="")
passport_1.default.use(new passport_local_1.default.Strategy(function (username, password, done) {
    console.log(`${username} ${password}`);
    return done(null, {
        username, password
    });
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });
}));
app.use((0, express_session_1.default)({
    secret: 'mysecret',
    // store: 
}));
app.use(express_1.default.static('./public'));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.get('/page', passport_1.default.authenticate('local'), require('./controller/webpageController'));
app.get('/', (req, res) => {
    res.send("Helloworld");
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
