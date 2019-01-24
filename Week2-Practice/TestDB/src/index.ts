import express from 'express';
import bodyParser from 'body-parser';
import { connectURL } from './connect';

const app = express();
app.use(bodyParser.json());

// Connection to db
const pg = require('pg');
const connection = connectURL();

const client = new pg.Client(connection);
client.connect();

app.post('/login', (req, res) => {
  console.log('POST REQUEST');
  client.query(`SELECT user_id FROM users WHERE username='${req.body['username']}' AND user_pass='${req.body['user_pass']}';`, (err, response) => {
    if (err) {
      console.log(`Error: ${err.stack}`);
    } else {
      console.log(`Response:\nuser_id: ${response.rows[0]['user_id']}`);
      res.json(response.rows);
    }
  })
});

app.listen(3000);
console.log('Application is running on port 3000');
