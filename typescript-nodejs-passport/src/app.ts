import express, {Request, Response, Application} from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import env from 'dotenv';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import mongoose from 'mongoose';


env.config({path: './config.env'});


const PORT = process.env.PORT || 8080;
const app = express();


// mongoose.connect(url="")



passport.use(new LocalStrategy.Strategy(
    function(username, password, done) {
        console.log(`${username} ${password}`);
        return done(null, {
            username, password
        })
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
      }
));


app.use(session({
    secret: 'mysecret',
    // store: 
}));
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());



app.get('/page', passport.authenticate('local') , require('./controller/webpageController'));
app.get('/', (req:any, res:any) => {
    res.send("Helloworld");
});



app.listen(PORT,() => console.log(`Listening on port ${PORT}`));





interface User{
    name: string;
    id: string;
}


type UserProperties =  keyof User;
let usr: UserProperties = 'name';
let str: UserProperties = 'id';

usr = str;
