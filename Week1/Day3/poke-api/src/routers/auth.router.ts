import express from 'express';
import { resolvePtr } from 'dns';

export const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
    if (req.body.username === 'lolo' && req.body.password === 'lopass') {
        const user = {
            username: req.body.username,
            role: 'admin'
          };
          req.session.user = user;
          res.json(user);
    } else if (req.body.username === 'hank' && req.body.password === 'password') {
        req.session.role = 'associate';
        res.json({
          username: req.body.username,
          role: 'associate'
        });
      } else {
        res.sendStatus(401);
      }
});