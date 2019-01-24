import express from 'express';
import { User } from '../models/user';
import { authMiddleware } from '../middleware/auth.middleware';

// User data - it is NOT persistant.
const peter = new User(1, 'peter', 'whatup', 'Peter');
const kyle = new User(2, 'kylekills', 'kpassword', 'Kyle');
const users = [kyle, peter];

// We will assume all routes defined with this router start with '/users
export const userRouter = express.Router();

// /users - find all
userRouter.get('', [
    authMiddleware,
    (req, res) => {
    res.json(users);
}]);

// /users - find by id
userRouter.get('/:id', (req, res) => {
    console.log(req.params.id);
    const idParam = +req.params.id;
    const user = users.find(ele => ele.id === +req.params.id);
    res.json(user);
});

// /users - add new user
userRouter.post('', (req, res) => {
    users.push(req.body);
    res.sendStatus(201);
});