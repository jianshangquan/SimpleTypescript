import express from 'express';
import * as lib from './lib';
import './app2';

const app = express();


lib.add(10);
console.log(lib.get());




app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('hello');
});


