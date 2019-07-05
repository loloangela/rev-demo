import express from 'express';
import bodyParser = require('body-parser');
import { userRouter } from './routers/users.router';
import session from 'express-session';
import { authRouter } from './routers/auth.router';

const app = express();

// Setup body-parser
app.use(bodyParser.json());
// logging middleware
app.use((req, res, next) => {
    console.log(`request was made with url: ${req.path};
    and method: ${req.method}`);
    console.log(req.headers);
    next();
});

// Setup express to attach sessions
const sess = {
    secret: 'potato',
    cookie: { secure: false},
    resave: false,
    saveUninitialized: false
};
// prior to this req.session is nothing after this req.session is an object

app.use(session(sess));

// Connects authRouter.ts to the url /auth
app.use('/auth', authRouter);
app.use('/users', userRouter);

/*app.get('/users', (req, res) => {
    res.send('Here are your users');
})*/
/*app.post('/users', (req, res) => {
    const user = req.body;
    console.log(user);
    res.sendStatus(201);
})*/
/*
app.get('/pokemon', (req, res) => {
    res.send('Here are your pokemon');
})

app.get('/pokemon-moves', (req, res) => {
    res.send('Here are all the available pokemon moves');
})
*/
app.listen(3000);
console.log('Application running on port 3000');