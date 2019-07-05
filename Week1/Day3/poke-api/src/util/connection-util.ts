import { Pool } from 'pg';

export const connectionPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'poke_api',
  password: 'ask',
  port: 5433,
  max: 3
});

