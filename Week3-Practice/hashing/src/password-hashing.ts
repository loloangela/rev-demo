import express from 'express';
import { Pool } from 'pg';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';

// const app = express();
// app.use(bodyParser.json());

let username = 'lolo';
let password = 'chillin';

// Connect to db
async function connectDB(username, password) {
  const creds = {
    database: 'postgres',
    host: 'project0.c5jn9s8xhixw.us-east-2.rds.amazonaws.com',
    user: 'admin1',
    password: 'askadmin',
    port: 5433
  };
  // Hash password and store to db
  bcrypt.hash(password, 10, async function(err, hash) {
    console.log('Inside the bcrypt function');
    let result;
    try {
      const pool = await new Pool(creds);
      let client = await pool.connect();
      console.log('Connected to the db');
      result = await client.query(
        `Update users set password=$1 where user_id=3 RETURNING *;`,
        [hash]
      );
      console.log('Got response from query');
      await client.release();
      console.log('The result from all this is:\n', result.rows);
      // return result;
    } catch (error) {
      console.log('Error, shit fucked up.\n', error);
    }
    console.log('Y it wont end:\n', result.rows);
    return result;
  });
}
async function response(usr, pswd) {
  console.log('In 1st funct');
  let resp = await connectDB(username, password);
  console.log(resp);
}

async function convertHash(username, password) {
  // Typically you would need to get the hashed password from the db
  // but i'm lazy sooo I'll just hard code it
  const hash = '$2b$10$/F.TEWeQPzcS/sq2xMBps.lqfg4p6KsHCHtfA3VdI/jEFLudMlvkK';
  console.log('wtf');
  await bcrypt.compare(
    password,
    hash,
    await function(err, res) {
      if (res) {
        console.log('User is validated', res);
      } else {
        console.log(err);
      }
    }
  );
}

async function doInNormalOrder(username, password) {
  await response(username, password);
  await convertHash(username, password);
}
doInNormalOrder(username, password);
/* app.post('', (req, res) => {

}); */
