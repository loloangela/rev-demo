import { User } from '../models/user';
import { connectionPool } from '../util/connection-util';

export async function findAll(): Promise<User[]> {
  const client = await connectionPool.connect();
  try {
    const result = await client.query('SELECT * FROM users');
    return result.rows.map(sql_user => {
      console.log(`sql_user`);
      return {
        id: sql_user.user_id,
        username: sql_user.username,
        password: 'string',
        name: sql_user.name
      };
    });
  } finally {
    client.release();
  }
}