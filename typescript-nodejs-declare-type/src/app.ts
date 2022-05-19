import express from 'express';
import dotenv from 'dotenv';
import shortid from 'shortid';
import config from './config';
import {getWindow} from './utils';
import util from './utils';

dotenv.config({path: './config.env'});

const port = process.env.PORT || 2000;
const app = express();

console.log(shortid.generate());

config.getWindows()

getWindow();


util.getCompany();
console.log(util.getWindow());

shortid.generate()


app.get('/', (req:express.Request, res: express.Response) => {
    res.send('hello');
})

app.listen(port, () => console.log('Server started on port %s', port));